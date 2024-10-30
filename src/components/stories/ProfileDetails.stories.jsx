import React from 'react';
import { ProfileDetails } from '../ProfileDetails.jsx';

const meta = {
  title: 'Components/ProfileDetails',
  component: ProfileDetails,
  argTypes: {
    userData: {
      control: 'object',
      defaultValue: {
        username: 'John Doe',
        email: 'john.doe@example.com',
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
