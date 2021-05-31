import axios from "axios";
import { GetServerSideProps } from "next";
import { Post } from "../../types";
import Router from "next/router";
import Link from "next/link"
import styles from "../../styles/Home.module.css";
import Create from "../../components/Create"
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
interface HomeProps{
  posts:Post[]
}

export default function Home({posts}:HomeProps) {
  async function handleDelete(id:number){
    const {data}=await axios.delete(`http://localhost:5000/api/posts/`+id);
    if(data=="deleted"){
        console.log("deleted");
        Router.push("/posts/")
    }
    }
  return (
    <div className={styles.main}>
      <Create/>
    {posts.map(item=>(
    // <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className={styles.card} key={item.id}>
                <CardContent className={styles.cardContent}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        <a href={`/posts/${item.id}`} className={styles.postTitle}>{item.title}</a> 
                    </Typography>
                    <Typography color="textSecondary">
                        {/* {item.shortDescription} */}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary"> <a href={`/posts/${item.id}`}>View</a></Button>
                    <Button size="small" color="primary" onClick={()=>handleDelete(item.id)}>Delete</Button>
                </CardActions>
            </Card>
        // </Grid>
        ))}
        </div>
  )
}
export const getServerSideProps:GetServerSideProps=async()=>{
  const {data}=await axios.get<Post[]>("http://localhost:5000/api/posts");
  return{
    props:{
      posts:data
    }
  }
}