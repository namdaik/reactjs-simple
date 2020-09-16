import { DISLAY_MS } from "../const/ms";
export const displayMs = (content) => {
  return {
    type: DISLAY_MS,
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