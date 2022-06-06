import React, { FC } from "react"

type Prop = {
  value: string
}
/* desestructuración desde el parámetro */
const Result: FC<Prop> = ({ value }) =>
(
  <div className="result">
    {value}
  </div>
)

/* le agrega default a los props */
Result.defaultProps = {
  value: "0"
}

/* exporta el resultado */
export default Result