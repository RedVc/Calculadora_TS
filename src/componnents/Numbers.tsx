import React, { FC } from "react"
import Button, { ButtonClickHandler } from "./Button"

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

/* DRY: Don't repeat yourself */
const renderButtons = (onClickNumber: ButtonClickHandler) => {

    const renderButton = (number: number) => (
        <Button 
            key={number} 
            text={number.toString()} 
            clickHandler={onClickNumber} 
        />
    )
    return numbers.map(renderButton)
}

type Props = {
    onClickNumber: ButtonClickHandler
}

const Numbers: FC<Props> = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

export default Numbers