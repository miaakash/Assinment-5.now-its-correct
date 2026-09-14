
import { Suspense } from 'react';
import Hero from './components/Hero'
import Nav from './components/Nav'

import type { ITechnologyType } from './types/type';
import Technology from './technologys/Technology';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';


function App() {

  const technologiesFetch = async () => {

    const response =  await fetch('/technology.json');
    const data = await response.json();
    return data ;
  }

 
  const technologyPromise  : Promise<ITechnologyType[]> = technologiesFetch() ;
  // console.log(technologyPromise);
  
  return (
    <>
     <Nav></Nav>
      <Hero></Hero>

      
    </>
  )
}

export default App