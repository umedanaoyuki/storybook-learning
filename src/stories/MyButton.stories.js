import MyButton from "./MyButton.js";

export default {
    title: 'MyApp/MyButton',
    component: MyButton,
};

export const Index = {
    render: () => <MyButton primary size="medium" label="ボタン"
    onClick={() => console.log('Hello Storybook')}/>
};

export const White = {
    render: () => <MyButton primary size="small" label="ボタン" backgroundColor='#fff'/>
};

