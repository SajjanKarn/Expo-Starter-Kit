# Expo Starter Kit

This starter kit is preconfigured with:

- 🚀 **Expo Router** — File-based routing for React Native.
- 🛠 **TypeScript** — Type-safe development for React Native.
- 🎨 **Tailwind CSS** — Utility-first styling with support for React Native using [NativeWind](https://nativewind.dev/).
- 📏 **ESLint** — Enforces code quality and consistency.
- ✨ **Prettier** — Formats your code for consistency.
- 🚫 **lint-staged** — Runs checks on staged files before committing.
- 📝 **Conventional Commit** — Standardized commit messages for better collaboration.

## Getting Started

### 1. Clone the Repository

```bash
yarn create expo-app -e https://github.com/SajjanKarn/Expo-Starter-Kit.git expo-starter
```

### 2. Install Dependencies

Navigate into the project directory and install dependencies. **pnpm** is recommended to ensure Husky hooks function correctly:

```bash
cd expo-starter

# install the dependencies
yarn

#or

npm i

#or
pnpm install
```

### 3. Run the Development Server

Start the development server with:

```bash
yarn start
```

## Available Scripts

Here are the key scripts included in the `package.json`:

- **Start the development server**:

  ```bash
  yarn start
  ```

  Launches the Expo development server.

- **Run on Android**:

  ```bash
  yarn run android
  ```

  Starts the app on an Android emulator or device.

- **Run on iOS**:

  ```bash
  yarn run ios
  ```

  Starts the app on an iOS simulator or device.

- **Run on Web**:

  ```bash
  yarn run web
  ```

  Starts the app in a web browser.

- **Run tests**:

  ```bash
  yarn run test
  ```

  Runs all tests with Jest in watch mode.

- **Lint the code**:
  ```bash
  yarn run lint
  ```
  Checks code for style and syntax issues using Expo's lint configuration.

## Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for all commit messages.

### Commit Format:

- **type**: **subject**
- **type** — must be one of: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`
- **subject** — a short description of the change.

Example:

```
feat: add support for user authentication
fix: resolve bug in user profile API
chore: update dependencies
```

### Additional Commit Rules:

- **No breaking changes**: Ensure that your commit does not introduce breaking changes unless explicitly noted.
- **Imperative tense**: Use the imperative form for commit messages (e.g., “Fix bug” instead of “Fixed bug”).
- **Short and concise**: Keep the subject line under 72 characters.

## Additional Notes

- Ensure you have Node.js and Expo CLI installed before running any scripts.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
