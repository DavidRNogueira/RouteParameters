import React, {Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"



class Produtos extends Component{
state={
    posts:[]
}

componentDidMount(){
   axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => this.setState({
        posts:res.data.slice(0,10)
    }))}


    render(){
        const {posts} = this.state
        const postsMapped = posts.length ? (
            posts.map(post =>{
                return(
                <div key={post.id}>
                    <Link to={"/" + post.id}>
                    <h2>{post.title}</h2>
                    </Link>
                    
                    <p>{post.body}</p>
                </div>)
            })
        ) : (
            <div>
                <h1>No Posts Yet</h1>
            </div>
        )

        return(
            <div>
            <h2>Produtos</h2>
            <div>{postsMapped}</div>
            </div>
            
        )
    }
} 
    


export default Produtos
