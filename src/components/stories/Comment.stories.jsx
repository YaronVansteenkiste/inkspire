import React from 'react';
import Comment from '../Comment';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  component: Comment,
};

const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
  author: 'Test User',
  text: 'This is a comment.',
  timestamp: Date.now(),
};