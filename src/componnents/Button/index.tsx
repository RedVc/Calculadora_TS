// importar React
import React, { FC } from "react"
import "./Button.css"

/* este tipo es para clickHandler */
export type ButtonClickHandler = (text: string) => void

/* el "?" después del nombre, quiere decir que es opcional y puede tener un valor undefined */
type Props = {
    type?: string,
    text: string,
    clickHandler: ButtonClickHandler
}

// componente funcional
const Button: FC<Props> = ({ type, text, clickHandler }) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

// exportación
export default Button