# Pantheon Decoupled Kit Next Pantheon Content Cloud Starter

## Getting Started

To get started with the
Next Pantheon Content Cloud Starter, use our `pcc` (command-line interface tool
we have created). Full documentation for this npm package based on
[npm init](https://docs.npmjs.com/cli/v8/commands/npm-init) can be found
[here](https://www.npmjs.com/package/@pantheon-systems/pcc) on
our docs site.

For a quick start, follow the instructions below:

1. In your terminal, run the following commands:

```bash
npm install @pantheon-systems/pcc-cli --global
pcc init ./my-new-site --template=nextjs
```

2. Follow the prompts in your terminal to complete the setup.

## Pantheon @pantheon-systems/nextjs-kit and @pantheon-systems/pcc-react-sdk

Pantheon's @pantheon-systems/nextjs-kit and @pantheon-systems/pcc-react-sdk are
included as dependencies in this project. This allows developers to make use of
utility functions to simplify the process of building and maintaining a
Front-End site on Pantheon.

Full documentation can be found at:
https://github.com/pantheon-systems/decoupled-kit-js/tree/canary/web/docs/Packages

## Tests

Tests are written with [`vitest`](https://vitest.dev/). All new functionality
should have unit tests or snapshot tests where applicable. Snapshot tests are
using
[`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/).

### Commands

This section assumes the package manager in use is `npm`. If you are not using
`npm`, replace `npm` with the name of your package manager.

To run the tests:

```bash
npm test
```

To run the tests in watch mode:

```bash
npm run test:watch
```

### Updating Snapshots

Snapshots should be updated when presentational changes are made. If a new page
route is added, create a new snapshot test for it, and include any data needed
to run that test successfully. Please commit the updated snapshots along with
your changes.

To update a snapshot:

Run the following helper command:

```bash
npm run update-snapshots
```

Or, run the test for a single profile in watch mode (see above), then in the
terminal press the **u** key. This will update the snapshot for the running
profile Be sure to update the snapshot for both profiles.
