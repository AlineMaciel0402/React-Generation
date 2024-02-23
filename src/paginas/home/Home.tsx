import React from 'react';
import homeLogo from '../../assets/img/alinepessoal.jpg';
import './Home.css';
import ListaPostagens from '../../components/postagem/listaPostagem/ListaPostagens';
import ModalPostagem from '../../components/postagem/modalPostagem/ModalPostagem';



function Home() {
  return (
      <>
      <div className="bg-red-200 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem-vindo!</h2>
            <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
            <ModalPostagem />
            <button className='rounded bg-white text-pink-900 py-2 px-4'>Ver postagens</button>
          </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
    
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;