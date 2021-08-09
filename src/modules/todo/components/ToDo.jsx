import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    //marginTop: '35px',
    //marginLeft: '10px',
  },
}));

export function ToDo() {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
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
      <p>To Do List</p>

      {toDoItem.length > 0 ? (
        <List className={classes.root}>
          {toDoItem.map(item => {
            const labelId = `checkbox-list-label-${item}`;

            return (
              <ListItem key={item} role={undefined} dense button onClick={handleToggle(item)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(item) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${item.title}`} />
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}
