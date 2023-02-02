import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import SpDetailContainer from './containers/SpDetailContainer';

function App(){
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/special/:no' element={<SpDetailContainer/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
