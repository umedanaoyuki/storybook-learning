import type { StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

const meta = {
    title: 'MySample/RadioGroup',
    component: RadioGroup,
    parameters: {},
    tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof RadioGroup>

export const Sample1: Story = {
    args: {
        title: '飲み物リスト',
        list: ['オレンジジュース', '紅茶', 'コーヒー'],
        listDirectionVertical: true
    },
};

export const Sample2: Story = {
    args: {
        title: '飲み物リスト',
        list: ['オレンジジュース', '紅茶', 'コーヒー'],
        listDirectionVertical: false
    },
};
