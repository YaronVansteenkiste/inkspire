import React from 'react';
import {TrendingCarousel} from '../Trending.jsx';
import {MemoryRouter} from 'react-router-dom';

export default {
    title: 'Components/TrendingCarousel',
    component: TrendingCarousel,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story/>
            </MemoryRouter>
        ),
    ],
};

const Template = (args) => <TrendingCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
    trendingData: [
        {
            id: '1',
            url: 'https://via.placeholder.com/150',
            title: 'Trending Post 1',
            description: 'This is a description for trending post 1.',
            author: 'Author 1',
        },
        {
            id: '2',
            url: 'https://via.placeholder.com/150',
            title: 'Trending Post 2',
            description: 'This is a description for trending post 2.',
            author: 'Author 2',
        },
    ],
};

export const WithNoImage = Template.bind({});
WithNoImage.args = {
    trendingData: [
        {
            id: '1',
            url: '',
            title: 'Trending Post 1',
            description: 'This is a description for trending post 1.',
            author: 'Author 1',
        },
        {
            id: '2',
            url: '',
            title: 'Trending Post 2',
            description: 'This is a description for trending post 2.',
            author: 'Author 2',
        },
    ],
};