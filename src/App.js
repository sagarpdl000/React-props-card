import './App.css';
import Card from './Components/Card';
import product from './Components/Product';


function App() {
  return (
    <div className="App">
      
      <Card
      imgsrc ={product[0].imgsrc}
      product = {product[0].product_name}
      product_price = {product[0].product_price}
      />

      <Card
      imgsrc ={product[1].imgsrc}
      product = {product[1].product_name}
      product_price = {product[1].product_price}
      />

      <Card
      imgsrc ={product[0].imgsrc}
      product = {product[0].product_name}
      product_price = {product[0].product_price}
      />

    <Card
      imgsrc ={product[0].imgsrc}
      product = {product[0].product_name}
      product_price = {product[0].product_price}
      />

    </div>

  );
}

export default App;
