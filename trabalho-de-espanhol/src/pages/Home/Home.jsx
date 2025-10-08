import React from 'react'
import Rodape from '../../layout/Rodape/Rodape'

function Home() {
  return (
    <div className='flext-col '>
      <h1 className='text-white text-4xl pl-4 pt-4 mb-4'>Guiné Equatorial</h1>
      <hr className='ml-5 mr-4 text-white'/> 
      <div className="flex">
      <p className='text-clip m-5 text-white text-3xl text-center'>
      Apesar de um verniz de cultura espanhola e de religião católica romana mais denso em Bioko do que no continente, muitos guineenses equatoriais vivem de acordo com costumes ancestrais, que passaram por um renascimento desde a independência. Entre os fang do continente, a bruxaria, a música tradicional (na qual se utilizam a harpa fang, o xilofone, os grandes tambores e a trombeta de madeira) e a narração de histórias sobrevivem. Entre os agricultores bubi de Bioko, alguns costumes ancestrais também são seguidos.
      </p>
      <img src="../public/guineEquatorial.png" alt="" className='p-4 w-1000'/>
      </div>
      
      <footer>
        <Rodape />
      </footer>
    </div>  
  )
}

export default Home
