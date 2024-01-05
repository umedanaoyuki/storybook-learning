import './stories/button.css';

type PropsType = {
    primary: boolean,
    size: string,
    backgroundColor: string,
    label?: string
}

export const MyButton = ({
                             primary = false,
                             size = 'medium',
                             backgroundColor = 'red',
                             label = 'Button'
                         }: PropsType) => {

    const mode  = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return (
        <button type="button" className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
                style={backgroundColor ? { backgroundColor } : undefined }>
            {label}
        </button>
    );
}

