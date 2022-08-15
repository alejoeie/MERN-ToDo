import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';
import './manageTasks.css'


const ManageTasks = () => (
  <div className='app'>
    <aside>
  <p> Menu </p>
  <a href="javascript:void(0)">
    <i class="fa fa-user-o" aria-hidden="true"></i>
    My drive
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-laptop" aria-hidden="true"></i>
    Computers
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-clone" aria-hidden="true"></i>
    Shared with me
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-star-o" aria-hidden="true"></i>
    Starred
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-trash-o" aria-hidden="true"></i>
    Trash
  </a>
</aside>

  </div>
);

export default ManageTasks;