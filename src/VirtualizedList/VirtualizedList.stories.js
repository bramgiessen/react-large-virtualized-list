import React from 'react';
import { VirtualizedList } from './index';

export default { title: 'VirtualizedList', component: VirtualizedList };

const Template = args => <VirtualizedList {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [...Array(100)],
    itemHeight: 50
};

// export const medium = () => <Button size='medium'>Medium</Button>;

// export const large = () => <Button size='large'>Large</Button>;