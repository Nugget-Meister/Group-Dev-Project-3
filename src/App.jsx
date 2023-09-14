import {BrowserRouter as Router, Route, Routes} from react-router-dom

import Home from './components/Home/Home'
import Favorites from './components/Favorites/Favorites'
import ImageDetails from './components/ImageDetails/ImageDetails'
import Results from './components/Results/Results'

import './App.css'

function App() {

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
