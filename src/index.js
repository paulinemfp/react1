//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, addUser } from "./services/users";
import * as commentsService from "./services/comments.js";
import * as postsService from "./services/posts.js";

updateUser(1, { email: "roger@77.com" });
console.log(getAllUsers());


console.log("CHECKING COMMENTS.JS");
console.log(commentsService.getCommentById(1));
console.log(commentsService.getCommentsByPostId(1));
commentsService.updateCommentBody(1, "updated body");
console.log(commentsService.getCommentById(1));
commentsService.deleteCommentById(1);
console.log(commentsService.getCommentById(1));
commentsService.addComment({body:"new comment"});


console.log("\nCHECKING POSTS.JS\n");
console.log(postsService.getPostsByUser(1));
console.log(postsService.getPostById(1));
postsService.addPost({body:"new post"});
postsService.updatePostTitle(1, "new title");
postsService.updatePostBody(1, "new body");
console.log(postsService.getPostById(1));
postsService.updatePost(1,{title:"another new title", body:"another new body"});
console.log(postsService.getPostById(1));
postsService.deletePostBy(1);
console.log(postsService.getPostById(1));
postsService.deletePostsByUserId(1);
console.log(postsService.getPostsByUser(1));


console.log("\nCHECKING USERS.JS\n");
addUser({name:"Juan Dela Cruz", username:"jdc"});