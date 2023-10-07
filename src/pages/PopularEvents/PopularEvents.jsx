import React, { useEffect, useState } from 'react';

import PopularEvent from './PopularEvent/PopularEvent';

const PopularEvents = () => {
  const [pEvents, setPEvents] = useState([])
  useEffect(() =>{
    fetch('/popular_enents.json')
    .then(res => res.json())
    .then(data => setPEvents(data))

  },[])

    return (
        <>
        <div className='mt-16'>
           <h3 className='text-5xl text-sky-400 underline text-center font-bold'>Popular Events</h3>
        </div>
         <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
            
            {
                pEvents.map(pEvent => <PopularEvent key={pEvent.id} pEvent={pEvent}></PopularEvent>)
            }
        </div>
        </>
       
    );
};

export default PopularEvents;