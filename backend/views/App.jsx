import logo from './logo.svg';
import '../views/css/App.css/';
import axios from 'axios';
import { useState, useEffect } from 'react';




function App() {  
    const meetingId = '898 3340 9359';
  const oauthAccessToken = 'https://zoom.us/oauth/token';

  const getMeetingParticipants = async (meetingId, oauthAccessToken) => {
    const response = await axios.get(
      `https://api.zoom.us/v2/meetings/${meetingId}/participants`,
      {
        headers: {
          Authorization: `Bearer ${oauthAccessToken}`,
        },
      }
    );
    response.headers['Access-Control-Allow-Origin'] = '*';
    response.headers['Access-Control-Allow-Methods'] = 'GET';
    response.headers['Access-Control-Allow-Headers'] = 'Authorization';
    return response.data.participants;
  };

  const participants = getMeetingParticipants(meetingId, oauthAccessToken);


  console.log(participants);
 
  const [array, setOutfit] = useState([])
  
  useEffect(()=> {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/test")
        // console.log(res)
        // console.log(ret)
        setOutfit(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* {fizzbuzz.map(data =>(
        <div>
          <h1>{data._id}</h1>
          <h1>{data.username}</h1>
          <h1>{data.role}</h1>

        </div>
      ))}
      <p>{outfit}</p> */}

      
    </div>
  );
}

export default App;
