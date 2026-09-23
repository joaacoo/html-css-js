import React from 'react'
import BootstrapButton from "react-bootstrap/FormSelect";

type Props = {

}

const Select = ({}: Props) => {
  return (
    <div className='md-6'>
        <label htmlFor="">Tipo</label>
        <select className="form-select mb-3 form-select-sm" aria-label=".form-select-sm example">
            <option selected>-- Seleciona el tipo --</option>
            <option value="1">Familiar</option>
            <option value="2">Trabajo</option>
        </select>   
    </div>
  )
}

export default Select