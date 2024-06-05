# Introduction

> I did a MySQL challenge, but I forgot almost the everything after that, so
> I left these notes here for further references.

# What Is MySQL?

> You think I'm going to explain its definition right here? Just do your Google search, bruh.

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
show databases;
```

Select a database:

```sql
use a_database;
```

List tables:

```sql
show tables;
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

> Updating...
