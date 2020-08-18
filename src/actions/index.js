import { ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE } from "../const/index";
export const actAddNote = (content) => {
  return {
    type: ADD_NEW_NOTE,
    content,
  };
}
let postId = 0;
export const createPost = title => ({
   type: 'ADD_POST',
   payload: {
     id: postId++,
     title,
   },
});