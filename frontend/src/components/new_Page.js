import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewPage() {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleClick = () => {
    const data = {'context': title, 'question': desc};
    sendPostRequest('http://127.0.0.1:8000/response/', data);
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
    .then(response => setResponseData(response.answer))
    .catch(error => console.error(error))
  }



  return (
  <div>
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">NLP Question and Answering</h1>
     <div className="card-body">
      <h5 className="card text-white bg-dark mb-3">list the last question and answers</h5>
      <span className="card-text">
        <textarea onChange={event => setTitle(event.target.value)} style={{"height":"400px", "width":"900px"}} placeholder='Context'/>
        <input className="mb-3 form-control desIn" onChange={event => setDesc(event.target.value)} style={{"height":"100px"}} placeholder='Question'/>
      <button className="btn btn-outline-primary mx-3 mb-4" style={{'borderRadius':'50px',"font-weight":"bold"}} onClick={handleClick} > Submit </button>
      </span>
      <h5 className="card text-white bg-dark mb-3"  styleName="max-width: 20rem;">Answer</h5>
        <div>
            <h1 className="card text-black mb-1"  style={{"height":"100px", "font-size": "30px"}} >{responseData && <p>{responseData}</p>}</h1>

        </div>
      </div>
   </div>

  );
}

export default NewPage;
