import './App.css';
import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Search from './components/Search'
import ProductList from './components/ProductList'
import Basket from './components/Basket'
import About from './pages/About'
import data from './models/data.json';

const [items, setItems] = useState(data);
const [basket, setBasket] = useState([]);
const [term, setTerm] = useState('');
const [total, setTotal] = useState(0);
const [products, setProducts] = useState(data);

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://imusicstore.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
         View Example Mediastore App
        </a>
      </header>
    </div>
  );
}
const addToBasket = (id) => {
  setBasket(basket.concat(items.filter(item => item.trackId === id)));
  setItems([...items.map(item => {
    if (item.trackId === id) {
      item.inBasket = true;
      setTotal(total + item.trackPrice);
    }
    return item;
    console.log(addToBasket);
  }
  )]);
}

const removeFromBasket = (id) => {
  setBasket(basket.filter(item => item.trackId !== id));
  setItems([...items.map(item => {
    if (item.trackId === id) {
      item.inBasket = false;
      setTotal(total - item.trackPrice);
    }
    return item;
    console.log(removeFromBasket);
  }
  )]);
}


async function search(value) {
  const results = await fetch(`https://itunes.apple.com/search?term=${value}&limit=50&explicit=no`).then(res => res.json());
  if (!results.error) {
    setItems(results.results.filter(result => result.trackName && basket.findIndex(item => result.id === item.trackId)===-1));
  }
}
useEffect(() => {
  let basketCountLabel = `Basket: ${basket.length} item` + (basket.length===1?"":"s");
  document.title = basketCountLabel;
  document.getElementById("basketlink").innerText = basketCountLabel;
}
function Home() {
return (
  <Casing>
    <Search term={term} setTerm={setTerm} search={search} />
    <ProductList 
    items={products}
    addToBasket={addToBasket}
    removeFromBasket={removeFromBasket}
    itemCount={data.length}
    />
  </Casing>
)
return (
  // <Router>
  //   <div className="container">
  //     <Routes>
  //       <Route exact path="/" element={
  //         <Fragment>
  //           <Header />
  //           <Search term={term} search={search} setTerm={setTerm}/>
  //           <ProductList items={items} addToBasket={addToBasket} removeFromBasket={removeFromBasket} itemCount={items.length} />
  //         </Fragment>
  //       } />
  //       <Route path="/basket" element={
  //         <Fragment>
  //           <Header />
  //           <Basket basket={basket} addToBasket={addToBasket} removeFromBasket={removeFromBasket} basketTotal={total} />
  //         </Fragment>
  //       } />
  //       <Route path="/about" element={ <About />} />
  //     </Routes>
  //   </div>
  // </Router>
  <Router>
 <div className="App">
 <Header itemCount={count} />
 <Routes>
 <Route index path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/basket" element={<BasketList />} />
 </Routes>
 </div>
  </Router>
 
)}





  
export default App;
