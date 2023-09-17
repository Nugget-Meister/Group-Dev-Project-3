import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Favorites from './components/Favorites/Favorites'
import ImageDetails from './components/ImageDetails/ImageDetails'
import Results from './components/Results/Results'
import { AboutSpecificPerson } from './src/components/AboutSpecificPerson.jsx';
// import AboutSpecificPerson from './components/AboutSpecificPerson.jsx'
import './App.css'

function App() {
  useEffect(() => {
    AboutSpecificPerson();
}, []); 

  return (
  
      <div className='wrapper'>
        <Router>
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/imagedetails/:id' element={<ImageDetails/>}/>
              <Route path='/search/:query' element={<Home/>}/>

            </Routes>
          </main>
        </Router>
      </div>
    
  )
}

export default App
