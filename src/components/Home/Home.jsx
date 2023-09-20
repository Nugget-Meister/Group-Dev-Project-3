
import { useState } from "react";
import reactLogo from "/src/assets/react.svg";
import viteLogo from "/src/assets/vite.svg";


import { searchRequest } from "../common/apicalls";
import { useNavigate } from "react-router";
import {Link} from "react-router-dom"

import { departments } from "../common/departmentlist";
import { chicagoMuseumDepartments } from "../common/chicagoMuseum/departmentlist";

const Home = ({updateSearchResult}) => {

    const navigate = useNavigate()
    
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
    const {text,department1,department2,department3} = {...query}
    const concatLink = `${text}${department1?`~${department1}`:''}${department2?`~${department2}`:''}${department3?`~${department3}`:''}`
    console.log(concatLink)
    // searchRequest(query)
    // .then(res => updateSearchResult(res))
    // .then(() => navigate(`/search/${concatLink}`))
    navigate(`/search/${concatLink}`)

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


const handleCategories_Chicago = (amount) => {

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
                        chicagoMuseumDepartments.data.map((department) => {
                            return (
                                <option 
                                    value={department.id}
                                    key={department.tId}
                                    >{department.title}</option>)
                        })
                    }
                    
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
        {handleCategories_Chicago(categoryNum)}
        {categoryNum < 3 ? <button type="button" onClick={() => updateCategoryNum(categoryNum+1)}>+</button>: null}
        {categoryNum > 1 ? <button type="button" onClick={() => updateCategoryNum(categoryNum-1)}>-</button>: null}
        <br />
        <button type="submit">Search</button>
        <button type="reset" onClick={() => resetForm()}>Reset</button>
      </form>
    </div>
  );
};

export default Home;
