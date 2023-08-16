import React, { useContext } from 'react'
import { Store } from './Datastore'
import arrowr from '../img/arrowr.svg'
import arrowl from '../img/arrowl.svg'
function Home() {
  const [DData]=useContext(Store)
  return (
    <>
    <div className='hmain'>
<div className='hmain1'>
<div className='hmain11'>
{
        DData.filter((item)=>(item.cat==='Hollywood') && (item.id===70)).map((data,bolly)=>{
            return(
                <>
                <div className='Hcontainer' key={bolly}>   
                <img className='himg1' src={data.image} alt='Not Found'/>
                <div className='title'>
                <h2>Title of vertical gallery</h2>
                <p>{data.date}</p>
                </div>
                </div>
                </>
            )
        })
      }
</div>
<div className='hmain12'>
{DData.filter((item)=>((item.id===16)  ||  (item.id===28) )).map((data,bolly)=>{
            return(
              
                <div className='Hcontainer' key={bolly}>
                <img className='himg2' src={data.image} alt='Not Found'/>
                <div className='title1'>
                <h3>The Sound cloud 
                You loved is doomed
                </h3>
                <p>{data.date}</p>
                </div>
                <div className='title2'>
                <h3>The Sound cloud 
                You loved is doomed
                </h3>
                <p>{data.date}</p>
                </div>
                </div>
              
            )
        })
      }
</div>
</div>
<h1 className='b2'>The Latest</h1>
<div className='hmain2'>
<div> 
        {DData.filter((item)=>  (item.id===63)  ).map((data,home)=>{
        return(
          <div>
             <div   key={home}>
                <img className='himg3' src={data.image} alt='Not Found'/>
                </div>
                <div className='hdsc'>
                <h3>{data.Heading}</h3>
                <p className='hds'>{data.description}</p>
                <p className='ds'>{data.date}</p>
                </div>
          </div>
        )
      })

      }
        </div>
        <div>
        {DData.filter((item)=> (item.id===48) ).map((data,home)=>{
        return(
          <div>
             <div   key={home}>
                <img className='himg3' src={data.image} alt='Not Found'/>
                </div>
                <div className='hdsc'>
                <h3>{data.Heading}</h3>
                <p className='hds'>{data.description}</p>
                <p className='ds'>{data.date}</p>
                </div>
          </div>
        )
      })

      }
        </div>
        <div>
        {DData.filter((item)=> (item.id===17)).map((data,home)=>{
        return(
          <div>
             <div   key={home}>
                <img className='himg3' src={data.image} alt='Not Found'/>
                </div>
                <div className='hdsc'>
                <h3>{data.Heading}</h3>
                <p className='hds'>{data.description}</p>
                <p className='ds'>{data.date}</p>
                </div>
          </div>
        )
      })

      }
        </div>

</div>
<h1 className='b2'>Latest Article</h1>
<div className='hmain3'>
<div className='hmain31'> 
<div className='hmain311 latesArticle'> 
<p><img  src={arrowr}/><span className='dm'> Load More</span></p>  
{DData.filter((item)=>((item.cat==='Hollywood') && (item.id>=26))).map((data,holly)=>{
            return(
                <>
              
                <div className='bcontainer1' key={holly}>
                  <div >
                <img className='himg5' src={data.image} alt='Not Found'/>
                </div>
                <div className='dsc1'>
           <h3 >{data.Heading}</h3>
                <p className='ds1'>{data.description}</p>
                </div>
                </div>
                </>
            )
        })
      }
  
</div>

<h1  className='b1'>Top Posts</h1>
<div className='hmain312'>
{DData.filter(((item)=>(item.id===27))).map((data)=>{
            return(
                <>            
                <img className='himg6' src={data.image} alt='Not Found'/>
                </>
            )
        })
      }
   </div>
 
</div>
<div className='hmain32'>
  <div className='Adds'>
 Advertisement
 
  </div>
  <div className='hmain322'>
    <div>
    {DData.filter((item)=>(item.id===5)).map((data,bolly)=>{
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
    </div>
    <div>
    {
  DData.filter((item)=>item.id===39).map((data,ind)=>{
    return(
     
      <div className='shorthome' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>2</span>
                </div>
      </div>
    )
   

  })
}
    </div>
    <hr className='hrhome'/>
    <div>
    {
  DData.filter((item)=>item.id===61).map((data,ind)=>{
    return(
     
      <div className='shorthome' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>3</span>
                </div>
      </div>
    )
   

  })
}
    </div>
    <hr/>
    <div>
    {
  DData.filter((item)=>item.id===19).map((data,ind)=>{
    return(
     
      <div className='shorthome' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>4</span>
                </div>
      </div>
    )
   

  })
}
    </div>
 
  </div>
   </div>
</div>
<h1  className='b2 b3'>Latest Stories</h1>
<hr className='hstories'/>
<div className='hmain4'>
  <div className='hmain41'> 
  {DData.filter((item)=> (item.id===12) ).map((data,home)=>{
        return(
          <div className='p1' key={home}>
             
                <div className='lts'>
                <h3 className='lts1'>{data.Heading}</h3>
                <p className='storeids'>{data.description}</p>
                <span className='ds'>{data.date}</span>
                </div>
          </div>
        )
      })

      }
  </div>
  <hr/>
  <div className='hmain42'>{DData.filter((item)=> (item.id===61) ).map((data,home)=>{
        return(
          <div className='p1' key={home}>
             
                <div className='lts'>
                <h3 className='lts1'>{data.Heading}</h3>
                <p className='storeids'>{data.description}</p>
                <span className='ds'>{data.date}</span>
                </div>
          </div>
        )
      })

      } </div>
      <hr/>
  <div className='hmain43'> 
  {DData.filter((item)=> (item.id===42) ).map((data,home)=>{
        return(
          <div className='p1' key={home}>
             
                <div className='lts'>
                <h3 className='lts1'>{data.Heading}</h3>
                <p className='storeids'>{data.description}</p>
                <span className='ds'>{data.date}</span>
                </div>
          </div>
        )
      })

      }</div>

</div>
<hr className='hstories'/>
<p className='view'>View More<img src={arrowl}/> </p>
    </div>
    </>
  )
}

export default Home