import React from 'react'
import './todoItem.css';
function TodoItem() {
  return (
    <div className='appContainer'>
            <h1 className='title'>To Do List</h1>

        <div className='container'>
            <div className='inputWrapper'>
                    <div>
                            <input className='inputField' placeholder="Enter task name"/>
                            <input className='inputField' placeholder="Enter Description (e.g. For growing skills)"/>
                            <input className='inputField' type="date" name='selected'/>
                            <div>
                            <a className='subButton' href="#">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  Ingresar
                                </a>
                            </div>
                        </div>
                  </div>
        </div>
        {/* <div className='message'>
            <h1>Se agrego con exito</h1>
        </div>  Enviarlo a los utils*/} 
    </div>
  )
}

export default TodoItem