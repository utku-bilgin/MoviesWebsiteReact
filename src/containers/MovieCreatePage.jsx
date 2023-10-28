import React, { useState, useEffect } from 'react';
import Navbar from "../componensts/Navbar";
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

function MovieCreatePage() {

    const [movie, setMovie] = useState(null);
    const [movieName, setMovieName] = useState("");
    const [description, setDescription] = useState("");
    const [moviePosterUrl, setMoviePosterUrl] = useState("");
    const [director, setDirector] = useState("");
    const [cast, setCast] = useState("");
    const [productionYear, setProductionYear] = useState("");
    const [movieDuration, setMovieDuration] = useState("");
    const [country, setCountry] = useState("");
    const [imdbRating, setImdbRating] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [categories,setCategories] = useState([]);
    const [movieTrailerUrl,setMovieTrailerUrl] = useState("");

    const getCategoryName = (categoryId) => {
        fetch(`https://localhost:7131/api/Category`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                const getData = data.find(item => item.id === categoryId);
                setCategoryName(getData);

            })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        
        // Güncelleme işlemini gerçekleştir ve API'ye verileri gönder
        const payload = {
            "id":id,
            "name": movieName,
            "moviePosterUrl": moviePosterUrl,
            "movieTrailerUrl": movieTrailerUrl,
            "description": description,
            "productionYear": productionYear ,
            "movieDuration": movieDuration,
            "country": country,
            "director": director,
            "cast": cast,
            "imdbRating": Number(imdbRating),
            "categoryId": categoryName,
          }
        try {
            const response = await fetch(`https://localhost:7131/api/Movie/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Güncelleme başarısız.');
            }

            // Başarılı güncelleme sonrası kullanıcıyı başka bir sayfaya yönlendirebilirsiniz.

        } catch (error) {
            console.error('API hatası: ', error);
        }
    };

  return (
    <>
            <Navbar />
            <form>
                <Container>
                    <Grid container>
                        <Grid xs={2}>
                            <label>Film Adı:</label>
                        </Grid>
                        <Grid xs={10}>
                            <input type="text" name="movieName" value={movieName} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
                    
                    <Grid container>
                        <Grid xs={2}>
                            <label>Açıklama:</label>
                        </Grid>
                        <Grid xs={10}>
                            <textarea name="description" value={description} onChange={handleInputChange}></textarea>
                        </Grid>
                    </Grid>               
    
                    <Grid container>
                        <Grid xs={2}>
                            <label>Film Afişi:</label>
                        </Grid>
                        <Grid xs={10}>
                            <input type="text" name="moviePosterUrl" value={moviePosterUrl} onChange={handleInputChange} />
                        </Grid>
                    </Grid> 
    
                    <Grid container>
                        <Grid xs={2}>
                            <label>Yönetmen:</label>
                        </Grid>
                        <Grid xs={10}>
                            <input type="text" name="director" value={director} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
    
                    <Grid container>
                        <Grid xs={2}>
                            <label>Oyuncular:</label>
                        </Grid>
                        <Grid xs={10}>
                            <input type="text" name="cast" value={cast} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={2}>
                            <label>Trailer URL:</label>
                        </Grid>
                        <Grid xs={10}>
                            <input type="text" name="movieTrailerUrl" value={movieTrailerUrl} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
    
                    <Grid container>
                        <Grid xs={2}>
                            <label>Yapım Yılı:</label>
                        </Grid>
                        <Grid xs={10}>
                            <input type="text" name="productionYear" value={productionYear} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
    
                    <Grid container>
                        <Grid xs={2}>
                            <label>Film Süresi:</label>
                        </Grid>
                        <Grid xs={10}>
                            <input type="text" name="movieDuration" value={movieDuration} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
    
                    <Grid container>
                        <Grid xs={2}>
                            <label>Ülke:</label>
                        </Grid>
                        <Grid xs={10}>
                            <input type="text" name="country" value={country} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
    
                    <Grid container>
                        <Grid xs={2}>
                            <label>IMDB Puanı:</label>
                        </Grid>
                        <Grid xs={10}>
                            <input type="text" name="imdbRating" value={imdbRating} onChange={handleInputChange} />
                        </Grid>
                    </Grid>
    
                    <Grid container>
                        <Grid xs={2}>
                            <label>Kategori Adı:</label>
                        </Grid>
                        <Grid xs={10}>
                           {/*  <input type="text" name="categoryName" value={categoryName} onChange={handleInputChange} /> */}
                         
                           <select onChange={handleInputChange} style={{width:"200px"}} name="categoryName" >
                            <option value={categoryName.id}>{categoryName.name}</option>
                            {categories.map(item => (
                               <option value={item.id}>{item.name}</option>
                            ))}
                           </select>
                        </Grid>
                    </Grid>
    
                    <Grid container>
                        <Grid>
                            <button type="submit" onClick={handleUpdate}>Güncelle</button>
                        </Grid>
                    </Grid>
                </Container>
            </form>
        </>
  )
}

export default MovieCreatePage
