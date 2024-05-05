import React from 'react'

const Main = (props:any) => {

  const { data } = props

  console.log(data)

  return (
    <div className="imageContainer">
        <img src={data.hdurl} alt={data.title || 'bg-image'} className="bgImage"/>
    </div>
  )
}

export default Main