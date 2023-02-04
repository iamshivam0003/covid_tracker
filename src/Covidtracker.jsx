import React, { useEffect, useState } from "react";

const Covidtracker=()=>{
  const [data,setdata]=useState([]);
  const getcoviddata= async () =>{
    const res= await fetch('https://data.covid19india.org/data.json');
    const actualdata = await res.json();
    // console.log(actualdata.statewise);
    setdata(actualdata.statewise);
    
  }
 useEffect(()=>{
  getcoviddata();
 },[])
    return(
        <>
        <h1> Covid Tracker !</h1>
        <table>
        <thead>
        <tr style={{fontWeight:'bold',fontSize:'20px'}}>
            <td>STATE</td> 
            <td>CONFIRMED</td>  
            <td>RECOVERED</td> 
            <td>DEATHS</td>  
            <td>ACTIVE</td> 
            <td>LAST UPDATED</td>      
          </tr>
        </thead>   
        <tbody>
         {
            data.map((curele,ind)=>{
              return(
               
                <tr key={ind}>
            <td>{curele.state}</td>
            <td>{curele.confirmed}</td>
            <td>{curele.recovered}</td>
            <td>{curele.deaths}</td>
            <td>{curele.active}</td>
            <td>{curele.lastupdatedtime}</td>
          </tr>
              )
            })
         }
        </tbody>
        </table>
        </>
    );
}
export default Covidtracker;