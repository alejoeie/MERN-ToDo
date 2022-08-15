import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromFile } from '@fortawesome/free-solid-svg-icons'
import './Appbar.css';

function AppBar() {
  return (
    <div>        
    <ul>
        <li><a href="/">Manage Tasks</a></li>
        <li><a href="/login">User</a></li>
        <li><a href="/">Stats</a></li>
        
        <li className='rightLi'><a href="/"><FontAwesomeIcon icon={faArrowRightFromFile}/>Log out</a></li>
    </ul>
</div>
  )
}

export default AppBar
