import { useEffect, useState } from 'react';

export function ToDo() {
  //Default value
  //var dataField = 'No Data';
  const [toDoItem, setToDo] = useState([]);

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
  useEffect(() => {
    //use
    callAPI().then(data => {
      data = data.slice(0, 3);
      setToDo(data);
    });
  }, []);

  return (
    <div>
      To Do
      <p> To Do List: </p>
      <div>
        <ol>
          {toDoItem.length > 0 ? toDoItem.map(item => <li>{item.title}</li>) : <li>No Data</li>}
        </ol>
      </div>
    </div>
  );
}

//{toDoItem && toDoItem.length > 0 && toDoItem.map(item => <li>{item.title}</li>)}
//<ol>{toDoItem && toDoItem.length > 0 && toDoItem.map(item => <li>{item.title}</li>)}</ol>
