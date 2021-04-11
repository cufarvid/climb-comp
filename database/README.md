# database

### setup database
```
psql postgres
```
### create database
```
CREATE DATABASE climbcompdb;
```
### create test user
```
CREATE USER climbcomp WITH PASSWORD 'password';
```
### grant user connect permission
```
GRANT CONNECT ON DATABASE climbcompdb TO climbcomp;
```
### grant user all permissions
```
GRANT ALL PRIVILEGES ON DATABASE climbcompdb to climbcomp;
```
### grant CREATEDB (needed for prisma shadow database)
```
ALTER USER climbcomp CREATEDB;
```
