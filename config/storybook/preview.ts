/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

// addDecorator(StyleDecorator)
// addDecorator(ThemeDecorator(Theme.LIGHT))
// addDecorator(RouteDecorator)

// export default preview;
// function addDecorator(StyleDecorator: any) {
//   throw new Error('Function not implemented.')
// }
