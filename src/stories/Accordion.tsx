import React from 'react';
import './accordion.css'


type AccordionProps = {
    title: string,
    description: string,
};

export const Accordion = ( { title, description }: AccordionProps) => {

    const handleToggleActive = (e: React.SyntheticEvent) => {

        const summaryElement = e.currentTarget as HTMLElement;
        const detailsElement = summaryElement.parentElement as HTMLDetailsElement;

        if (detailsElement.open) {
            summaryElement.classList.remove('active')
        } else {
            summaryElement.classList.add('active')
        }
    }

    return (
    <>
        <details className='accordion'>
            <summary className='accordion-title' onClick={handleToggleActive}>{title}</summary>
            <div className='description'>{description}</div>
        </details>
    </>
    )
}