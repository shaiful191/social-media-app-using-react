import { createContext, useReducer } from "react";

export const PostList = createContext(
  {
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    addInitialPost: () => { },
  }
);


const postListReducer = (currPostList, action) => {

  let newPostList = currPostList;
  if (action.type === 'DELETE_POST') {
    newPostList = currPostList.filter(post => post.id !== action.payload.postId);
  }
  else if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    //  console.log(`${userId} ${postTitle}, ${tags}`);
    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags
      }
    })

  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: 'ADD_INITIAL_POST',
      payload: {
        posts,
      }
    })

  };

  const deletePost = (postId) => {
    // console.log(`delete post call for : ${postId}`);
    dispatchPostList({
      type: 'DELETE_POST',
      payload: {
        postId,
      }
    })

  };

  return <>
    <PostList.Provider value={{ postList, addPost, deletePost, addInitialPost }}>
      {children}
    </PostList.Provider>
  </>


}



export default PostListProvider;