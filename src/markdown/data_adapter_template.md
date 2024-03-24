# Introduction

> I write this article based on my experience after completing one task of migrating data from MongoDB to MySQL for 5 databases in the condition of preserving more than 270 GB of data with less than 30-minute downtime.

Imagine you are facing a complex data migration task scenario involving many data sources and intricate transformations. For examples:

- Migrate data from a non-relational database to a relational database.
- Migrate data from a relational database to a relational database with schema changes.
- Above examples but using many databases.
- Transform the data from multiple data sources.

You decide to write an efficient code to fully control the transformation logic, but you realize it becomes more and more complicated, and the code organization may become your concern.

This article provides you with a template to build flexible and maintainable code so that you can handle your logic completely.

# Overview

### Specifications

- We assume we have already had backup solutions.
- Generally, we expect a data migration process to start after only one trigger. Say, when we start the first trigger, such as entering a button, or typing a command `npm run start`, etc..., a process should be created and execute the data migration.
- We may meet a case in which we have to manage many disparate data migrations. For instance, we have 3 MongoDB collections `A`, `B`, `C` with different data models, and we want to migrate to 3 new corresponding MySQL databases `A1`, `B1`, `C1` with different schemas. We have to write 3 discrete migration processes, and each process contains a distinct data mapping logic.
- We may need to manage the logging strategies so that we can track the correctness of our mapping logics.
- We need to optimize data mapping logics in both performance and resource consumption to deal with the huge rate of data transfer.

### About the flow

Let's break down the flow first. This is the flow based on the ETL workflow to map the data in the data source `A` to the data source `B`:

1. We first trigger a data migration process.
2. [*Extract*] The process queries data from the data source `A`.
3. [*Transform*] The process transforms data so that it can be imported to the data source `B`.
4. [*Load*] The process imports the data to the data source `B`.

### About the code

We definitely love writing out easily maintainable and extendable codes, so let's divide the code flow into two separate blocks. Each block only handles a specific logic:

- **Command Block:** This block handles the migration processes management logics.
- **Adapter Block:** This block handles the data mapping logics.

![Overview diagram](/images/blogs/db_data_adapter_template/1.webp "Flow overview diagram")

> Let's go through these blocks step by step...

# The command block

This block is where we store the logic of processes management by applying the **Command** design pattern. The idea is to wrap each data mapping process to one _command_ object in order to distinguish all the processes' execution. These _command_ objects follow the same abstract class, so when we invoke to a mapping process from an index file, we just need to interact with the base class, assign the command object we want to run and trigger the execution method.

### Abstract overview

The UML design for this block can be viewed as below:

![Command block UML diagram](/images/blogs/db_data_adapter_template/2.webp "Command block UML diagram")

Say, we have to migrate the data from 4 databases `A`, `B`, `C`, and `D` in the data source `(0)` to the corresponding 4 databases `A1`, `B1`, `C1`, and `D1` in the data source `(1)`.

We will create a _command_ class for the data mapping from `A` to `A1`, called `CmdAtoA1`, and the same with `B` to `B1`, `C` to `C1`, and `D` to `D1`. These classes override the execution method with their own logic, so for the index view, we do not need to be aware of every command's implementation; all we care about is picking the correct command, respectively.

```ts
const entry = new Main();

entry.cmd = new CmdAtoA1();
entry.run();

entry.cmd = new CmdBtoB1();
entry.run();

...
```

### The entry

> The entry class, the main class, or whatever you define...

This class is where you choose a *command* class to run and do any configurations before and after the execution.

```ts
export default class Main {
  private cmd: DataMappingCommand;

  set command(cmd: DataMappingCommand) {
    this.cmd = cmd;
  }

  get command() {
    return this.cmd;
  }

  run() {
    try {
      this.preExecute();
      this.cmd.execute();
      this.postExecute();
    } catch (error) {
      console.log("Lmao WTF???");
      console.log(error);
    }
  }

  private preExecute() {
    console.log("Do something before execution");
  }

  private postExecute() {
    console.log("Do something after execution");
  }
}
```

### Reference to the Adapter

Each _command_ object has a reference to an _adapter_ object via an attribute `adapter`. This attribute follows the type of the abstract _adapter_ class, thus, every _command_ object is able to work with its corresponding _adapter_ as long as both objects inherit the abstract classes.

Sample _command_ classes can be as the following:

```ts
abstract class DataMappingCommand {
  protected adapter: DataMappingAdapter;

  // The `adapter` attribute is assigned in the abstract class constructor
  constructor(adapter: DataMappingAdapter) {
    this.adapter = adapter;
  }

  abstract execute(): void;
}

class CmdAtoA1 extends DataMappingCommand {
  constructor() {
    super(new AdapterAtoA1());
  }

  execute(): void {
    this.adapter.process();
  }
}
```

### The file structure

Creating a well-organized file structure is also preferable for easier maintenance.

```
src/
|―― migration_project_1/
|   ├── command/
|   |   |── index.ts
|   |   |── a_to_a1.ts
|   |   |── b_to_b1.ts
|
|―― migration_project_2/
|   |── command/
|   |   |── index.ts
|   |   |―― a_to_a1.ts
|
|―― lib/
|   |── command/
|   |   |── base.ts
|
|―― index.ts
```

Here, we assume we are writing data mapping scripts, so we create different directories for distinct tasks. Each directory has a command directory, which contains the command invoking the migration processe codes.

