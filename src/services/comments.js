import { comments as data } from "../data/comments";
import * as utils from "../utils.js";

//private
let comments = [...data];

export function getCommentById(id) {
  //get comment by id
  // var returnComment = comments.find(comment => comment.id === id);
  // returns object
  console.log("getCommentById");
  return comments.find(comment => comment.id === id);
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  // var returnComments = comments.filter(comment => comment.postId === postId);
  // returns array
  console.log("getCommentsByPostId");
  return comments.filter(comment => comment.postId === postId);
}

export function updateCommentBody(id, body) {
  //update comment body
  console.log("updateCommentBody");
  // var getComment = getCommentById(id);
  // getComment.body = body;
  comments = comments.map((comment) => {
    if (comment.id === id) {
      comment.body = body;
    }

    return comment;
})}

export function deleteCommentById(id) {
  console.log("deleteCommentById");
  //delete comment by id
  comments = comments.filter(comment => comment.id !== id);
}

export function addComment(comment) {
  console.log("addComment");
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  // var commentId = utils.generateId(comments);
  // var newComment = comment;
  comment.id = utils.generateId(comments);
  comments = [comment, ...comments];
  console.log(comments[0]);
}
