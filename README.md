# GitHub Actions for Fastly

This repository contains GitHub Actions to help you build on the Fastly platform, such as installing the CLI, and building and deploying Compute@Edge services.

> **IMPORTANT:** GitHub Actions for Fastly is currently in beta. For more information on what this means, read the [Fastly product and feature lifecycle](https://docs.fastly.com/products/fastly-product-lifecycle#beta) guide.

## Usage

To compile and deploy a Compute@Edge service at the root of the repository. If you used `fastly compute init` to initialise your project, this will work out of the box:

```yml
name: Deploy Application
on:
  push:
    branches: [master]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2

    - name: Install Dependencies
      run: npm install # or cargo install if using Rust

    - name: Deploy to Compute@Edge
      uses: fastly/actions@beta
      env:
        FASTLY_API_TOKEN: ${{ secrets.FASTLY_API_TOKEN }}
```

Alternatively, you can manually run the individual Fastly compute actions if you want finer control over your workflow:

- [fastly/actions/setup](setup/index.js) - Ensure the Fastly CLI is available
- [fastly/actions/build](build/index.js) - Build a Compute@Edge project. Equivalent to `fastly compute build`
- [fastly/actions/deploy](deploy/index.js) - Deploy a Compute@Edge project. Equivalent to `fastly compute deploy`.

```yml
name: Deploy Application
on:
  push:
    branches: [master]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1

    - name: Set up Fastly CLI
      uses: fastly/actions/setup@beta

    - name: Install Dependencies
      run: npm install

    - name: Build Compute@Edge Package
      uses: fastly/actions/build@beta

    - name: Deploy Compute@Edge Package
      uses: fastly/actions/deploy@beta
      env:
        FASTLY_API_TOKEN: ${{ secrets.FASTLY_API_TOKEN }}
```

## Security issues

Please see our [SECURITY.md](SECURITY.md) for guidance on reporting security-related issues.

## License

The source and documentation for this project are released under the [MIT License](LICENSE).