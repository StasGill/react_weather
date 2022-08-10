import React from 'react'
import './style.scss'

export const Form = ({value,onSubmit,onChange}) => {
  return (
    <form className='formContainer' onSubmit={onSubmit}>
       <input value={value} onChange={onChange}></input>
        <button type='submit'>Find</button>
    </form>
  )
}
