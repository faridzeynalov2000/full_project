import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import 'app/styles/index.scss'

const meta: Meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' } // Добавили label в argTypes
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text'
  }
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  }
}

export const OutlineDark: Story = {
  args: {
    children: 'Text'
  }
}
