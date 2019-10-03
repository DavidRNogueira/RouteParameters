import React, {Component} from 'react'
import axios from "axios"

class Post extends Component{
    state={
        post:null
    }


    componentDidMount(){
        let id = this.props.match.params.post_id
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(res =>{
            this.setState({post:res.data})
    
        })
        console.log(this.state)
        console.log(id)

    }
   render(){

    const postLoaded = this.state.post ? (
        <div>
        <h2>{this.state.post.title}</h2>
        <p>{this.state.post.body}</p>
        </div>
    ) : (
        <div>
        <h1>Post Loading...</h1>
        </div>
        
    )

    return(
        <div>
        {postLoaded} 
        </div>
        
    )
   }
} 

export default Post