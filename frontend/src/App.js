import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [responseData, setResponseData] = useState(null);

  const handleClick = () => {
    const data = {'context': title, 'question': desc};
    sendPostRequest('http://127.0.0.1:8008/response/', data);
  }

    const sendPostRequest = (url, data) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => setResponseData(data))
    .catch(error => console.error(error))
  }



  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"900px", "height":"800px", "backgroundColor":"white", "marginTop":"15px"}} >
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">NLP Question and Answering</h1>
      <h6 className="card text-white bg-primary mb-3"> Fulstack NLP with FASTAPI - React - MongoDB</h6>
     <div className="card-body">
      <h5 className="card text-white bg-dark mb-3">Add Your Context and Question</h5>
      <span className="card-text">
        <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} style={{"height":"600px"}} placeholder='Question'/>
        <input className="mb-3 form-control desIn" onChange={event => setDesc(event.target.value)} style={{"height":"100px"}} placeholder='Answer'/>
      <button className="btn btn-outline-primary mx-3 mb-4" style={{'borderRadius':'50px',"font-weight":"bold"}} onClick={handleClick} > Submit </button>
      </span>
      <h5 className="card text-white bg-dark mb-3"  styleName="max-width: 20rem;">Answer</h5>
        <div>
            <h1 className="card text-black mb-1"  style={{"height":"100px", "font-size": "30px"}} >{responseData && <p>{responseData.question}</p>}</h1>

        </div>
      </div>
    </div>
  );
}

export default App;
