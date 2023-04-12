import React from 'react'
import Personal from './Personal';
import Loading from './Loading';
import { useState, useEffect } from 'react';

const Home = () => {

    const [isloading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=> {
            setLoading(!isloading)
        }, 5000)
    }, [ ]);
  return (
    
    <>
        {
        isloading? (<Loading/>) : (<Personal />)

        }
    </>

  )
}

export default Home;