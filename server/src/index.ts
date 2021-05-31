import express from "express";
import {posts,Post} from "./data";
import { PostDto } from "./dtos";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
//list all posts
app.get("/api/posts/", (req, res) => {
  try {
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get single post
app.get("/api/posts/:id", (req, res) => {
  console.log(req.params.id);
  
  try {
    const post = posts.find((post) => post.id == parseInt(req.params.id));
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json("post not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete a post
app.delete("/api/posts/:id", (req, res) => {
  try {
    const index = posts.findIndex((post) => post.id == parseInt(req.params.id));
    if (index != -1) {
      posts.splice(index, 1);
      res.status(200).json("deleted");
    } else {
      res.status(404).json("post not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// app.put("/posts/:id", (req, res) => {
//   try {
//     const index = posts.findIndex((post) => post.id == parseInt(req.params.id));
//     console.log(index);
//     console.log(req.body);
//     if (index != -1) {
//       if (req.body.title != "" && req.body.body != "") {
//         const updatedPosts = posts.map((post) => {
//           if (post.id == parseInt(req.params.id)) {
//             const updatedPost = req.body;
//             return { ...post, ...updatedPost };
//           }
//           return post;
//         });

//         res.status(200).json(updatedPosts);
//       } else {
//         res.status(400).json("bad request");
//       }
//     } else {
//       res.status(404).json("post not found");
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
app.post("/api/posts/", (req, res) => {
  try {
    console.log(req.body);
    
    const body=req.body as PostDto
    console.log(body.title)
    if (body.title!="" && body.body!="") {
      const post:Post={
        id:posts.length+1,
        title:body.title,
        body:body.body
      } 
      posts.push(post);
      res.status(200).json(posts);
    } else {
      res.status(400).json("bad request");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(5000, () => {
  console.log("listnning on port 5000...");
});
