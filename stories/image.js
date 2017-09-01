import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from '../lib/index';
import { photo } from '../lib/components/Constants.js';
storiesOf('Image', module)
  .add('Default', () => (
    <Image src={photo} />
  ));
