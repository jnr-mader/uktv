import { useState } from "react";
import { starWarsData } from "./apiServices";

import "./App.css";
import { Starships, Films, Vehicles } from "./interfaces";
import { allowedSearchValuesTypes } from "./types";
import Card from "./components/card";
import TransportCard from "./components/transportCard";

function App() {
  const [transportData, setTransportsData] = useState<Starships[] | Vehicles[]>([]);
  const [data, setData] = useState<Films[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  const [userMsg, setUserMsg] = useState<string>("Please search with one of the following phrases, Starships, Films or Vehicles")
  const allowedSearchValues: allowedSearchValuesTypes[] = [
    { type: "starships", template: "transport"},
    { type: "films", template: "films"},
    { type: "vehicles", template: "transport"},
  ];

  async function fetchTransportData(data: any) {
    try {
      const result = await starWarsData(data);
      setTransportsData(result.results);
      console.log(result.results)
      setUserMsg("Thank you, your results are below")
    } catch (error) {
      setUserMsg("Sorry there was an error fetching your data")
      console.error("Error fetching data:", error);
    }
  }

  async function fetchData(data: any) {
    try {
      const result = await starWarsData(data);
      setData(result.results);
      setUserMsg("Thank you, your results are below")
    } catch (error) {
      setUserMsg("Sorry there was an error fetching your data")
      console.error("Error fetching data:", error);
    }
  }

  function handleSearch() {
    let inputValue = searchItem.toLowerCase();
    setTransportsData([])
    setData([])
    allowedSearchValues.forEach((ele, i) => {      
      if (ele.type === inputValue) {
        if(ele.template === "films"){
          fetchData(ele.type);
        }else{
          fetchTransportData(ele.type);
        } 
      }
    });
  }

  function updateSearchValue(e: any) {
    setSearchItem(e.target.value);
  }

  function orderList(){
    const copyArray = [...data]; 

    copyArray.sort((a, b) => {
      if (a.title > b.title) {
        return 1
      } else if (a.title < b.title) {
        return -1
      } else {
        return 0
      }
    });
    setData(copyArray)
  }
  
  return (
    <div className="App">      
      <div className="appTitle">
        <h1>StarWars Api</h1>
        <p>{userMsg}</p>
      </div> 
      <div className="searchBlock">
        <input
          value={searchItem}
          onChange={updateSearchValue}
          placeholder="Search for Starships, Vehicles or Films"
        />
        <button onClick={handleSearch}>click here</button>
      </div>           
      {data ? (
        <div className="card-wrapper">
          <button onClick={orderList}>Sort data</button>          
          {data.map((item) => (
            <Card 
              key={item.created}
              title={item.title}
              episode_id={item.episode_id}
              opening_crawl={item.opening_crawl}
              director={item.director}
              producer={item.producer}
              release_date={item.release_date}
            />    
          ))}          
        </div>
      ) : (
        <p>Loading...</p>
      )} 

      {transportData ? (
        <div className="card-wrapper">                
            {transportData.map((item) => (
              <TransportCard 
                key={item.created} 
                name={item.name} 
                model={item.model} 
                manufacturer={item.manufacturer} 
                cost_in_credits={item.cost_in_credits} 
                length={item.length} 
                crew={item.crew} 
                passengers={item.passengers} 
                cargo_capacity={item.cargo_capacity} 
                created={item.created} 
              />
            ))}          
        </div>
      ) : (
        <p>Loading...</p>
      )}            
    </div>
  );
}

export default App;