The `lib/` directory should store all the abstract classes as well as the common utility functions.

# The adapter block

This block consists of all the logics handling data, or, the core logics. The starting signal, after reaching the **Command** block, will trigger the process method of the **Adapter** block, and start the data migration process.

### Abstract overview

Let's go through the UML diagram for this block:

![Adapter block UML diagram](/images/blogs/db_data_adapter_template/3.webp "Adapter block UML diagram")

An _adapter_ object contains 2 attributes representing 2 data sources that it interacts with: `origin` and `destination`. If you want to perform a data mapping task from MongoDB to PostgreSQL, then assign `origin` to a client object connected to a Mongo instance, and assign `destination` to a Postgres client object.

Every _adapter_ class inherits several methods from the _adapter_ abstract class:

- _process()_
- _test()_
- _extract()_
- _transform()_
- _load()_

`process()`

Basically, the _command_ object should call this method only one when starting the data mapping process. This method takes a responsibility to combine all the sub-processes together. Every execution order of the logic ought to be defined there.

```ts
public process() {
  this.extract();
  this.transform();
  this.load();
}
```

`test()`

This method is mostly for testing purposes. When testing the logic integration, you may use this method for convenience.

`extract()`

This method contains the logic querying data from the origin data source and then store it temporarily in local memory.

`transform()`

This method plays the most essential role of the flow. In here, we define how the data will be tranformed between models, and it is challenging to preserve the correctness of data.

`load()`

We will define how the transformed data be imported to the destination data source in this method.

### Best practices

- We should use appropriate streaming data method for data extraction, it optimizes the bandwidth and help us performing transform data in batch pretty well.
- We should perform transforming and loading progress in batch so that it can optimize the memory consumption in both local machine and destination data source instance as well as the bandwith traffic.
- When transforming data, be careful with the associations between entities of the data source, such as tables in relational database or collections in document-based non-relational database. For example, when we migrate the data from MongoDB to PostgreSQL, we have to implement the mapping logic that map the object id between collections in MongoDB to the primary key or foreign key between SQL tables.

### The file structure

There are 3 base modules built into the **Adapter** block:

- Adapter: for the logics.
- Data source: for the data source client classes.
- Entity: for the data model classes.

For each module, we create a directory to store all the related codes, so the file structure should be like below:

```
src/
|―― migration_project_1/
|   ├── command/
|   |   |── index.ts
|   |   |── a_to_a1.ts
|   |   |── b_to_b1.ts
|   |―― adapter/
|   |   |── index.ts
|   |   |── a_to_a1.ts
|   |   |── b_to_b1.ts
|   |―― data_source/
|   |   |── mongo.ts
|   |   |── postgres.ts
|   |―― entity/
|   |   |── a_to_a1/
|   |   |   |―― a/
|   |   |   |   |── index.ts
|   |   |   |   |── Human.ts
|   |   |   |   |── Animal.ts
|   |   |   |―― a1/
|   |   |   |   |―― index.ts
|   |   |   |   |── Human.ts
|   |   |   |   |── Animal.ts
|   |   |── b_to_b1/
|   |   |   |―― b/
|   |   |   |   |── index.ts
|   |   |   |   |── Vehicle.ts
|   |   |   |―― b1/
|   |   |   |   |―― index.ts
|   |   |   |   |── Vehicle.ts
|
|―― migration_project_2/
|   |── command/
|   |   |── index.ts
|   |   |―― a_to_a1.ts
|   |―― adapter/
|   |   |── index.ts
|   |   |── a_to_a1.ts
|   |── data_source/
|   |   |── mysql.ts
|   |   |―― documentdb.ts
|   |―― entity/
|   |   |── a_to_a1/
|   |   |   |── index.ts
|   |   |   |―― Log.ts
|   |   |   |── Document.ts
|
|―― lib/
|   |── command/
|   |   |── base.ts
|   |―― adapter/
|   |   |── base.ts
|
|―― index.ts
```

# Monitoring

We apparently want to know what is going on during the migration process. That is why logging plays a significant role in monitoring the process. We may consider the following aspects to decide where to put the log:

- How should we display the log? Rendering to console or writing to a log file, or both?
- Measure the time and memory consumption for each processing batch.
- Save any important data in the exception catch, especially when importing the data to the destination data source. It helps us identify which case raised the error and avoid losing data.
- Customize the log output so that we can track the result easily.

# In practices

For the huge amount of data, it is better to have a break point between each progress. This way, we can avoid losing data when any progress is down. If we have to migrate the data between databases, we should dump the data and paginate it efficiently first, then perform the migration progresses.

There are many services that support database migration as well. If our system is cloud-based, then we may want to consider provided cloud data migration services such as AWS DMS, Google Cloud DMS, Azure DMS, etc...

For transforming the data, we may want to think about many popular existing tools first, such as Snowflake, Google Dataflow, or AWS Glue.

Therefore, consider the existing solution wisely and choose the most suitable one for our requirements.

# Conclusion

We have explored how to construct managable data migration processes in code. By levaraging **Command** and **Adapter** patterns, you can establish a clear separation of concerns, promote code maintainability, and simplify the addition of new migration tasks.

I hope it can help you empower the overall ideas behind data processing and be able to tackle even the most complex data scenarios with confidence.

# Appendix

- My whole sample codes - [Github repository](https://github.com/khoaxuantu/data-adapter-template)
