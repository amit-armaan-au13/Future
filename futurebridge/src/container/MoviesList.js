import React, {useState} from 'react'
import axios from 'axios'
import '../App.css'

const MoviesList = () => {

    let [Movie,setMovie] = useState([''])

    const fetchMovie = async()=>{
        const data =  await axios.get('http://localhost:5000/api/getMovies')
        setMovie([data.data.message])
        console.log(data.data.message)
        console.log(Movie[0])

    }

    
    return (
        <>
        <h1>Movies list here:-</h1>

        <div>
            <button onClick={fetchMovie}>Get Movies</button>
        </div> 
        {Movie[0] ? Movie[0].map((item)=>{
            return(
                <div className="cards">
                    <img src={item.image} alt={item.title}/>
                    <h2> Title:{item.title}</h2>
                    <p> subTitle:{item.subTitle}</p>
                    <p>Description:{item.description}</p>
                    <p>Ratings:{item.rating}</p>

                </div>
            )
        }):<h1>no movies data here</h1>}
        
        </>
    )
}

export default MoviesList
