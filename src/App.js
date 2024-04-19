import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Pages/Main';
import products from './data/product.json';

const App = () => {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setInput(searchTerm);
    const results = products.products.filter(product =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  useEffect(() => {
    console.log(products); // Log the products array to the console
  }, []);

  return (
    <div>
      <Header handleSearch={handleSearch} input={input}/>
      <Main products={searchResults}/>
    </div>
  )
}

export default App;
