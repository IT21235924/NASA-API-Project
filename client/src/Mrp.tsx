import { useEffect, useState } from "react"
import Fpart from "./components/MRP/Fpart"
import Mpart from "./components/MRP/Mpart"
import Spart from "./components/MRP/Spart"

function Mrp() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {
      
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      // const today = (new Date()).toDateString()
      // const localKey = `NASA-${today}`
      // if (localStorage.getItem(localKey)) {
      //   const apiData = JSON.parse(localStorage.getItem(localKey))
      //   // const apiData = JSON.parse(localStorage.getItem(localKey) || "");
      //   setData(apiData)
      //   console.log('Fetched from cache today')
      //   return
      // }
      // localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        // localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
        console.log('DATA\n', apiData)
      } catch (error:any) {
        console.log(error.message)
      }
    }
    fetchAPIData()
  }, [])
  return (
    <>
    <div className="bodyRoot">
    {data ? (<Mpart data={data} />) : (
      <div className="loadingState">
        <i className="fa-solid fa-sun"></i>
      </div>
    )}
    {showModal && (
      <Spart data={data} handleToggleModal={handleToggleModal}/>
    )}
    {data && (
      <Fpart data={data} handleToggleModal={handleToggleModal}/>
    )}
    </div>
    </>
  )
}

export default Mrp