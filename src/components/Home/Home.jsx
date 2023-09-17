import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/src/assets/vite.svg";

import { departments } from "../common/departmentlist";
import { searchRequest } from "../common/apicalls";

const Home = () => {


  const [query, setQuery] = useState({
    departmentId: null,
    text: "",
  });

  // Handles the number of categories on screen
  const [categoryNum, setCategoryNum] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.department.value, e.target.text.value);
  };

  const resetForm = () => {
    setCategoryNum(1)
  }
  const setChanged = (e) => {
    setQuery(e.target.value);
  };

  const handleCategories = (amount) => {

    const newCategory = (num) => {
        return (
            <select key={`department${num}`} id={`department${num}`}>
                <option key={`0-${num}`} value="0">-None-</option>
                {
                    departments.map((department) => {
                        return (
                            <option 
                                value={department.departmentId}
                                key={department.departmentId}
                                >{department.displayName}</option>)
                    }
                 )}
            </select>
        );
      };


    const categories = []
    for (let i = 0; i < amount; i++) {
        categories.push(newCategory(i))
    }

    return categories

  }


  // Creates singular new category, belongs to handleCate



  
  return (
    <div id="home">
      <form onSubmit={() => handleSubmit}>
        <input type="text" id="text" value={query.text} onChange={setChanged} />
        {handleCategories(categoryNum)}
        {categoryNum < 3 ? <button type="button" onClick={() => setCategoryNum(categoryNum+1)}>+</button>: null}
        {categoryNum > 1 ? <button type="button" onClick={() => setCategoryNum(categoryNum-1)}>-</button>: null}
        <button type="submit">Search</button>
        <button type="reset" onClick={() => resetForm()}>Reset</button>
      </form>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Home;
