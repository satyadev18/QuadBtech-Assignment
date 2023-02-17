import React,{useEffect, useState} from 'react';
import './detail.css'
import {  useParams } from 'react-router-dom';
import Form from '../Form/Form';



const Detail = () => {
const [movie,setMovie] = useState([])
const [form,setForm] = useState(false)
const[detail,setDetail] = useState(true);

const changeState = () =>{
  setDetail(false);
  setForm(true)
}
const {id} = useParams();
     async function fetchData(){
        const apiurl =`https://api.tvmaze.com/shows/${id}`;
        const response = await fetch(apiurl);
        const responseData= await response.json();
        console.log(responseData);
        setMovie(responseData)



    }
    useEffect(() => {
     fetchData();
    }, [])

  return (

    <div className='detail'>
    { detail && (  <div>
        <img className='detail-image' src= {movie.image? movie.image.medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/75/189678.jpg'} alt="" />



        <div className="movie-detail">
          <div className='c'>
        <h2 className='movie-name'>{movie.name}</h2>
        <button className='ticket-btn' onClick={changeState}>Book Ticket</button>
        </div>
        <p className='summary'> {movie.summary}</p>
        <div className="movie-data">
          <h4>Genre : <span>{movie.genres}</span></h4>
          <h4>Rating : <span> {(movie.rating && movie.rating.average + '/10') || 'No Ratings'}</span></h4>
          <h4>Duration : <span>{movie.averageRuntime}</span></h4>
        </div>


        </div>
</div>)}
 {form && <Form mName = {movie.name}/>}

    </div>

  )
}

export default Detail