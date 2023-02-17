import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './form.css'
const Form = (props) => {

    const [movie,setMovie] = useState(props.mName);
    const [name,setName] = useState('')
    const [date,setDate] = useState('')

    const [data,setData] = useState({})
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault();
      await  setData({movie:movie,name:name,date:date})
     navigate('/');
    }
useEffect(() => {
    const str = JSON.stringify(data)
 localStorage.setItem('bookings',str);

}, [data])


     console.log(data)



  return (
    <div className='form'>
        <h1>Book Movie Ticket</h1>
        <form className='form-data' onSubmit={handleSubmit} >
        <label>Movie</label>
        <input type="text" value={props.mName} onChange={(e)=>setMovie(props.mName)} />

        <label>Your Name</label>
        <input type="text"  onChange={(e)=>setName(e.target.value)} />



        <label>Date</label>
        <input type="date" onChange={(e)=>setDate(e.target.value)}  />
        <button className='ticket-btn' type='submit'>Book</button>
        </form>
    </div>
  )
}

export default Form