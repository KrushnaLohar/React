import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/KrushnaLohar')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <>
      <div className='bg-orange-400 flex justify-between mx-40 items-center py-5 px-11 text-3xl font-semibold'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Github Picture" width={300} />
      </div>
      
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const resp = await fetch('https://api.github.com/users/KrushnaLohar')

  return resp.json();
}