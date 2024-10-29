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

export const NoAuthor = Template.bind({});
NoAuthor.args = {
  author: '',
  text: 'This comment has no author.',
  timestamp: Date.now(),
};

export const LongText = Template.bind({});
LongText.args = {
  author: 'Test User',
  text: 'This is a very long comment text to test how the component handles longer content. '.repeat(10),
  timestamp: Date.now(),
};