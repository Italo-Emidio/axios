import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useEffect(()=>{
    console.log('chamei o effect')

    fetch('https://api.discogs.com/release/19132')
    
    const realizarRequest = async () =>{
      try{
        const rest1 = await fetch('https://api.discogs.com/release/19132')
        const rest2 = await rest1.json()
        console.log(res2)
      }catch (erro) {
        console.log(erro)
      }
    }

    realizarRequest ()

  }, [])

  return <div>
    <div>imagem</div>
    <div>título</div>
    <div>artista</div>
    <div>
      <div>tag 1</div>
      <div>tag 2</div>
    </div>
  </div>
}

export default App