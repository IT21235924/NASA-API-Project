
function Mpart(props:any) {
 
  const {data} = props

  return (
    <div className="imageContainer">
      <img src={data.hdurl} alt={data?.title || 'bg-image'} className="bgImage"/>
    </div>
  )
}

export default Mpart