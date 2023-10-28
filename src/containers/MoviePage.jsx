import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "../componensts/Navbar"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';

function MoviePage() {

    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        fetch(`https://localhost:7131/api/Movie/${id}`)
          .then( res => res.json()
          .then( data => {setMovie(data);
          
            getCategoryName(data.categoryId);}))
      }, []);

    
      const getCategoryName = (categoryId) => {
        fetch(`https://localhost:7131/api/Category`)
            .then(res => res.json())
            .then(data => {
                const getData = data.find(item => item.id === categoryId);
                setCategoryName(getData);

            })
    }


    console.log(id)
  return (
    <>
        <Navbar />
        <Container >
        
        <Grid container>
        <Grid xs={6}>
        <img
            src={movie?.moviePosterUrl}
            alt={movie?.name}
            style={{
                width: "400px",
                heigth: "600px",
            }}
        />
        </Grid>
        <Grid xs={6}>
            <h2>{movie?.name}</h2>
            <p>{movie?.description}</p>
            <p>Yönetmen: {movie?.director}</p>
            <p>Oyuncular : {movie?.cast}</p>
            <p>Yılı : {movie?.productionYear}</p>
            <p>Süresi : {movie?.movieDuration}</p>
            <p>Ülke : {movie?.country}</p>
            <p>IMDB Puanı: {movie?.imdbRating}</p>
            <p>Kategoei : {categoryName.name}</p>
            <Link to={`/movie-update-page/${movie?.id}`}>
                Güncelle
            </Link>
        </Grid>
        </Grid>
        <Grid container>
        <iframe 
            width="1280" 
            height="720" 
            src={movie?.movieTrailerUrl}
            title={`${movie?.name} Fragman`}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
        </iframe>
        </Grid>
        
    </Container>
    </>
  )
}

export default MoviePage
