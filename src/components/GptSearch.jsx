import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { bgLoginPage } from '../utils/constants'
const GptSearch = () => {
  return (

    <div>
        <div className='absolute -z-10'> 
            <img src={bgLoginPage}></img>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch