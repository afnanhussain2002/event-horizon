import img1 from '../../../assets/p-1.jpg'
import img2 from '../../../assets/p-2.jpg'
import img3 from '../../../assets/p-3.jpg'
import img4 from '../../../assets/p-4.jpg'
import img5 from '../../../assets/p-5.jpg'
import img6 from '../../../assets/p-6.jpg'
import img7 from '../../../assets/p-7.jpg'
import img8 from '../../../assets/p-8.jpg'
import img9 from '../../../assets/p-9.jpg'
import img10 from '../../../assets/p-10.jpg'

import Marquee from "react-fast-marquee";



const Partners = () => {
    return (
        <>
        <div className='mt-16'>
           <h3 className='text-5xl text-center font-bold'>Our <span className='text-sky-400 underline'>Partners</span></h3>
        </div>
    
       <Marquee className='mt-4'>
       <img className='w-28 mr-8' src={img1} alt="" />
       <img className='w-28 mr-8' src={img2} alt="" />
       <img className='w-28 mr-8' src={img3} alt="" />
       <img className='w-28 mr-8' src={img4} alt="" />
       <img className='w-28 mr-8' src={img5} alt="" />
       <img className='w-28 mr-8' src={img6} alt="" />
       <img className='w-28 mr-8' src={img7} alt="" />
       <img className='w-28 mr-8' src={img8} alt="" />
       <img className='w-28 mr-8' src={img9} alt="" />
       <img className='w-28 mr-8' src={img10} alt="" />
  </Marquee>

        </>
      
    );
};

export default Partners;