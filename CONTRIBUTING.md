# Contributing to AI Robot Girlfriend

We love your input! We want to make contributing to AI Robot Girlfriend as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github
We use Github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html)
Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issue tracker](https://github.com/your-repo/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/your-repo/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Use a Consistent Coding Style

* 2 spaces for indentation rather than tabs
* You can try running `npm run lint` for style unification

## License
By contributing, you agree that your contributions will be licensed under its MIT License.

## References
This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md).

## Development Process

### Setting up the development environment

1. Clone the repository
```bash
git clone https://github.com/your-username/robot-girlfriend.git
cd robot-girlfriend
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

### Code Structure

```
src/
├── js/
│   ├── app.js         # Main application logic
│   └── components/    # Reusable components
├── css/
│   ├── robot.css      # Robot styles
│   └── styles/        # Other styles
└── assets/           # Images and other assets
```

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This leads to more readable messages that are easy to follow when looking through the project history.

Examples:

- `feat: add new emotion animation`
- `fix: resolve voice synthesis delay`
- `docs: update README with new API instructions`
- `style: format code with prettier`
- `refactor: restructure emotion handling logic`

### Pull Request Process

1. Update the README.md with details of changes to the interface
2. Update the version numbers in package.json and README.md
3. The PR will be merged once you have the sign-off of at least one maintainer

### Code Review Process

The core team looks at Pull Requests on a regular basis. After feedback has been given we expect responses within two weeks. After two weeks we may close the PR if it isn't showing any activity.

### Community
- Join our [Discord server](discord-link) for discussions
- Follow us on [Twitter](twitter-link) for updates
- Read our [Blog](blog-link) for detailed articles

Thank you for contributing! 