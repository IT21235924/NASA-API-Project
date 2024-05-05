
function Fpart(props:any) {

  const { showModal, handleToggleModal, data} = props

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>NASA API Project</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  )
}

export default Fpart