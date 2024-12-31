import './radioGroup.css'


type RadioGroupProps = {
    list: string[],
    title: string,
    listDirectionVertical: boolean
};

export const RadioGroup = ( { list, title, listDirectionVertical }: RadioGroupProps) => {

    const displayList = list.map((item) => {
        return (
            <div className="radioItem">
                <input type="radio" id={item} name={title} value={item} />
                <label htmlFor={item}>{item}</label>
            </div>
        )
    })

    return (
    <>
        <div className='title'>{title}</div>
        <div className={`radioGroup ${listDirectionVertical ? 'vertical' : 'horizontal'}`}>
            {displayList}
        </div>
    </>
    )
}