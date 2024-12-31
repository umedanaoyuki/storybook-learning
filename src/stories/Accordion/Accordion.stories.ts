import type { StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
    title: 'MySample/Accordion',
    component: Accordion,
    parameters: {},
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof Accordion>

export const Sample: Story = {
    args: {
        title: 'サンプル',
        description: 'lorem Ipsum....'
    },
};



