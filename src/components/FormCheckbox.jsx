import React, { useState } from 'react'

const FormCheckbox = ({name,label, size, defaultChecked}) => {
 const [check, setCheck] = useState( false ||defaultChecked)
 const handleChecked = (e)=>{
  setCheck(e.currentTarget.checked)
  console.log(check);
  
 }
  return (
    <div className='form-control items-center'>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize cursor-pointer'>{label}</span>
      </label>

      <input type="checkbox" name={name}id={name} checked={check} onChange={handleChecked}  className={`checkbox checkbox-primary ${size}`}/>
    </div>
  )
}

export default FormCheckbox