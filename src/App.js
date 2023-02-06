import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';
import SpDetailContainer from './containers/SpDetailContainer';
import SpecialContainer from './containers/SpecialContainer';
import JoinPage from './pages/member/JoinPage';
import Login from './pages/member/Login';

function App(){
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/special' 
        element={<SpecialContainer isMain={false}/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/special/:no' element={<SpDetailContainer/>}/>
        <Route path='/join' element={<JoinPage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
