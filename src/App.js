
import Axios from "axios";
import {useState} from "react";
import styled from "styled-components";
import Moviecomponent from "./component/Moviecomponent";
import MovieInfocomponent from "./component/MovieInfocomponent";
export const API_KEY="27da3223";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;
const Appname = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;  
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const Searchbox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 60px;
  margin-left: 20px;
  width: 25%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const MovieImage = styled.img`
  width: 65px;
  height: 52px;
  margin: 15px;
  opacity:75%;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
const Placeholder=styled.img`
width:120px;
height:120px;
margin:150px;
opacity:0%;`;
const Else=styled.div`
height:100vh;
background:#ccffff;
`;

function App() {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId,updateTimeoutId]=useState();
  const [movieList,updateMovieList]=useState([]);
  const [selectedMovie,onMovieSelect]=useState();
  const fetchData=async(searchString)=>{
    const response=await Axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
    updateMovieList(response.data.Search)
  };
  const onTextChange=(event)=>{
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout=setTimeout(()=>fetchData(event.target.value),500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
       <Appname><MovieImage src="/movie-icon.jpg"/>Movie Catalogue </Appname> 
      <Searchbox><SearchIcon src="/search-icon.svg"/>
      <SearchInput placeholder="Search Movie" value={searchQuery} onChange={onTextChange}/></Searchbox></Header>
      {selectedMovie && (<MovieInfocomponent selectedMovie={selectedMovie}
      onMovieSelect={onMovieSelect}/>)}
      <MovieContainer>
       {movieList?.length?
       movieList.map((movie,index)=>(<Moviecomponent key={index} movie={movie} onMovieSelect={onMovieSelect}/>
       )):<Placeholder src="/movie-icon.jpg "/> 
       }
      </MovieContainer>
    </Container>
  );
}

export default App;
