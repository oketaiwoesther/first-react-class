// import logo from './logo.svg';
import './App.css';
import Dynamic from "./component/Dynamic";
import Click from './component/Click';
import Hooks from "./component/Hooks"
import List from './component/List';
import './style/List.css'
import Newlist from "./component/Newlist";
import Counter from './component/Counter';
import Parent from './component/Parent';
import Props from './component/Props'
import Conditional from './component/Conditional';
import Shape from './component/Shape';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product'
import Footer from './component/NavRouter'
import NavRouter from './component/NavRouter'
import Error from './component/Error'
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavRouter/>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path='About' element ={<About/>}/>
        <Route path='Products' element ={<Product/>}/>
        <Route path="*" element={<Error/>}/>

      </Routes>
      <Footer/>
      <Conditional/>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     {/* <Dynamic/>
     <Click/>
     <Hooks/> */}
     {/* <List/>
    <Newlist/>
    <Counter/> */}
    {/* <Parent/> */}
    {/* <Props/>
    <Conditional/>
    <Shape/> */}
    </div>
  );
}

export default App;
