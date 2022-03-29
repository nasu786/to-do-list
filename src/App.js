import React, { useState } from 'react';
import './App.css';
import deleteicon from './delete_icon.svg';
import notesicon from './Notes-Icon.svg';


const App = () => {

  const [textInput, setTextInput] = useState('');
  const [items, setItems] = useState([]);
  const [ids, setids] = useState(0);

  //To add new task
  const addNewItem = (e) => {
    e.preventDefault();

    if (textInput != '') {
      const item = {
        id: ids,
        value: textInput
      };

      setItems((oldList) => [...oldList, item]);
      setids(ids + 1);
      setTextInput('');
    } else {
      alert('Please Enter any Task');
    }
  }

  //To delete task
  const deleteItem = (id) => {
    const updateditems = items.filter((item) => item.id !== id);
    setItems(updateditems);
  }

  return (
    <div className='container'>
      <h1>To-do List</h1>
      <form onSubmit={addNewItem}>
        <input type="text" placeholder='Add your task' onChange={(e) => setTextInput(e.target.value)} value={textInput} />
        <button type='submit' className='addButton'>+</button>
      </form>
      <div className='list'>
        {items.map((item) => (
          <li key={item.id} >
            <img src={notesicon} />
            <p className='task'>{item.value}</p>
            <button className='delete-btn' onClick={() => deleteItem(item.id)}>
              <img src={deleteicon} />
            </button>
          </li>
        ))
        }
      </div>
    </div>
  );
}

export default App;
