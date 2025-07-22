
import { IMG_CDN } from '../utils/constants'
import { useNavigate } from 'react-router-dom'
import { IoPlayCircleSharp } from 'react-icons/io5'
import { SlLike } from "react-icons/sl";
import LikeMovie from '../connect/like';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { DislikedMovies } from '../connect/like';
import { CheckIfLiked } from '../connect/like';
import { useEffect } from 'react';
import { watchHistoryf } from '../connect/like';
import { API_OPTION } from '../utils/constants';


const MovieCard1 = ({ posterPath, id,title,dis }) => {
  const [trailer, settrailer] = useState();
  const [hovered, setHovered] = useState(false);
  const email = useSelector((state) => state.user?.email);

  const url = 'https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US';
  const mainMovieTrailer = async () => {
    const data = await fetch(url, API_OPTION)
    const json = await data.json()

    const filterdata = json.results.filter(video => video.type === "Trailer")
    const trailer1 = filterdata.length ? filterdata[1] : json.results[0]
    settrailer(trailer1);
   

  }
  useEffect(() => {
    mainMovieTrailer()
  }, [])

  
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (email && id) {
      CheckIfLiked(email, id).then((isLiked) => {
        setClicked(isLiked);
      });
    }
  }, [email, id]);

  const navigate = useNavigate()
  return (
    <div className=" group  w-32 h-32 max-sm:w-14 max-sm:h-24 mt-7 rounded  transition-all duration-300 ease-out 
    transform hover:scale-150 hover:translate-y-[-10px]  hover:z-50 hover:shadow-2xl max-sm:hover:scale-100 cursor-pointer  "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && trailer?.key ? (
        <div className='  z-0'>
        <iframe className='w-72 h-72  aspect-video cursor-pointer mt-[-5rem] max-sm:absolute max-sm:mt-[150px] z-10' src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=0&controls=0"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" > </iframe>
        <div className='w-72 h-80 -mt-12 bg-black absolute z-50 p-4 '><p className='text-purple-700 font-bold -mt-10'>{title}</p>
        <p className='text-white text-[10px] truncate '>{dis}</p>
        </div>
              <IoPlayCircleSharp onClick={async () => {
        navigate(`/video/${id}`)
        watchHistoryf(email, id)
      }} className="absolute cursor-pointer bottom-5 left-2 text-white text-3xl hover:text-purple-800" />
      <SlLike onClick={() => {
        if (clicked && email && id) {
          DislikedMovies(email, id);
          setClicked(!clicked)
        }
        else if (email && id) {

          LikeMovie(email, id)
          setClicked(!clicked)
        }
      }
      } className={`absolute bottom-5 left-24 text-2xl opacity-0 ${clicked ? 'text-red-600' : 'text-purple-600'} group-hover:opacity-100 cursor-pointer`} />
        </div> 
        
      ) : (
        <img
          src={IMG_CDN + posterPath}
          alt="Movie Poster"
          className="w-full h-full object-cover"
        />
      )}

    </div>
  )
}

export default MovieCard1;
