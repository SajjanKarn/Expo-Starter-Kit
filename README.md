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
git clone https://github.com/SajjanKarn/Expo-Starter-Kit
```

### 2. Install Dependencies

Navigate into the project directory and install dependencies. **pnpm** is recommended to ensure Husky hooks function correctly:

```bash
cd Expo-Starter-Kit

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

- **Format the code**:
  ```bash
  yarn run format
  ```
  Formats the code using prettier

# Commit Message Guidelines

This project follows the **Conventional Commits** standard to ensure consistent and readable commit history. Each commit message should follow the structure below:

### Commit Message Format

- **type**: Describes the category of the change. Examples include `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, and `build`.
- **scope** (optional): Clarifies what part of the codebase the change affects, such as `api`, `ui`, `auth`, etc.
- **subject**: A short, imperative description of the change, explaining what the commit does (e.g., `add login form validation`).

### Commit Types

| Type       | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| `feat`     | Adds a new feature                                            |
| `fix`      | Fixes a bug                                                   |
| `chore`    | General maintenance tasks, not affecting source code or tests |
| `docs`     | Documentation changes                                         |
| `style`    | Code style updates (formatting, missing semi-colons, etc.)    |
| `refactor` | Code refactoring without adding features or fixing bugs       |
| `perf`     | Performance improvement                                       |
| `test`     | Adding or updating tests                                      |
| `build`    | Changes affecting the build system or dependencies            |

### Examples

- **Feature**: `feat(auth): add user registration flow`
- **Bug Fix**: `fix(ui): resolve button alignment issue on mobile`
- **Chore**: `chore(deps): update eslint to latest version`
- **Documentation**: `docs(readme): update setup instructions`

### Additional Rules

- Keep the **subject line** to 50 characters or fewer.
- Use the **imperative mood** in the subject line (e.g., "add" not "adding").
- Capitalize the **type** and **scope** consistently (prefer lowercase).
- Avoid ending the **subject line** with a period.

By following these guidelines, the commit history will be clear, organized, and easy to understand.

### Examples

```bash
# Example commands for committing
git commit -m "feat(auth): add user registration flow"
git commit -m "fix(ui): resolve button alignment issue on mobile"
git commit -m "chore(deps): update eslint to latest version"
git commit -m "docs(readme): update setup instructions"
```

## Additional Notes

- Ensure you have Node.js and Expo CLI installed before running any scripts.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
