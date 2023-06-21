import CardList from "../components/Card-list";
import apiResponse from '../templates/apiResponse.json'
import axios from 'axios'
import { useState, useEffect } from "react";

export default function Home(){

  const [arreglo, setArreglo] = useState([])

  useEffect(()=>{
    fetchAPI()
  },[])

  const datos = apiResponse
  const ENDPOINT = 'http://localhost:8000/'

  function fetchAPI(){
    axios.get(ENDPOINT+'api/products/',{
      headers: { 'Content-Type': 'application/json'}
    })
      .then(response => response.data)
      .then(response => setArreglo(response))
  }

  return(
  <>
    <button onClick={ fetchAPI }>Fetch api</button>
    <CardList data={arreglo}/>
  </>
  )
}