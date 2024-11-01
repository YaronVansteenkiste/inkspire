import React from 'react';
import { ProfileDetails } from '../ProfileDetails.jsx';

const meta = {
  component: ProfileDetails,
  argTypes: {
    userData: {
      control: 'object',
      defaultValue: {
        username: 'Test User',
        email: 'test.user@thomasmore.be',
        id: 'sampleId',
        ref: {},
      },
    },
  },
};

const Template = (args) => <ProfileDetails {...args} />;

export default meta;

export const Default = Template.bind({});
Default.args = {
  userData: {
    username: 'Test user1',
    email: 'test1@thomasmore.be',
    id: 'sampleId',
    ref: {},
  },
};

export const WithNoUsername = Template.bind({});
WithNoUsername.args = {
  userData: {
    email: 'test2@thomasmore.be',
    id: 'sampleId2',
    ref: {},
  },
};

export const WithNoEmail = Template.bind({});
WithNoEmail.args = {
  userData: {
    username: 'Test user3',
    id: 'sampleId3',
    ref: {},
  },
};

export const WithLongUsername = Template.bind({});
WithLongUsername.args = {
  userData: {
    username: 'This is a very long username that might cause layout issues',
    email: 'test4@thomasmore.be',
    id: 'sampleId4',
    ref: {},
  },
};

export const WithSpecialCharacters = Template.bind({});
WithSpecialCharacters.args = {
  userData: {
    username: 'User!@#$%^&*()',
    email: 'test5@thomasmore.be',
    id: 'sampleId5',
    ref: {},
  },
};