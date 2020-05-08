# Chowly Api Client

**Chowly Api Client** is a Typescript library which implements chowly api.
The library does not modify request and response payload.

*   [Installation](#installation)
*   [Usage](#usage)
*   [Versioning](#versioning)
*   [Contributing](#contributing)
*   [Unit Tests](#unit-tests)
*   [License](#license)

## Installation

    $ npm i @goparrot/chowly-api-client

## Usage

### Simple example

```typescript
import { ChowlyClient } from '@goparrot/chowly-api-client';

(() => {
    const client = new ChowlyClient({
        apiKey: 'test',
        baseUrl: 'baseurl',
        maxRetries: 5
    });

    client.list()
        .then(data => console.log(data))
        .catch(error => console.log(error));
})();
```

## Available Options

### `ChowlyClient` Options
    apyKey: string;
    baseUrl: string;
    maxRetries?: number;

| Name           | Type       | Default            | Description                                                                                                                                                                                                                                                           |
| -------------- | ---------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                           |
| maxRetries     | `Number`   | `3`                | The number of times to retry before failing. Also for control the delay between retried request is used the built-in `exponentialDelay` function is used ([Exponential Backoff](https://developers.google.com/analytics/devguides/reporting/core/v3/errors#backoff)). |
| baseUrl        | `String`  | 'https://api.chowlyinc.com' | The base URL against which to resolve every API call's (relative) path.                                                                                                                                                                                       |
| apiKey | `string` | | The string which represents token for getting data from chowly client                                                                                                                                                                                                                              |

## Versioning

Chowly Api Client follows [Semantic Versioning](http://semver.org/).

## Contributing

See [`CONTRIBUTING`](https://github.com/goparrot/chowly-api-client/blob/master/CONTRIBUTING.md#contributing) file.

## Unit Tests

In order to run the test suite, install the development dependencies:

    $ npm i

Then, run the following command:

    $ npm run coverage

## License

Square Connect Plus is [MIT licensed](LICENSE).
