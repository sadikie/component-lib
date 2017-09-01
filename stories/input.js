import React from 'react';
import { Input } from '../lib/index';
import { storiesOf } from '@storybook/react';

storiesOf('Input', module)
  .add('Without placholder', () => (
    <Input 
      placeholder="@mxstbr" 
      type="text" 
    />
  ))
  .add('with placeholder', () => (
    <Input bgColor="puple" />
  ));
  
;
