import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

/*export function App() {
  const message = "How are you";
  const name = 'apple'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, {message}
        </p>
      </header>
    </div>
  );
}*/
function ToDo() {
  //Default value
  //var dataField = 'No Data';
  const [toDoItem, setToDo] = useState('No Data');

  //Call API (call data from json file)
  function callAPI() {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    return fetch(url)
      .then(function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        // Examine the text in the response
        return response.json().then(function (data) {
          // console.log('response data', data[3].title);

          return data;
        });
      })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }

  //To render by default
  /*useEffect(() => {
  callAPI()
    .then((data) => {
      for (var i = 0; i <3 ; i++){
        //console.log('#### response data', data[i].title);
      }
    });
}, []);*/

  /*function renderData() {
    callAPI().then(data => {
      setToDo(data[0].title);
      setToDo(data[1].title);
    });
  }

  function clearData() {
    setToDo('No Data');
  }*/
  return (
    <div>
      To Do
      <p>
        <button onClick={renderData}>Click to Render To Do List</button>{' '}
        <button onClick={clearData}>Clear</button>
      </p>
      <p> To Do List: </p>
      <p>{toDoItem}</p>
    </div>
  );
}

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDo></ToDo>
      </header>
    </div>
  );
}

//export default App;
