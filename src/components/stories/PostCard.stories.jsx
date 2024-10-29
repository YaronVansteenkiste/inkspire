import PostCard from '../PostCard.jsx';
import { MemoryRouter } from 'react-router-dom';

export default {
  component: PostCard,
  title: 'Components/stories/PostCard',
  decorators: [
    (Story) => (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
    ),
  ],
};

const Template = (args) => <PostCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  post: {
    id: '1',
    url: 'https://via.placeholder.com/150',
    title: 'Test Post',
    description: 'This is a test description.',
    author: 'Author Name',
  },
};

export const WithLongDescription = Template.bind({});
WithLongDescription.args = {
  post: {
    id: '2',
    url: 'https://via.placeholder.com/150',
    title: 'Long Description Post',
    description: 'This is a test description with a lot more content to see how the component handles longer text.',
    author: 'Author Name',
  },
};

export const WithNoImage = Template.bind({});
WithNoImage.args = {
  post: {
    id: '3',
    url: '',
    title: 'No Image Post',
    description: 'This post does not have an image URL.',
    author: 'Author Name',
  },
};