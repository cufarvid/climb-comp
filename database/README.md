# database

## Setup

Set environment variables:

```bash
touch .env
```

Start docker container:

```bash
docker-compose up -d
```

### Optional

Populate database with test data.

Map `imports` folder to docker container by adding the following to `docker-compose.yml`:

```yaml
volumes:
  - ./imports:/imports
````

Run the populate script:

```bash
docker compose exec postgres /imports/populate.sh
```
