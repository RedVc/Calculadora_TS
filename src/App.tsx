/* elimina el Warning de este archivo*/
/* eslint no-eval: 0 */

/* Importación */
import React, { useState, FC } from "react"

import words from "lodash.words"
import Functions from "./componnents/Functions"
import MathOperations from "./componnents/MathOperations"
import Numbers from "./componnents/Numbers"
import Opera from "./componnents/Opera"
import Result from "./componnents/Result"

import "./App.css"

/* Generación de la función del componente */
const App: FC = () => {

    /* array Destructuring */
    /* 1er posición: valor (inicialmente es el valor por defecto) */
    /* 2da posición: función que va a permitir modificar el valor por defecto */
    const [stack, setStack] = useState("")

    /* words */
    /* separa la cadena en items separados por los caracteres elegidos */
    const items = words(stack, /[^-^+^*^/]+/g)

    /* operador ternario */
    /* es similar a un if */
    const value = items.length > 0 ? items[items.length - 1] : "0"

    const opera = stack.length > 0 ? stack : "..."

    /* Lo que ejecuta la función */
    console.log("Renderización de App", value)

    /* llama al componente Result y a su vez le manda un parámetro, luego muestra el resultado */
    return (
        <main className="react-calculator">

            <Result value={value} />
            <Opera value={opera} />

            <Numbers onClickNumber={
                number => { setStack(`${stack}${number}`) }
            } />

            <Functions
                onContentClear={() => {
                    setStack("")
                }}
                onDelete={() => {
                    if (stack.length > 0) {
                        const newStack = stack.substring(0, stack.length - 1)
                        setStack(newStack)
                    }
                }}
            />

            <MathOperations
                onClickOperation={operation => {
                    console.log("Operation:", operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {

                    var mod = false
                    /* Elimina el 0 si es inicial, de lo contrario se iguala al stack */
                    var newStack = ""
                    if (stack.charAt(0) === "0") {
                        console.log(stack.charAt(0))
                        newStack = stack.substring(stack.length, 1)
                        console.log(newStack)
                        mod = true
                    } else {
                        newStack = stack
                    }

                    var newStack2 = ""
                    var mod2 = false
                    /* Recorre newStack */
                    for (let i = 0; i < newStack.length; i++) {
                        
                        /* 
                            Si contiene un 0 y el carater anterior es una 
                            operación matemática, no se guarda el caracter actual
                            en la nueva variable pero activa un bool de verificación,
                            de lo contrario, si lo hace
                        */
                        if ((newStack.charAt(i-1) === "+" || newStack.charAt(i-1) === "-" || newStack.charAt(i-1) === "*" || newStack.charAt(i-1) === "/") && newStack.charAt(i) === "0") {
                            /* console.log(newStack.charAt(i)) */
                            mod2 = true
                        } else {
                            newStack2 = newStack2 + newStack.charAt(i)
                        }
                        
                    }

                    if (mod2) {
                        setStack(eval(newStack2))
                    } else if (mod) {
                        setStack(eval(newStack))
                    } else {
                        setStack(eval(stack))
                    }


                    
                }}
            />

        </main>)
}

/* Exportación */
export default App