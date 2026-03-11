import { Route, Routes } from 'react-router-dom';
import './App.css'
import CreateUserCard from './components/createUserCard';
import MainCardComponent from './components/mainCard';
import UpdateUserCard from './components/updtaeUserCard';


const App = () => {

  return (

    <Routes>

        <Route path = '/' element = { <MainCardComponent/> } />

        <Route path = '/create' element = { <CreateUserCard/> } />
 
        <Route path = '/update/:id' element = { <UpdateUserCard/> } />

    </Routes>

  )

}

export default App;