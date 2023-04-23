import './App.css';
import axios from "axios";
import Searchbar from "./components/Searchbar"
import Addcard from "./components/Addcard"
import { useState } from 'react';
function App() {
  const [displaydata, setDisplayedata] = useState([])

  const fetchData = (keyword) => {

    var payload = { "keyword": keyword }
    // console.log('keyword is', payload)
    var options = {
      "method": "POST",
      "headers": { 'Contet-Type': 'Application/json', 'Accept': 'application/json' },
      "body": JSON.stringify(payload)
    }
    console.log('Calling fetch', options.body)
    const baseURL = "http://192.168.31.112:3001/getData";
    axios
      .post(baseURL, {
        body: payload
      })
      .then((response) => {
        // console.log(response.data);
        setDisplayedata(response.data)
      });



  }

  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <Searchbar fetchData={fetchData} />
      <div className='grid-container' >
        {
          displaydata.map((item) => {
            {/* console.log('Map::::', item.Company.name) */}
            return (
              <Addcard key={item._id} companyName={item.Company[0].name} headline={item.headline} desc={item.description} img={item.imageUrl} className="grid-item" />
            )
          })
        }

        {/* <Addcard className="grid-item" />
        <Addcard className="grid-item" />
        <Addcard className="grid-item" />
        <Addcard className="grid-item" />
        <Addcard className="grid-item" />
        <Addcard className="grid-item" />
        <Addcard className="grid-item" /> */}
      </div>

    </div>
  );
}

export default App;
