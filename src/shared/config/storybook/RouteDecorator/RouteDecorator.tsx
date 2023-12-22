import 'app/styles/index.scss'
import { StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouteDecorator = (story: () => StoryFn) => {
  return (
    <BrowserRouter>
      {story()}
    </BrowserRouter>
  )
}
