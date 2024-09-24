import React from 'react'
import experiance from './data/experiance.json'

const Experiance = () => {
  return (
    <>
    <div className='container ex' id='experiance'>
    <h1>EXPERIANCE</h1>
    {
      experiance.map((data)=>{
        return(
          <>
          <div key={data.id} className='ex-items text-center my-5' data-aos="zoom-in"
          data-aos-duration="1000">
          <div className='left'>
          <img src={`/assets/${data.imageSrc}`} alt=""/>
          </div>
          <div className='right'>
          <h2>{data.role}</h2>
          <h4>
          <span style={{color:'yellowgreen'}}> {data.startDate}
         {" "}{data.endDate}</span>{" "}<span style={{color:'yellow'}}>{data.location}</span></h4>
          <h5 style={{color:'yellow'}}>{data.experiance[0]}</h5>
          <h5 style={{color:'yellow'}}>{data.experiance[1]}</h5>
          </div>
          </div>
          </>
        )
       
      })
    }
    </div>
    </>
  )
}

export default Experiance