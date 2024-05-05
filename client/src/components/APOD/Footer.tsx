import React from 'react'

const  Footer = (props:any) => {

  const {showModel, handleToggleModel, data} = props

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>NASA API Project</h1>
        <h2>{data?.title}</h2>
      </div>

      <button onClick={handleToggleModel}>
        <i className="fa-solid fa-circle-info"></i>
      </button>

    </footer>
  )
}

export default Footer