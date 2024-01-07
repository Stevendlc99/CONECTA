import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListAutosComponent from './components/ListAutosComponent';
import AddAutoComponent from './components/AddAutoComponent';
import NoCirculaComponent from './components/NoCirculaComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent />
      <div className='container'>
        <Routes>
          <Route exact path='/list-autos' element={<ListAutosComponent />}></Route>
          <Route path='/autos' element={<ListAutosComponent />}></Route>
          <Route path='/' element={<AddAutoComponent />}></Route>
          <Route path='/consultar-autos' element={<NoCirculaComponent />}></Route>
        </Routes>
      </div>
      <FooterComponent/>
    </BrowserRouter>  
    </div>
  );
}

export default App;
