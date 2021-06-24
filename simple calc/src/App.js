import { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
const App= ()=>{
      var i=0;
      var ls=[];
      useEffect(()=>{
        axios.get("https://api.first.org/data/v1/countries")
        .then((res)=>{
          //console.log(JSON.stringify(res.data.data));
        
          var fet=Object.keys(res.data.data).map(key => res.data.data[key]["country"]);
          console.log(Object.keys(res.data.data).map(key => res.data.data[key]["country"]));          

          fet?.map(a=>{
            setText(a);
            console.log("jjj");
            console.log(a);
          });
        })
        .catch((err)=>{
          console.log(err);
        })
      });
      
      const [text,setText]=useState(0); 

    return(
      <div className="container">
        {text}
      </div>
    );
  };

export default App;
