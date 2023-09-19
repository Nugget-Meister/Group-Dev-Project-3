import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageResult from './components/common/ImageResult';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import ImageDetails from './components/ImageDetails/ImageDetails';
import Results from './components/Results/Results';
import About from './components/About';
import NavBar from "./components/common/NavBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [searchResult, updateSearchResult] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (photoId) => {
    const updatedFavorites = favorites.map((photo) =>
      photo.id === photoId ? { ...photo, favorite: !photo.favorite } : photo
    );
    setFavorites(updatedFavorites);
  };

  return (
    <div className='wrapper'>
      <NavBar />
      <Router>
        <main>
          <Routes>
            <Route
              path='/'
              element={<Home updateSearchResult={updateSearchResult} />}
            />
            <Route path='/about' element={<About />} />
            <Route
              path='/favorites'
              element={<Favorites favorites={favorites} handleFavorite={handleFavorite} />}
            />
            <Route path='/imagedetails/:id' element={<ImageDetails />} />
            <Route path='/imageresult' element={<ImageResult />} />
            <Route
              path='/search/:query'
              element={<Results searchResult={searchResult} />}
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
