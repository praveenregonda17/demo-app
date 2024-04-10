import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([])
  axios.get('https://countriesnow.space/api/v0.1/countries')
  .then(function (response) {
    setData(response.data.data)
  })
  .catch(function (error) {
    setData([])
  })
  .finally(function () {
  });
  console.log('data', data)
  return (
    <div className="App">
     Demo Test App
     <ul>
      {data.map((item: any) => <li>{item.country}</li>)}
      </ul>
    </div>
  );
}

export default App;
