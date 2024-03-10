import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import './App.css'

function App() {

  return (
    <>
      <Navbar/>

      <h1 style={{textAlign:'center'}}>Deals of the day at flipkart</h1>
        <div className="card-container">
          <Cards title="Product1" imgsrc="https://imagescdn.planetfashion.in/img/app/product/7/785416-9136818.jpg?auto=format&w=494.40000000000003" price="$Price" description="This area to write description of the product"/>

          <Cards title="Product2" imgsrc="https://imagescdn.planetfashion.in/img/app/product/7/785416-9136818.jpg?auto=format&w=494.40000000000003" price="$Price" description="This area to write description of the product"/>

          <Cards title="Product3" imgsrc="https://imagescdn.planetfashion.in/img/app/product/7/785416-9136818.jpg?auto=format&w=494.40000000000003" price="$Price" description="This area to write description of the product"/>

          <Cards title="Product4" imgsrc="https://imagescdn.planetfashion.in/img/app/product/7/785416-9136818.jpg?auto=format&w=494.40000000000003" price="$Price" description="This area to write description of the product"/>

        </div>
      <Footer/>
    </>
  )
}

export default App
