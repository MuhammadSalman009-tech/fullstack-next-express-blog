import axios from 'axios';
import Router from 'next/router';
import React, { FormEvent, useState } from 'react'

function create() {
    const [formData, setFormData] = useState({
        title:"",
        body:"",
    })
function handleChange(e:FormEvent<HTMLInputElement>|FormEvent<HTMLTextAreaElement>){
    setFormData({...formData,[e.currentTarget.name]:e.currentTarget.value})
}
async function handleSubmit(e:FormEvent){
    e.preventDefault();
    const res=await axios.post("http://localhost:5000/api/posts/",formData);
    console.log(res)
    Router.push("/posts/")
}
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className="form-control" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea name="body" id="" cols={30} rows={7} className="form-control" onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default create
