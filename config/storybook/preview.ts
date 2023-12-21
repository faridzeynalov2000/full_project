import type { Preview } from "@storybook/react";
import { StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx'
import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator/RouteDecorator.tsx'
import { Theme } from '../../src/app/providers/ThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// addDecorator(StyleDecorator)
// addDecorator(ThemeDecorator(Theme.LIGHT))
// addDecorator(RouteDecorator)

// export default preview;
// function addDecorator(StyleDecorator: any) {
//   throw new Error('Function not implemented.')
// }