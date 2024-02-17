## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm
# or
bun
```

Second, you can configure the server and database at `.env` file.

Third, install sequelize-cli to create and migrate database:

```bash
npm install sequelize-cli
# and
sequelize db:create
# and
sequelize db:migrate
```

Finally, start the server:

```bash
node app.js
```

## Authentication

Use the `/login` endpoint to obtain the token. Pass the username and password in the request body. You can use `admin` as the username and `admin` as the password

```json
{
  "username": "admin",
  "password": "admin"
}
```

## API Documentation

See [API Documentation](https://documenter.getpostman.com/view/19071504/2sA2r81P2K)