import React from 'react';
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
//Добавлено явное указание, что функция ThemeDecorator возвращает JSX.Element.

  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
