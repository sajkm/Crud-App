
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Nav/Header';
import Contactlist from './Components/Contactlist';
import AddContact from './Components/AddContact';
import Footer from './Nav/Footer'


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contactlist'}/>}/>
        <Route path={'/contactlist'} element={<Contactlist/>}/>
        <Route path={'/addcontact'} element={<AddContact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
