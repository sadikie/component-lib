import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../lib/index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('with text', () => (
    <Button bgColor="teal" hoverColor="orange"> 
      Click Me!
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('Full Width', () => (
    <Button 
      bgColor="orange"
      onClick={action('clicked')}
      size="fullWidth" 
    >Full width</Button>
  ));
;
