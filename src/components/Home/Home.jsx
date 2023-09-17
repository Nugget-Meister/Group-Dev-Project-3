import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/src/assets/vite.svg";

import { departments } from "../common/departmentlist";
import { searchRequest } from "../common/apicalls";

const Home = () => {


  const [query, setQuery] = useState({
      text: "",
      department1: '',
      department2: '',
      department3: ''
  });

  // Handles the number of categories on screen
  const [categoryNum, setCategoryNum] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(query);
    searchRequest(query)
  };

  const resetForm = () => {
    setCategoryNum(1)
  }
  const setChanged = (e) => {
    // console.log(e.target.value)
    setQuery({...query, [e.target.id]: e.target.value});
  };

 

  const handleCategories = (amount) => {

    const newCategory = (num) => {
        return (
            <div key={`divdepartment${num}`} >
                <select required 
                    key={`department${num}`} 
                    id={`department${num}`}
                    value={query[`department${num}`]}
                    onChange={setChanged}
                    >
                    <option key={`0-${num}`} value="">-None-</option>
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
            </div>
        );
      };


    const categories = []
    for (let i = 1; i <= amount; i++) {
        categories.push(newCategory(i))
    }

    return categories

  }


  const updateCategoryNum = (num) => {
    setCategoryNum(num)
    if (num == 2){
        setQuery({...query,
        department3: ''})
    }
    if (num == 1){
        setQuery({...query, department2: '',
        department3: ''})
    }
  }

  
  return (
    <div id="home">
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            id="text" 
            minLength="3"
            value={query.text} 
            onChange={setChanged} />
        <br />
        {handleCategories(categoryNum)}
        {categoryNum < 3 ? <button type="button" onClick={() => updateCategoryNum(categoryNum+1)}>+</button>: null}
        {categoryNum > 1 ? <button type="button" onClick={() => updateCategoryNum(categoryNum-1)}>-</button>: null}
        <br />
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
