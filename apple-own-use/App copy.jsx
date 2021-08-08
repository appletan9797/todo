//import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
//import { useState } from 'react/cjs/react.production.min';

function callAPI() {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  return fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        return response.json().then(function(data) {
         // console.log('response data', data[3].title);

          return data;
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

/*useEffect(() => {
  callAPI()
    .then((data) => {
      console.log('#### sresponse data', data.title);
      setTitle(data.title);
    });
}, []);*/

export const ToDo = (props) => {

  var dataField = "No Data"

  //const [title, setTitle] = useState('None');

  /*var array1 = [];
  array1 = callAPI();
  for (var i = 0; i <3 ; i++){
    console.log(array1[i].title)
  }
  return(
    <div>
      To Do 
      <div className="data-div">
        -No Data-
      </div>
    </div>
  );*/
  
  const RenderToDo = (props) => {
    useEffect(() => {
    callAPI()
      .then((data) => {
        for (var i = 0; i <3 ; i++){
          console.log('#### response data', data[i].title);
        }
        
        //setTitle(data[0].title);

      });
  }, []);
  }

  return (
    <div>
      To Do 
    <div className="data-div">
      {dataField}
    </div>
    <div>
      <button onClick={RenderToDo}>Click to render To Do List</button>
    </div>
  </div>
  );
}

//export default App;
