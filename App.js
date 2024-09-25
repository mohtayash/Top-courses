import React, { useEffect, useState } from "react";
import { filterData,apiUrl } from "./data";
import { Filter } from "./Components/Filter";
import { Navbar } from "./Components/Navbar";
import { Cards } from "./Components/Cards";
import { toast } from "react-toastify";
import { Spinner } from "./Components/Spinner";

const App = () => {

  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title);

 
    async function fetchData(){
      setLoading(true);
      try{
        let res=await fetch(apiUrl);
        let output=await res.json();
        //save data
        setCourses(output.data);
      }
      catch(error){
        toast.error("something wents wrong");
      }
      setLoading(false);
    }
    
    useEffect(()=>{
      fetchData();
    },[])


  return (
    <div className="min-h-screen flex flex-col bg-zinc-600">
      <div>
      <Navbar/>
      </div>
      <div>
      <Filter  filterData={filterData}
      category={category}
      setCategory={setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>):(<Cards courses={courses} category={category}/>)
        }
      </div>

      

    </div>
  )
};

export default App;
