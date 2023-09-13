
import styled from "styled-components";
const Moviecontainer=styled.div`
display:flex;
flex-direction:column;
padding:10px;
gap:24px;
width:280px;
box-shadow:0 3px 0 #aaa;
cursor:pointer;`;
const Coverimage=styled.img`
object-fit:cover;
height:362px;
`;
const Moviename=styled.span`
font-size:18px;
font-weight:600;
color:black;
margin:15px 0;
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;`;
const Infocolumn=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`;
const MovieInfo=styled.span`
font-size:16px;
font-weight:500;
color:black;
text-transform:capitalize;`;



const Moviecomponent=(props)=>{
    const {Title ,Year,imdbID,Type,Poster}=props.movie;
    return <Moviecontainer onClick={()=>props.onMovieSelect(imdbID)}>
        <Coverimage src={Poster}/>
        <Moviename>{Title}</Moviename>
        <Infocolumn>
            <MovieInfo>Year : {Year}</MovieInfo>
            <MovieInfo>Type : {Type}</MovieInfo>
        </Infocolumn>
    </Moviecontainer>;
};
export default Moviecomponent

