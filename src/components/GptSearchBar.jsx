import React, { useRef } from 'react'
import openai from '../utils/openai';


const GptSearchBar = () => {
    const searchText=useRef(null);
    const handleGptSearchClick= async ()=>{
        console.log(searchText.current.value);
        //Make an API call to gpt  api and get movie results

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the queyr" + searchText.current.value + "only give me names of 5 movies, comma separated like the example result given ahead. Example Result : Gadar, Sholay, Don, Golmaal, Koi Mil Gya"

        const gptResults = await openai.responses.create({
            model: 'gpt-3.5-turbo',
            instructions: gptQuery,
            input: gptQuery ,
          });
        console.log(gptResults.choices);
        
    }
  return (  
    <div className='pt-50 flex justify-center'>
        <form className='bg-black  w-1/2 rounded-md' onSubmit={(e)=>{e.preventDefault()}}> 
            <input 
            ref={searchText}
            type='text' className='px-40  py-2 m-4 bg-white'
            placeholder='What would you like to watch today?'></input>
            <button className='bg-red-700 text-white font-bold rounded-md px-4 py-2 cursor-pointer'
            onClick={handleGptSearchClick}>Search</button>
        </form>
    </div>

  )
}

export default GptSearchBar