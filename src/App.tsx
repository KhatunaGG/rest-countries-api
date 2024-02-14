
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Root from './pages/Root'
import { useState, useEffect } from "react"
import axios from 'axios'
import { ICountries } from "./interfaces"
import Countries from './pages/Country'

// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { ICountries } from './interfaces'


function App() {

  const [data, setData] = useState<ICountries[]>([])
  
  
    useEffect(() => {
      axios.get('https://restcountries.com/v2/all')
        .then(res => {
          setData(res.data)
        })
  
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  
    }, [])




  const router = createBrowserRouter((
    createRoutesFromElements(
      <Route path='/' element={<Root  />}>
        <Route index element={<Home data={data} />} />
        <Route path='/:name' element={<Countries data={data} />} />
   

      </Route>
    )
  ))



  return (
    <>
      <RouterProvider router={router}>


      </RouterProvider>

      

    </>
  )
}

export default App
