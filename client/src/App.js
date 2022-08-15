import React, {useState} from 'react';
import './index.css';

import AppBar from './components/AppBar';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import TodoItem from './components/ToDo/TodoItem';
import ManageTasks from './components/ManageTasks/ManageTasks';
function App() {

  const [notlogged, setNotLogged] = useState(false);
  return (
    <div className="container">
      {/* {notlogged ? <div> <AppBar /><Login notlogged={notlogged} set={setNotLogged}/> </div> : <div><AppBar /><Signup /></div>} */}
      <AppBar />
      <TodoItem />
      <ManageTasks />
    </div>
  );
}

export default App;
