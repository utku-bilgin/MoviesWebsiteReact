import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard( {movie} ) {
  return (
    <Link to={`movie-page/${movie.id}`}>    <Card key={movie.id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={movie.moviePosterUrl} // API'den gelen film afişi
          alt={movie.name} // Film adı
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.name} {/* Film adı */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Film açıklaması veya diğer bilgiler */}
            {movie.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}