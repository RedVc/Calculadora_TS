import React, { FC } from "react"

/*
  Muestra la operación completa, ya que en el tutorial se 
  elimina para solo mostar los números que se van ingresando 
*/

type Prop = {
  value: String
}

/* desestructuración desde el parámetro */
const Opera: FC<Prop> = ({ value }) =>
(
  <div className="operacion">
    {value}
  </div>
)

/* le agrega default a los props */
Opera.defaultProps = {
  value: "0"
}

/* exporta el resultado */
export default Opera