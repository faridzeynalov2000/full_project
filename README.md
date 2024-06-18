## Project Startup

```
npm install - Install dependencies
npm run start:dev or npm run start:dev:vite - Start the server + frontend project in dev mode
```

---

## Scripts

-   `npm run start` - Start the frontend project on webpack dev server
-   `npm run start:vite` - Start the frontend project on vite
-   `npm run start:dev` - Start the frontend project on webpack dev server + backend
-   `npm run start:dev:vite` - Start the frontend project on vite + backend
-   `npm run start:dev:server` - Start the backend server
-   `npm run build:prod` - Build in prod mode
-   `npm run build:dev` - Build in dev mode (not minified)
-   `npm run lint:ts` - Lint TS files
-   `npm run lint:ts:fix` - Fix TS files with linter
-   `npm run lint:scss` - Lint SCSS files with the style linter
-   `npm run lint:scss:fix` - Fix SCSS files with the style linter
-   `npm run test:unit` - Start unit tests with Jest
-   `npm run test:ui` - Start screenshot tests with Loki
-   `npm run test:ui:ok` - Confirm new screenshots
-   `npm run test:ui:ci` - Run screenshot tests in CI
-   `npm run test:ui:report` - Generate a full report for screenshot tests
-   `npm run test:ui:json` - Generate a JSON report for screenshot tests
-   `npm run test:ui:html` - Generate an HTML report for screenshot tests
-   `npm run storybook` - Start Storybook
-   `npm run storybook:build` - Build Storybook build
-   `npm run prepare` - Pre-commit hooks
-   `npm run generate:slice` - Script for generating FSD slices

---

## Project Architecture

The project is written in accordance with the Feature Sliced Design methodology.

Link to the documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with Translations

The project uses the i18next library for translations.
Translation files are stored in public/locales.

For comfortable work, we recommend installing a plugin for WebStorm/VSCode.

Documentation for i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Testing

The project uses the following 4 types of tests:

1. Regular unit tests with Jest - `npm run test:unit`
2. Component tests with React Testing Library - `npm run test:unit`
3. Screenshot testing with Loki - `npm run test:ui`
4. e2e testing with Cypress - `npm run test:e2e`

More about tests - [testing documentation](/docs/tests.md)

---

## Linting

The project uses ESLint for TypeScript code checks and Stylelint for style file checks.

To strictly control the main architectural principles, the custom ESLint plugin _eslint-plugin-ulbi-tv-plugin_ is used, containing 3 rules:

1. path-checker - forbids the use of absolute imports within a single module
2. layer-imports - checks the correctness of layer usage from the perspective of FSD (for example, widgets cannot be used in features and entities)
3. public-api-imports - allows imports from other modules only from the public API. Has auto-fix.

##### Running Linters

-   `npm run lint:ts` - Lint ts files
-   `npm run lint:ts:fix` - Fix ts files with linter
-   `npm run lint:scss` - Lint scss files with the style linter
-   `npm run lint:scss:fix` - Fix scss files with the style linter

---

## Storybook

Each component in the project has story cases described.
Server requests are mocked using storybook-addon-mock.

The file with story cases is created next to the component with the .stories.tsx extension.

To launch Storybook, use the command:

-   `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from 'shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export the Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export the Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

---

## Project Configuration

The project contains two configurations for development:

1. Webpack - ./config/build
2. Vite - vite.config.ts

Both builders are adapted to the main features of the application.

All configuration is stored in /config:

-   /config/babel - babel configuration
-   /config/build - webpack configuration
-   /config/jest - test environment configuration
-   /config/storybook - Storybook configuration

The `scripts` folder contains various scripts for refactoring, simplifying writing code, generating reports, etc.

---

## CI Pipeline and Pre-commit Hooks

GitHub Actions configuration is found in /.github/workflows.
In CI, all types of tests are run, as well as project and Storybook builds and linting.

Pre-commit hooks check the project with linters, configuration in /.husky

---

### Working with Data

Data interaction is performed using the Redux Toolkit.
Whenever possible, reusable entities should be normalized using EntityAdapter.

Server requests are sent through [RTK query](/src/shared/api/rtkApi.ts).

For asynchronous connection of reducers (to avoid pulling them into the global bundle), [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

---

### Working with Feature Flags

The use of feature flags is only allowed using the toggleFeatures helper.

An object with the following options is passed to it:

{
    name: name of the feature flag,
    on: a function that will work after turning on the feature,
    off: a function that will work after turning off the feature
}

To automatically remove a feature, use the remove-feature.ts script,
which accepts two arguments:

1. The name of the feature flag to be removed
2. The state (on/off)

---

## Entities

-   [Article](/src/entities/Article)
-   [Comment](/src/entities/Comment)
-   [Counter](/src/entities/Counter)
-   [Country](/src/entities/Country)
-   [Currency](/src/entities/Currency)
-   [Notification](/src/entities/Notification)
-   [Profile](/src/entities/Profile)
-   [Rating](/src/entities/Rating)
-   [User](/src/entities/User)

## Features

-   [addCommentForm](/src/features/addCommentForm)
-   [articleEditForm](/src/features/articleEditForm)
-   [articleRating](/src/features/articleRating)
-   [articleRecommendationsList](/src/features/articleRecommendationsList)
-   [AuthByUsername](/src/features/AuthByUsername)
-   [avatarDropdown](/src/features/avatarDropdown)
-   [editableProfileCard](/src/features/editableProfileCard)
-   [LangSwitcher](/src/features/LangSwitcher)
-   [notificationButton](/src/features/notificationButton)
-   [profileRating](/src/features/profileRating)
-   [ThemeSwitcher](/src/features/ThemeSwitcher)
-   [UI](/src/features/UI)