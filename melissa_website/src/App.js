import { useState } from 'react';
import './App.css';
import Head from './Head/Head'
import NavBar from './Head/NavBar';
import ContentHandler from './ContentHandler';
import pages from './PagesInfo';
import Footer from './Footer';

export default function App() {

  const [currentPage, setPage] = useState(pages.Home)

  return (
    <div className='app'>
      <Head />
      <NavBar currentPage={currentPage} setPage={setPage}/>
      <ContentHandler currentPage={currentPage} />
      <Footer />
    </div>
  );
}

