import { useState } from 'react'
import ProfileCard from './ProfileCard'
import './App.css'


function App() {

const [usuario,setUsuario] = useState({nombre: "Juan", edad: 34, hobby:"futbol"})
  return (
    <>
      <ProfileCard usuario={usuario}/>
    </>
  )
}

export default App

 //[{nombre: "Juan", edad: 34, hobby:"futbol"}, {nombre:"Carlos", edad:24, hobby:"Leer"}])
//usuario.map((usuario)=> <usuario usuario ={usuario}/>) // Para cuando se quiere mostrar todo lo de una lista
