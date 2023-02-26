# Budget API

## About

A simple API made for easily storing financial data for a single user. Built for studying purposes.

## Built With

- TypeScript
- Express
- SQLite

## Installing

Clone or download the repository with:

```sh
git clone https://github.com/ramos-ph/budget-api.git
cd budget-api
```

After downloading, install the dependencies with your favorite package manager

```sh
npm install # or yarn
```

## Running migrations

Run the migrations using the following script:

```sh
npm run migration:run # or yarn
```

This will create a `budget.db` SQLite database in the root of the project.

## Running the app

To run a local instance of the application, run:

```sh
npm run start:dev
```

The server will run on http://localhost:8080/. To check the available endpoints, refer to our [API Reference](#api-reference).

## Testing

For Mac and Linux, simply run:

```sh
npm test # or yarn
```

If you prefer, we watch mode to run the tests on the go:

```sh
npm run test:watch # or yarn
```

For Windows, it's recommended that you change `package.json` scripts to correctly set the environment.

## API Reference

Please refer to [REFERENCE.md](REFERENCE.md) to see a list of all the available endpoints.

## Authors

- Pedro Ramos - [ramos-ph](https://github.com/ramos-ph)

## License

This project is licensed under the MIT License - refer for [LICENSE.md](LICENSE.md) for details. Feel free to download, modify, ship or study this project as you wish.
