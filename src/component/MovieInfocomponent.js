import Axios from "axios";
import {useEffect,useState} from "react";
import styled from "styled-components";
import { API_KEY } from "../App";
const Container=styled.div`
display:flex;
flex-direction:row;
padding:20px 30px;
justify-content:center;
border-bottom:1px solid lightgray;`;
const Coverimage=styled.img`
object-fit:cover;
height:352px;`;
const Infocolumn=styled.div`
display:flex;
flex-direction:column;
margin:20px;

`;
const Moviename=styled.span`
font-size:22px;
font-weight:600;
color:black;
margin:15px 0;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
font-family:Georgia, serif;`;
const MovieInfo=styled.span`
font-size:16px;
font-weight:500;
color:black;
overflow:hidden;
margin:4px 0;
text-transform:capitalize;
text-overflow:ellipsis;
& span{
    opacity:0.5;
}`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 10px;
  border-radius:100%;
  cursor: pointer;
  opacity: 1;
`;
const MovieInfocomponent=(props)=>{
    const [movieInfo,setMovieInfo]=useState();
    const {selectedMovie}=props;
    useEffect(()=>{Axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,)
    .then((response)=>{
      console.log(response.data.Type);
     // response.data.Type[0]+=('A'-'a');
      setMovieInfo(response.data)});},[selectedMovie]);
    return (<Container>
        { movieInfo?<>
        <Coverimage src={movieInfo?.Poster }/>
        <Infocolumn>
          <Moviename>{movieInfo?.Type} : {movieInfo?.Title}</Moviename>
          <MovieInfo>IMDB  Rating : <span>{movieInfo?.imdbRating}</span></MovieInfo>
          <MovieInfo>
              Year : <span>{movieInfo?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Language : <span>{movieInfo?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Rated : <span>{movieInfo?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released : <span>{movieInfo?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime : <span>{movieInfo?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre : <span>{movieInfo?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director : <span>{movieInfo?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Actors : <span>{movieInfo?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Plot : <span>{movieInfo?.Plot}</span>
            </MovieInfo>
        </Infocolumn>
        <Close onClick={()=>props.onMovieSelect()}>X</Close></>:"Loading..."}
    </Container>);

};
export default MovieInfocomponent;
