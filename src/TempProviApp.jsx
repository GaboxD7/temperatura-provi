

import { useEffect, useState } from 'react'
import './App.css'
import { getCityWheather } from './services/wheather'

function TempProviApp () {
const [wheather, setWheather] = useState('')
  useEffect(() => {
   
  ( async () => {
  const temp = await getCityWheather('Santiago')
 const {main} = temp
  console.log(temp)
  console.log(main)
  setWheather(main.temp)
  
})()
 }, [])
 console.log(wheather)
getCityWheather()
  return (
    <div className="App">
      <div className='container-logo'>
         <img className='logo-provi' logo src='../public/provi.svg' alt="" />
      </div>
      <div className='container-temp'>

        <div className='container-grados'>
         {`${wheather ? wheather : '00:00' } `}
        </div>
        <h1>Temperatura</h1>
      </div>
    </div>
  )
}

export default TempProviApp
