import React,{useContext} from 'react'
import {Store} from './Datastore'
import '../App.css'
import { Link } from 'react-router-dom';
import arrowr from '../img/arrowr.svg'

function Bollywood() {
  const [DData]=useContext(Store);
  return (
    <div className='Mainc'>
      <div className='seccnt'>
        <h1 className='b1'>Bollywood</h1>
       {DData.filter((item)=>item.cat==='Bollywood').map((data,bolly)=>{
            return(
                <>
              
                <div className='bcontainer' key={bolly}>
                  <div >
                <img className='img' src={data.image} alt='Not Found'/>
                </div>
                <div className='dsc'>
               <Link to={`/Detail/${data.id}`}> <h3>{data.Heading}</h3></Link>
                <p className='ds'>{data.description}</p>
                <p className='ds'>{data.date}</p>
                
                </div>
                
                </div>
                <hr className='hr'/>
                </>
                 
            )
        })

        } 
        <p><span > Load More</span><img className='d' src={arrowr}/></p>
      
        </div>
        <div className='seccnt'>
          <h1  className='b1'>Top Posts</h1>
        {DData.filter((item)=>(item.cat==='Bollywood') && (item.id===5)).map((data,bolly)=>{
            return(
                <>
              
                <div className='blcontainer' key={bolly}>
                  <div >
                <img className='bsimg' src={data.image} alt='Not Found'/>
                </div>
                <div className='bdsc'>
                <span className='bsh'>{data.Heading}</span> <span id='st'  className='number'>1</span>
                </div>
                <p className='ds'>{data.date}</p>
              <hr></hr>
                </div>
                </>
            )
        })
      }

{
  DData.filter((item)=>item.id===6).map((data,ind)=>{
    return(
      <div className='short' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>2</span></div>

             
      </div>
    )
   

  })
}
        <hr/>
        {
  DData.filter((item)=>item.id===9).map((data,ind)=>{
    return(
      <div className='short' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>3</span></div>

             
      </div>
    )
   

  })
}
        <hr/>
        {
  DData.filter((item)=>item.id===11).map((data,ind)=>{
    return(
      <div className='short' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>4</span></div>

             
      </div>
    )
   

  })
}
<div className='Adds'>
  Advertisement
</div>

        </div>
        
    </div>
  )
}

export default Bollywood