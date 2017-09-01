import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/input.js');
  require('../stories/image.js');
  require('../stories/logo.js');

  // You can require as many stories as you need.
}
configure(loadStories, module);