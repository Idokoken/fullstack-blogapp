import React from 'react'
import './single.css'
import Sidebar from './sidebar/Sidebar'
import SinglePost from './SinglePost'

function Single() {
  return (
    <div className='single'>
      <SinglePost/>
      <Sidebar />
    </div>
  );
}

export default Single;