# Introduction

> I did a MySQL challenge, but I forgot almost the everything after that, so
> I left these notes here for further references.

# What Is MySQL?

> You think I'm going to explain its definition right here? Just do your Google search, bruh.

<br></br>

> But...

You have better keep in mind this:

### ACID properties :)

[**ACID**](https://www.freecodecamp.org/news/acid-databases-explained/) is an acronymfor
*atomicity*, *consistency*, *isolation*, and *durability*.

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
> Simply put, they are just too essential ~ Now back to MySQL.


# What Do You Need?

- [Download](https://www.mysql.com/downloads/) MySQL.

### Great to have

- [mycli](https://www.mycli.net/)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [DBeaver](https://dbeaver.io/)
- [DataGrip](https://www.jetbrains.com/datagrip/features/mysql.html)
- [phpMyAdmin](https://www.phpmyadmin.net/)

# Connect To The Database

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

# Querying Overview

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

# Select Statement

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

# Where Clause

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

### Commonly used comparison operators

| Name  | Description   |
| ----- | ------------- |
| >     | Greater       |
| >=    | Greater than or equal |
| \<     | Less          |
| \<=    | Less than or equal    |
| !=    | Not equal     |
| \<>    | Also not equal    |
| =     | Equal         |
| \<=>   | Null safe equal   |
| BETWEEN ... AND ...   | Whether a value is within a set of values (you must set the value from low to high)   |
| IN()  | Whether a value is within a set of values     |
| NOT IN()  | Whether a value is not within a set of values |
| IS    | You IS beautiful  |
| IS NOT    | You IS NOT ugly   |
| IS NULL   | Null value test   |
| IS NOT NULL   | Not null value test   |
| LIKE  | Simple pattern matching   |

> More in MySQL's [operators reference](https://dev.mysql.com/doc/refman/8.0/en/non-typed-operators.html).

***I don't remember how to use LIKE:***

- **%** matches any number of characters, even zero characters.
- **_** matches exactly one character.
- **\\%** matches one % character.
- **\\_** matches one _ character.
- To specify different escape character, use the `ESCAPE` clause.

### Commonly used logical operators

| Name  | Description   |
| ----- | ------------- |
| AND   | Logical AND   |
| NOT   | Negates value |
| OR    | Logical OR    |

> More in MySQL's [logical operators reference](https://dev.mysql.com/doc/refman/8.0/en/logical-operators.html).

# Organizing Query Result

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
> to read/maintain code.
>
> [Is table aliasing a bad practice?](https://dba.stackexchange.com/questions/5989/is-table-aliasing-a-bad-practice)<br></br>
> [Is it always a good practice to use aliases in sql joins or nested queries?](https://stackoverflow.com/questions/3718737/is-it-always-a-good-practice-to-use-aliases-in-sql-joins-or-nested-queries)

# Data Types

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

# Conditional Expressions & Conversions

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

# Group By Clause

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

# Having Clause

- Used when you want to compare aggregated values.

```sql
  SELECT gender,
         nationality
    FROM users
GROUP BY gender, nationality
  HAVING AVG(age) > 18;
```

# Join Tables

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

# Subquery

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

## Advanced subquery

### Any

- Returns a boolean value as a result.
- Returns true if any of the subquery values meet the condition.

```sql
SELECT *
  FROM table_a
 WHERE id [operator] ANY ( ... )
```

### All

- Returns a boolean value as a result.
- Returns true if all of the subquery values meet the condition.
- Is used with `SELECT`, `WHERE`, and `HAVING` statements.

```sql
SELECT *
  FROM table_a
 WHERE id [operator] ALL ( ... )
```

### Exists

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

# Window Functions

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

> Updating...
