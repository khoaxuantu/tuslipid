## Introduction

> I did a MySQL challenge, but I forgot almost the everything after that, so
> I left these notes here for further references.

## Acknowledgement

A big shout out to [Eric Le](https://www.linkedin.com/in/ericthedata/) for providing a great MySQL
challenge to me 🥳.

## What Is MySQL?

> You think I'm going to explain its definition right here? Just do your Google search, bruh.

<br></br>

> But...

You have better keep in mind this:

### ACID properties :)

[**ACID**](https://www.freecodecamp.org/news/acid-databases-explained/) is an acronym for
_atomicity_, _consistency_, _isolation_, and _durability_.

#### Atomicity

A transaction is an atomic; hence, all the instrutions within an transaction will successfully
executed, or none of them will execute.

#### Consistency

A database is initially in a consistent state, and it should remain consistent after every
transaction.

#### Isolation

Isolation property ensures concurrent transactions should not interfere with each other, and their
results should be the same as if they were executed sequentially.

#### Durability

Changes that have been committed to the database should remain even in the case of software and
system failure.

> Why do I state them here, although they are advanced concepts?
>
> Simply put, they are just too essential for a typical RDBMS ~ Now back to MySQL.

## What Do You Need?

- [Download](https://www.mysql.com/downloads/) MySQL.

### Great to have

- [mycli](https://www.mycli.net/)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [DBeaver](https://dbeaver.io/)
- [DataGrip](https://www.jetbrains.com/datagrip/features/mysql.html)
- [phpMyAdmin](https://www.phpmyadmin.net/)

## Connect To The Database

Commonly use command:

```bash
mysql -u root_or_whatever_your_username -p
```

List databases:

```sql
SHOW DATABASES;
```

Select a database:

```sql
USE a_database;
```

List tables:

```sql
SHOW TABLES;
```

Describe a table:

```sql
DESCRIBE a_table;
```

## Create A New User And Grant Permissions

```sql
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```

```sql
-- GRANT privilege ON database.table TO 'username'@'host'
GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'tusss'@'localhost' WITH GRANT OPTION;
```

-> Full [list](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html#privileges-provided-summary)
of privileges.

```sql
SHOW GRANTS FOR 'username'@'host';
```

---

Delete user?

```sql
DROP USER 'username'@'host';
```

## Querying Overview

#### SELECT

Defines which columns to return.

```sql
SELECT <column1>, <coulumn2>, ...
```

#### FROM

Defines table(s) to query.

```sql
FROM <table1>, <table2>, ...
```

#### WHERE

Filters rows using a predicate.

```sql
WHERE <search_condition>
```

#### GROUP BY

Arranges rows by groups.

```sql
GROUP BY <column1>, <column2>, ...
```

#### HAVING

Filters groups using a predicate.

```sql
HAVING <group_condition>
```

#### ORDER BY

Sorts the output.

```sql
ORDER BY <column1>, <column2>, ...
```

### All together

```sql
[5] SELECT <column1>, <column2>, ...
[1] FROM <table1>, <table2>, ...
[2] WHERE <search_condition>
[3] GROUP BY <column1>, <column2>, ...
[4] HAVING <group_condition>
[6] ORDER BY <column1>, <column2>, ...
```

## Select Statement

You can specify the columns of a table to return:

```sql
SELECT first_name,
       last_name,
       age,
       email,
       phone_number
  FROM users;
```

Or you can return all columns of a table just by `*`:

```sql
SELECT *
  FROM users;
```

## Where Clause

You retrieve records from a table by defining filtering conditions for specific columns of that
table in a query.

```sql
WHERE a_column [comparison_operator] 'a_value'
```

You can define multiple conditions in a query by applying logical operators between each comparison.

```sql
WHERE a_column [comparison_operator] 'a_value' [logical_operator] b_column 'b_value'
```

**Example:**

```sql
SELECT *
  FROM users
 WHERE first_name = 'Tusss'
   AND age = 24
```

## Commonly used comparison operators

| Name                | Description                                                                         |
| ------------------- | ----------------------------------------------------------------------------------- |
| >                   | Greater                                                                             |
| >=                  | Greater than or equal                                                               |
| \<                  | Less                                                                                |
| \<=                 | Less than or equal                                                                  |
| !=                  | Not equal                                                                           |
| \<>                 | Also not equal                                                                      |
| =                   | Equal                                                                               |
| \<=>                | Null safe equal                                                                     |
| BETWEEN ... AND ... | Whether a value is within a set of values (you must set the value from low to high) |
| IN()                | Whether a value is within a set of values                                           |
| NOT IN()            | Whether a value is not within a set of values                                       |
| IS                  | You IS beautiful                                                                    |
| IS NOT              | You IS NOT ugly                                                                     |
| IS NULL             | Null value test                                                                     |
| IS NOT NULL         | Not null value test                                                                 |
| LIKE                | Simple pattern matching                                                             |

> More in MySQL's [operators reference](https://dev.mysql.com/doc/refman/8.0/en/non-typed-operators.html).

**_I don't remember how to use LIKE:_**

- **%** matches any number of characters, even zero characters.
- **\_** matches exactly one character.
- **\\%** matches one % character.
- **\\\_** matches one \_ character.
- To specify different escape character, use the `ESCAPE` clause.

## Commonly used logical operators

| Name | Description   |
| ---- | ------------- |
| AND  | Logical AND   |
| NOT  | Negates value |
| OR   | Logical OR    |

> More in MySQL's [logical operators reference](https://dev.mysql.com/doc/refman/8.0/en/logical-operators.html).

## Organizing Query Result

### Order by clause

- **ASC**: Ascending, from low to high, alphabetical order.
- **DESC**: Descending, from high to low, reverse alphabetical order.

```sql
ORDER BY a_column ASC
ORDER BY a_column ASC, b_column DESC
```

### Limit

```sql
LIMIT 10
-- return maximum 10 records
```

### Offset

```sql
OFFSET 10
-- Skip 10 records
```

> If your offset is larger than the actual number of queried records, the result is empty.

### Aliasing

```sql
-- Alias
SELECT a_long_long_statement AS a_statement
  FROM a_long_long_table_name AS a_table;

-- Shorthand alias
SELECT a_long_long_statement a_statement
  FROM a_long_long_table_name a_table;

-- Table prefix
SELECT a_table_name.a_column
  FROM a_table_name;
```

> - The alias saves you keystrokes when referencing columns anywhere in your query.
> - The alias is **needed** (as opposed to actual table name) when you use the same table twice.
> - The alias improve the readability of your SQL when you are referencing many tables.
> - But in many cases, using a short - especially 1-letter - table alias makes for a **harder**
>   to read/maintain code.
>
> [Is table aliasing a bad practice?](https://dba.stackexchange.com/questions/5989/is-table-aliasing-a-bad-practice)<br></br> [Is it always a good practice to use aliases in sql joins or nested queries?](https://stackoverflow.com/questions/3718737/is-it-always-a-good-practice-to-use-aliases-in-sql-joins-or-nested-queries)

## Data Types

> All MySQL's [data types reference](https://dev.mysql.com/doc/refman/8.4/en/data-types.html).

### Numeric data types

- INTEGER
- SMALLINT
- DECIMAL
- NUMERIC
- FLOAT
- REAL
- DOUBLE PRECISION
- DECIMAL

-> [Numeric functions](https://dev.mysql.com/doc/refman/8.4/en/numeric-functions.html)

> More in MySQL's [numeric types reference](https://dev.mysql.com/doc/refman/8.4/en/numeric-types.html).

### Date and time data types

- DATE
- TIME
- DATETIME
- TIMESTAMP
- YEAR

-> [Date and time functions](https://dev.mysql.com/doc/refman/8.4/en/date-and-time-functions.html)

> More in MySQL's [date and time types reference](https://dev.mysql.com/doc/refman/8.4/en/date-and-time-types.html).

### String data types

- CHAR
- VARCHAR
- TEXT
- ENUM
- SET

> More in MySQL's [string types reference](https://dev.mysql.com/doc/refman/8.4/en/string-types.html).

### Boolean data type

MySQL use `TINYINT(1)` to represent `BOOLEAN` data type.

```sql
column_name TINYINT(1)
column_name BOOLEAN
column_name BOOL
```

## Conditional Expressions & Conversions

### If functions

```sql
SELECT IF(condition, value_if_true, value_if_false)
```

### If statements

```sql
IF condition THEN statement_list
ELSE IF search_condition THEN statement_list
ELSE statement_list
END IF
```

### Case statements

```sql
CASE case_value
WHEN when_value THEN statement_list
WHEN when_value THEN statement_list
ELSE statement_list
END CASE
```

or

```sql
CASE
WHEN search_condition THEN statement_list
WHEN search_condition THEN statement_list
END CASE
```

### Cast and Convert functions

-> [Reference](https://dev.mysql.com/doc/refman/8.4/en/cast-functions.html)

#### Cast

```sql
CAST(value_need_cast AS new_data_type)
```

#### Convert

```sql
CONVERT(value_need_convert USING new_data_type)
```

#### Difference between CAST and CONVERT

- `CONVERT` can also convert the character set of data into another character set, while `CAST`
  cannot be used to change character sets.

## Group By Clause

Use with aggregate functions

```sql
  SELECT gender,
         AVG(age) avg_age
    FROM users
GROUP BY gender;
```

### Group By as SQL Standard

For every field that we choose to display, we have to include it in the `GROUP BY` clause as well.

```sql
  SELECT gender,
         nationality,
         AVG(age) avg_age
    FROM users
GROUP BY gender, nationality;
-- The query will aggregate based on the combination of gender and nationality.
```

### Group By as MySQL

We can just select only one field to group, while specifying many fields to display.

```sql
  SELECT gender,
         nationality,
         AVG(age) avg_age
    FROM users
GROUP BY gender;
-- The query will aggregate based on the gender group only
```

It works in MySQL. But in other databases such as PostgreSQL, it's just nope!

### Rollup

Sum all values of an aggregation.

```sql
  SELECT department_id,
         SUM(salary) as total_salary
    FROM employees
GROUP BY department_id WITH ROLLUP;
```

## Having Clause

- Used when you want to compare aggregated values.

```sql
  SELECT gender,
         nationality
    FROM users
GROUP BY gender, nationality
  HAVING AVG(age) > 18;
```

## Join Tables

### Inner join

> Or just `JOIN`...

- Joins 2 tables based on a condition which is known as a join predicate.
- Compares each row from the first table with every row from the second one.
- Includes only matching rows from both tables.

```sql
    SELECT *
      FROM table_1
INNER JOIN table_2 ON table_2.name = table_1.name;
```

### Left join

> Or `LEFT OUTER JOIN`

- Selects data starting from the left table. For each row in the left table, compares with every
  row in the right table.
- If the values in the two rows satisfy the join conditions, creates a new row whose columns contain
  all columns in both tables.
- If the values in the two rows are not matched, the left join clause still creates a new row
  whose columns contain columns of the row in the left table and `NULL` for columns of the right table.

```sql
   SELECT *
     FROM left_table
LEFT JOIN right_table ON left_table.name = right_table.name;
```

### Right join

> Or `RIGHT OUTER JOIN`

- Similar to left join clause except that the treatment of left and right tables is reversed.

```sql
    SELECT *
      FROM left_table
RIGHT JOIN right_table ON left_table.name = right_table.name;
```

### Cross join

- Does not have join condition
- Makes a Cartesian product of rows from the joined tables. Combines each row from the first table
  with every row from the right table to make the result set.

```sql
    SELECT *
      FROM table_1
CROSS JOIN table_2;
```

### Seft join

```sql
SELECT *
  FROM table_a a1
  JOIN table_a a2 ON a1.name = a2.name;
```

### Natural join

- Joins based on identical columns (columns with the same name and same data type) between tables.

```sql
      SELECT *
        FROM table_a
NATURAL JOIN table_b;
```

### Using keyword

- For tables that have columns with the same name and same data type, we can use `USING` instead of
  `ON` when joining.

```sql
SELECT *
  FROM table_a
  JOIN table_b USING (shared_column_of_a_and_b)
```

### Union

- Combines the results of multiple queries.
- The columns must have similar data types.
- The columns in any query must be in the same order.

```sql
SELECT column_a, column_b
  FROM table_a

UNION

SELECT column_a, column_b
  FROM table_b;
```

## Subquery

```sql
SELECT *
  FROM table_a
 WHERE id IN (
    SELECT id
      FROM table_b
 );
```

```sql
(SELECT AVG(score) FROM students) avg_score,
(SELECT SUM(score) FROM students) total_score;
```

### Advanced subquery

#### Any

- Returns a boolean value as a result.
- Returns true if any of the subquery values meet the condition.

```sql
SELECT *
  FROM table_a
 WHERE id [operator] ANY ( ... )
```

#### All

- Returns a boolean value as a result.
- Returns true if all of the subquery values meet the condition.
- Is used with `SELECT`, `WHERE`, and `HAVING` statements.

```sql
SELECT *
  FROM table_a
 WHERE id [operator] ALL ( ... )
```

#### Exists

- Tests the existence of any record in a query.

```sql
SELECT *
  FROM table_a
 WHERE EXISTS (
    SELECT id
      FROM table_b
     WHERE table_a.id = table_b.id
 );
```

## Window Functions

- Similar to an aggregate function, but does not cause rows to group into a single output row.
- Functions are applied to each row individually, and the result displayed in a separate column of
  the input.

### Over clause + Partition by

```sql
SELECT AVG(score) OVER(PARTITION BY gender) avg_score_by_gender
  FROM students;
```

### Row number

```sql
SELECT ROW_NUMBER() OVER(PARTITION BY gender) id_by_gender
  FROM students;
```

### Rank and Dense rank

```sql
SELECT RANK() OVER(PARTITION BY gender ORDER BY score DESC) score_rank_by_gender
  FROM students;

-- There are gaps in rank()
-- name | score | rank
-- Tu   | 10    | 1
-- Tus  | 10    | 1
-- Tuss | 9     | 3
```

```sql
SELECT DENSE_RANK() OVER(PARTITION BY gender ORDER BY score DESC) score_rank_by_gender
  FROM students;

-- There are no gap in dense_rank()
-- name | score | rank
-- Tu   | 10    | 1
-- Tus  | 10    | 1
-- Tuss | 9     | 2
```

### Lag

Allows you to access data from a previous row in a result set from the current row without using
self-join

```sql
LAG(expression, offset, default_value) OVER(PARTITION BY column_a ORDER BY column_b)
```

### Lead

Allows you to access data from a next row in a result set

```sql
LEAD(expression, offset, default_value) OVER(PARTITION BY column_a ORDER BY column_b)
```

## Regular Expression

-> [Reference](https://dev.mysql.com/doc/refman/8.4/en/regexp.html)

| Name             | Description                                            |
| ---------------- | ------------------------------------------------------ |
| NOT REGEXP       | Negation of RegExp                                     |
| REGEXP           | Whether string matches regular expression              |
| REGEXP_INSTR()   | Starting index of substring matching regular expresson |
| REGEXP_REPLACE() | Replace substrings matching regular expression         |
| REGEXP_SUBSTR()  | Return substring matching regular expression           |
| RLIKE            | Whether string matches regular expression              |

## CTE And Temporary Table

- CTE: Only exists in a query.
- Temporary table: Only exists in a session.

### CTE

```sql
WITH tmp AS (
  SELECT *
    FROM table_a
   WHERE id > 1000
)

SELECT * FROM tmp;
```

### Temporary table

- To create a temporary table from scratch:

```sql
CREATE TEMPORARY TABLE temp_table (
  column_1 datatype constraints,
  column_2 datatype constraints,
  ...
  table_constraints,
)

```

- To create a temporary table from a existing table:

```sql
CREATE TEMPORARY TABLE temp_table
SELECT *
  FROM origin_table
 LIMIT 100;

SELECT * FROM temp_table;

...

SELECT * FROM temp_table LIMIT 1;
```

## Session variables vs local variables

### Session variables

- Session variables are available throughout the current user session. This means they can be
  accessed from anywhere within the session, including different procedures, functions, and blocks
  of code.
- The lifetime of a session variable extends for the duration of the user session. The variable is
  destroyed when the session ends.
- Session variables are useful when you need to maintain state or share data across different parts
  of your application during a user session.
- Prefix as `@`. For example, `@a_session_var`.

### Local variables

- Local variables are only available within the block of code, function, or procedure in which they
  are declared. They cannot be accessed outside of this scope.
- The lifetime of a local variable is limited to the execution of the block of code, function, or
  procedure where it is declared. The variabel destroyed once the execution of that block of code,
  function, or procedure completes.
- Local variables are useful when you need to store temporary data within a specific block of code,
  function, or procedure, and you don't want that data to be accessible or interfere with other
  parts of your application.

## Stored Procedure

```sql
DELIMITER $$

CREATE PROCEDURE procedure_name(
  IN param1 VARCHAR(10),
  IN param2 VARCHAR(10),
  OUT full_name VARCHAR(64)
)
BEGIN

IF param1 IS NULL
THEN SET param1 = 'Tusss'
END IF;

IF param2 IS NULL
THEN SET param2 = 'TU'
END IF;

SELECT table_a.full_name
  INTO full_name
  FROM table_a;
 WHERE field_1 = param1
    OR field_2 = param2;

END $$

DELIMITER ;
```

```sql
CALL procedure_name('Tusss', 'TU', @full_name);
```

- Removing stored procedure

```sql
DROP PROCEDURE procedure_name;
```

## Triggers And Events

### Triggers

- Triggers are a named database object that is associated with a table and automatically executes
  in response to certain events on that table.
- Trigger can be INSERT, UPDATE, or DELETE operation.
- Triggers can be used for automation, auditing, replication, data integrity, and more...
- Triggers are primarily used for maintaining the integrity of the information in the database. They
  enable the database to automatically perform checks or changes to the data in response to certain
  changes in the database, such as INSERT, UPDATE, or DELETE. Here are some common uses:
  - **Data validation:** Triggers can be used to validate data before it's inserted or updated into
    the database.
  - **Automation calculation:** Triggers can be used to automatically calculate values.
  - **Auditing:** Triggers can be used to automatically log changes to data.

```sql
CREATE TRIGGER a_trigger
[trigger_time] [trigger_event] ON table_name
FOR EACH ROW
BEGIN
  INSERT INTO log_table (column1)
  VALUES (value1)
END;
```

```sql
SHOW TRIGGERS;
```

```sql
DROP TRIGGER schema_name.a_trigger;
```

There is no method which supports modifying a trigger. Instead, we can:

```sql
DROP IF EXISTS a_trigger;
CREATE TRIGGER a_trigger
...;
```

### Events

- An event is a scheduled task that runs at a specific time or interval.
- Events can be used to perform a variety of tasks, such as generating reports, updating data, daily
  maintenance, or sending notifications.
- Common uses:
  - **Data maintenance**
  - **Data aggregation**
  - **Scheduling notification**

```sql
CREATE EVENT a_event
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO
  UPDATE my_schema.my_table SET my_column = my_column + 1;
```

```sql
SHOW EVENTS;
```

```sql
ALTER EVENT a_event
ON SCHEDULE EVERY 6 HOUR
...;
```

```sql
DELETE EVENT a_event;
```

#### Schedule options

_schedule:_

```sql
AT timestamp [+ INTERVAL interval] ...
|
EVERY interval
[STARTS timestamp [+ INTERVAL interval] ...]
[ENDS timestamp [+ INTERVAL interval] ...]
```

_interval:_

```
YEAR | QUARTER | MONTH | DAY | HOUR | MINUTE |
WEEK | SECOND | YEAR_MONTH | DAY_HOUR | DAY_MINUTE |
DAY_SECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND
```

## Index

> You never want a full scan table query to be performed in your production application...
>
> Imagine your app is getting thousands of requests; each request calls to one query that does a
> full scan operation on your 100 million-record table 💀

Indexes are data structures that are used to improve the speed of queries on database tables.

```sql
CREATE INDEX index_name ON a_table (column1, column2, ...)

CREATE TABLE a_table (
  column1 CHAR(30),
  INDEX(column1)
)

ALTER TABLE a_table ADD INDEX (column1, column2, ...)
```

#### Types of index

- Unique
- Primary key
- Simple | Regular | Normal - just a normal index
- Full-text
- Spatial
- Descending (MySQL version >8)

## Transaction

A database transaction is a single area of the database where multiple data operations are carried
out and written as a whole.

These operation can be create, read, update, or delete.

During the process of a transaction, the database is in a inconsistent state because there are
ongoing operations that making changes to the database. The database returns to a more consistent
state when the operations have been committed.

For a transaction to be successfull, it means that every operation carried out has been committed.

Database transaction are very important in ensuring the consistency of your database when multiple
operations are being performed at the same time. It also gives you a way to recover changes that
may have occured due to the failure or an accidental misuse of an operation.

> Remember [ACID properties](#acid-properties-)? This is what it's for.

### Overview of MySQL transaction

- **START TRANSACTION** or **BEGIN** start a new transaction.
- **COMMIT** commits the current transaction, making its changes permanent.
- **ROLLBACK** rolls back the current transaction, canceling its changes.
- **SET autocommit** disables or enables the default autocommit mode for the current session. It is
  enabled by default. This means that, when not otherwise inside a transaction, each statement is
  atomic, as if it were surrounded by **START TRANSACTION** or **COMMIT**. You cannot use **ROLLBACK**
  to undo the effect; however, if an error occurs during statement execution, the statement is rolled
  back.

```sql
START TRANSACTION;

INSERT INTO ...
UPDATE ...

COMMIT;
ROLLBACK;
```

> How to use transaction? [Read the docs](https://dev.mysql.com/doc/refman/8.4/en/sql-transactional-statements.html)

### Locking and concurrency in MySQL transaction

**Locking** is a technique that is used to prevent race conditions. A race condition is a process where
multiple transactions are trying to access the same data at the same time.

Types of locks:

- **Shared locks:** allows multiple transactions to read the same data at the same time but restricts
  any of them from writing or making changes of it.
- **Exclusive locks:** prevents different transactions from reading or writing the same data at the
  same time.
- **Intent locks:** is used to specify that a transaction is planning to read or write a certain
  section of data.
- **Row-level locks:** sllows transactions to lock only the specific rows the need to access, rather
  than the entire table.

**Concurrency** is a method where multiple transactions can run simultaneously without interfering
with each other's data.

MySQL uses a multi-version concurrency control (MVCC) mechanism. This allows multiple transactions
to read and write to the same data at the same time without conflicts.

## End?

That is the end of my notes here, but it is not the end of your journey with MySQL.

You can come back here whenever you want a reference. See ya ~
