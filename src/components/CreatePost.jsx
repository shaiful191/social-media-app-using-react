import React, { useContext, useRef } from 'react'
import { PostList } from '../store/post-list-store';
// import PostList from '../store/post-list-store';

const CreatePost = () => {

  const  { addPost } = useContext(PostList)
  
  const userIdElement= useRef();
  const postTitleElement= useRef();
  const postBodyElement= useRef();
  const reactionsElement= useRef();
  const tagsElement= useRef();

  const handleSubmit = (e) => {
     e.preventDefault();
     const userId = userIdElement.current.value;
     const postTitle = postTitleElement.current.value;
     const postBody = postBodyElement.current.value;
     const reactions = reactionsElement.current.value;
     const tags = tagsElement.current.value.split(' ');


     userIdElement.current.value='';
     postTitleElement.current.value='';
     postBodyElement.current.value='';
     reactionsElement.current.value='';
     tagsElement.current.value='';
     addPost(userId,postTitle,postBody,reactions,tags);
  }

  return (
    <form className='create-post' onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="user_id" className="form-label">User Id</label>
        <input ref={userIdElement} type="text" className="form-control" id="user_id" placeholder='Enter your user id here' />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input ref={postTitleElement} type="text" className="form-control" id="title" placeholder='How are you feeling today...' />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Content</label>
        <textarea ref={postBodyElement} type="text" className="form-control" id="body" placeholder='Tell us more about it' />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of Reactions</label>
        <input ref={reactionsElement} type="text" className="form-control" id="reactions" placeholder='How many people reacted to this post' />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Enter your hashtags here</label>
        <input ref={tagsElement} type="text" className="form-control" id="reactions" placeholder='Please enter tags using space' />
      </div>
      <button type="submit" className="btn btn-primary">Create Post</button>
    </form>
  )
}

export default CreatePost