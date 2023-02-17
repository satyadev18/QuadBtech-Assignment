import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './home.css'

const Home = () => {
    const [data,setData] = useState([]);


 async function fetchData(){
    const apiurl = 'https://api.tvmaze.com/search/shows?q=all';
    const response = await fetch(apiurl);
    const responseData= await response.json();
    console.log(responseData);
     setData(responseData)


}
useEffect(() => {
 fetchData();
}, [])

  return (
    <div className='home'>
        {data.map((m)=>(
       <div key={m._id} className='container'>
          <img className='image' src= {m.show.image? m.show.image.medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/75/189678.jpg'}  alt="" />


           <h2 className='name'>{m.show.name}</h2>
           <div className="info-box">
          <p className='rating'>Rating: <span style={{fontWeight:'bold'}}> {(m.show.rating.average && m.show.rating.average + '/10') || 'No Ratings'} </span></p>

            <Link className='link' to={`/detail/${m.show.id}`}><button className='detail-btn'>View Details</button></Link>
           </div>

        </div>
         ))}


    </div>
  )
}

export default Home