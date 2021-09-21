import React from 'react';
import styles from './VirtualizedList.stories.module.css';
import { VirtualizedList } from './index';

// ---- Util functions
const random_rgb = () => {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
}
const generateListItems = (amount) => {
    return [...Array(amount)].map((item, index) => { return { color: random_rgb(), letter: String.fromCharCode(65 + Math.floor(Math.random() * 26)) } });
}
const renderListItem = (item, itemStyle, index) => {
    const { letter, color } = item;
    return (
        <div key={index} style={itemStyle} className={styles.listItem}>
            <div className={styles.number} style={{ backgroundColor: color }}>{letter}</div>
            <div className={styles.text}>{`This is row ${index}`}</div>
        </div>
    )
}

// ---- Story configuration
export default {
    title: 'VirtualizedList',
    component: VirtualizedList,
    argTypes: {
        wrapperTagName: {
            description: 'Tag-name used for the root-element of the component',
        },
        items: {
            description: 'List of data items to be used as source for the list',
            // Disable the controls for the 'items' prop - as the array is too large to render a control for without crashing the browser ;-)
            control: { disable: true }
        },
        itemHeight: {
            description: 'Height used for every list-item in pixels',
        },
        className: {
            description: 'Classname that will be applied to the root-element of the component',
        },
        renderItem: {
            description: 'Custom render function that is called to render every list-item',
        },
        overscanRowCount: {
            description: 'The number of items that will be rendered before and after the visible part of the list',
        },
        wrapperStyle: {
            description: 'Object containing css-styles that should be applied to the root-element of the component',
        },
    }
};
const Template = args => <VirtualizedList {...args} />;

// --- Story definitions
export const HundredItems = Template.bind({});
HundredItems.args = {
    wrapperTagName: 'div',
    items: generateListItems(100),
    itemHeight: 50,
    className: styles.VirtualizedList,
    renderItem: renderListItem
};

export const TenThousandItems = Template.bind({});
TenThousandItems.args = {
    ...HundredItems.args,
    items: generateListItems(10000),
};

export const HundredThousandItems = Template.bind({});
HundredThousandItems.args = {
    ...HundredItems.args,
    items: generateListItems(100000),
};

export const ThreeHundredThousandItems = Template.bind({});
ThreeHundredThousandItems.args = {
    ...HundredItems.args,
    items: generateListItems(300000),
};