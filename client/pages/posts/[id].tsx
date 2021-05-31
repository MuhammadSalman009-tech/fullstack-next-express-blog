import { Card, Grid } from "@material-ui/core";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Post } from "../../types";

interface SinglePostProps{
    post:Post
  }
export default function SinglePost({post}:SinglePostProps) {
   
    return (
        <Grid item xs={4}>
          <Card>
            {post.id}
            <br />
            {post.title}
            <br />
            <br />
            {post.body}
            <br />
        </Card>
        </Grid>
    )
}

export const getServerSideProps:GetServerSideProps=async(context)=>{
    const id=context.params.id;
    const {data}=await axios.get<Post[]>(`http://localhost:5000/api/posts/`+id);
    return{
      props:{
        post:data
      }
    }
  }

