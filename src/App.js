import Navbar from "./componensts/Navbar"
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import {styled} from "@mui/system"
import Card from './componensts/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SearchArea = styled(Box)`
width: 100%;
height: 100px;
background: #f2f2f2;
display: flex;
justify-content: center;
align-items: center;
`;

const TextFieldArea = styled(TextField)`
width: 50%;
`;

const CardArea = styled(Box)`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
flex-wrap: wrap;

& div {
  margin: 20px;
}
`;


function App() {

  useEffect(() => {
    fetch("https://localhost:7131/api/Movie")
      .then( res => res.json()
      .then( data => setMovies(data) ))
  }, []);

  const [movies, setMovies] = useState([]);
  const [filteredText, setFilteredText] = useState("");

  const filterMovie = (e) => {
    const filteredMovie = movies.filter(item => item.name?.toLowerCase().indexOf(filteredText?.toLowerCase()) > -1)
    console.log(filteredMovie)
    console.log(filteredText)
    return filteredText === "" ? movies : filteredMovie
  }

  return (
    <div className="App">
      
      <Navbar />
      <SearchArea>
        <TextFieldArea id="outlined-basic" label="Ara..." variant="outlined" onChange={ (e) => setFilteredText(e.target.value) } /> 
      </SearchArea>
      
      <Link to={`/movie-create-page`}>
                Yeni Film Oluştur
            </Link>

      <CardArea>
        { filterMovie().map( movies => (
          <Card key={movies.id} movie={movies} />
        )) }
      </CardArea>


    </div>
  );
}

export default App;
