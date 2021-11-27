import React,{useState, useEffect} from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
import { imageUrl, API_KEY } from '../../constants/constant'
import './RawPost.css'
function RawPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, seturlId] = useState()
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            
            setMovies(response.data.results)
        })
    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
          console.log(id);
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
              console.log(response.data);
              if(response.data.results.length!==0){
              seturlId(response.data.results[0])
            }else{
                console.log('Empty')
            }
          })

      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter': 'poster'} 
                src={`${imageUrl+obj.backdrop_path}`} alt="Posters" />
                )}
            
                </div>
               {urlId && <YouTube videoId={urlId.key} opts={opts}  />}


            
        </div>
    )
}
 export default RawPost
