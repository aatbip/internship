import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  //to include side effects in the component
  const [loading, isLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const [clear, setClear] = React.useState(false);

  const getData = () => {
    try {
      isLoading(true);
      const res = await axios.get("https://randomuser.me/api/");
      setData(res.data.results);
      isLoading(false);
    } catch (e) {
      console.log(e);
    }
   

  };
  
  React.useEffect(() => { 
    let res = setInterval(getData, 10);

    return () => {
      clearInterval(res);
    };
  }, []);

  return (
    <div className="container">
      <h1 onClick={() => setClear(true)}>hi</h1>
    </div>
  );
}

export default App;
