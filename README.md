# GitHub Actions for Fastly

This repository contains GitHub actions to help you build on the Fastly platform, such as installing the CLI, building and deploying Compute@Edge services.

## Usage

To compile and deploy a Compute@Edge service at the root of the repository. If you used `fastly compute init` to create your project, this will work out of the box:

```yml
name: Deploy Application
on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2

    - name: Install Dependencies
      run: npm install # or cargo install if using Rust

    - name: Deploy to Compute@Edge
      uses: fastly/actions@main
      env:
        FASTLY_API_TOKEN: ${{ secrets.FASTLY_API_TOKEN }}
```

Alternatively, you can manually run the individual Fastly compute actions if you want finer control over your workflow:

- [fastly/actions/setup](https://github.com/fastly/actions/blob/main/setup/index.js) - Ensure the Fastly CLI is available
- [fastly/actions/build](https://github.com/fastly/actions/blob/main/build/index.js) - Build a Compute@Edge project. Equivalent to `fastly compute build`
- [fastly/actions/deploy](https://github.com/fastly/actions/blob/main/deploy/index.js) - Deploy a Compute@Edge project. Equivalent to `fastly compute deploy`.

```yml
name: Deploy Application
on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1

    - name: Set up Fastly CLI
      uses: fastly/actions/setup@main

    - name: Install Dependencies
      run: npm install

    - name: Build Compute@Edge Package
      uses: fastly/actions/build@main

    - name: Deploy Compute@Edge Package
      uses: fastly/actions/deploy@main
      env:
        FASTLY_API_TOKEN: ${{ secrets.FASTLY_API_TOKEN }}
```

## License

The source and documentation for this project are released under the [MIT License](LICENSE).

## Metadata

- Team: Developer Relations
- Slack: #team-developer-relations
- Engineer: Kailan Blanks
- Related: https://github.com/fastly/cli
- Shiply: https://shiply.fastly.com/fastly/actions