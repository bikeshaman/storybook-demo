import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Input } from '../components';

export default { title: 'Input', component: Input };

export const Default = () => (
  <Input id="beans" onInput={action('input')} onFocus={action('focus')} onBlur={action('blur')}>
    {text('Label', 'Label')}
  </Input>
);
