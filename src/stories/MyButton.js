import './button.css';

export default function MyButton ({
                           primary = false,
                           size = 'medium',
                           backgroundColor = null,
                           label = 'Button',
                       }) {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button type="button" className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} style={{ backgroundColor }}
>
    {label}
    </button>
);
};