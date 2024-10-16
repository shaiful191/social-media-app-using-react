import React from 'react'

const WelcomeMsg = ({onGetPostsClick}) => {
  return (
    <center className='welcome-msg'>
      <h1 >There are no post</h1>
      <button onClick={onGetPostsClick} type="button" className="btn btn-primary">Get Posts From  Server</button>
    </center>
  )
}

export default WelcomeMsg