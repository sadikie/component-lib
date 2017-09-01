import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image, Logo } from '../lib/index';
import { logoImg } from '../lib/components/Constants.js';

storiesOf('Logo', module)
  .add('Default', () => (
    <Logo>
      <Image src={logoImg} />
    </Logo>
  ));
