

import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setPassword } from "../../state/formSlice";

type PasswordInputProps = {
   name: string
   img: string
   required?:boolean
   title:string
   error: string
}

const PasswordInput = ({img, required, title,name,error}:PasswordInputProps)=>{
   const [value, setValue] = useState('')
   const dispatch = useDispatch()
   const handleChange = (event: ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)
   
   return (
      <>
         <img src={img} alt="password" />
         <input type='password' name={name} required={required} autoComplete="new-password"
         onChange={handleChange} onBlur={()=>dispatch(setPassword({name,value}))}
         />
         <label>{title}</label>
         {error && <p className='error'> {error} </p>}
      </>
   )
}

export default PasswordInput



