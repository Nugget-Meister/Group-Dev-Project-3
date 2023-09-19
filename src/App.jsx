
import {useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ImageResult from './components/common/ImageResult'

import Home from './components/Home/Home'
import Favorites from './components/Favorites/Favorites'
import ImageDetails from './components/ImageDetails/ImageDetails'
import Results from './components/Results/Results'


import About from './components/About';
import NavBar from "./components/common/NavBar";


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [searchResult, updateSearchResult] = useState([])
  const [savedFavorites, updateSavedFavorites] = useState({})
  
  const handleFavorite = (id) => {
    console.log("favorites:",savedFavorites.id)
    if(savedFavorites[id]){
      console.log("toggle")
      updateSavedFavorites({...savedFavorites, [id]: !savedFavorites[id]})
    } 
    else {
      console.log("add")
      updateSavedFavorites({...savedFavorites, [id]: true})
    }
  };

  // useEffect(()=> {
  //   console.log(savedFavorites,)
  // }, [savedFavorites])


  return (
  
      <div className='wrapper'>
        <Router>
        <NavBar />
           <main>
             <Routes>
               <Route path='/' element={<Home
                updateSearchResult={updateSearchResult}  
               />}/>
               <Route path='/search' element={<Home
                  updateSearchResult={updateSearchResult}
               />}/>
               <Route path='/about' element={<About />} />
               <Route path='/favorites' element=
                  {<Favorites 
                      savedFavorites={savedFavorites}
                      updateSavedFavorites={updateSavedFavorites}
                      handleFavorite={handleFavorite}
                      />}/>
               <Route path='/search/:query' element={<Results
                  searchResult={searchResult}
                  savedFavorites={savedFavorites}
                  handleFavorite={handleFavorite}
                  updateSavedFavorites={updateSavedFavorites}
                />}/>
               <Route path='/imagedetails/:id' element={<ImageDetails/>}/>
            </Routes>
           </main>
        </Router>
      </div>
    
  )

}

export default App;
