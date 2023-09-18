import { useState } from 'react';
import Head from './Head/Head'
import NavBar from './Head/NavBar';
import ContentHandler from './ContentHandler';
import pages from './PagesInfo';
import Footer from './Footer';

export default function App() {

  const [currentPage, setPage] = useState(pages.Home)

  return (
    <div className="w-[50%] max-w-[50%]">
      <Head />
      <NavBar currentPage={currentPage} setPage={setPage}/>
      <ContentHandler currentPage={currentPage} />
      <Footer />
    </div>
  );
}

