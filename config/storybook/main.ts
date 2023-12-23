import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories:
  [
    // "../src/**/*.mdx", не нужна так как у нас файлы с расширениями ts и tsx
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: 'tag'
  }
}
export default config
