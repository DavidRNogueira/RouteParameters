import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import Contato from "./Components/Contato.js"
import Produtos from "./Components/Produtos.js"
import NavBar from "./Components/NavBar.js"
import Home from "./Components/Home"
import Post from "./Components/Post.js"

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <NavBar/>
        <Route exact path ="/" component={Home}/>
        <Route path ="/contato" component={Contato}/>
        <Route path ="/produtos" component={Produtos}/>
        <Route path = "/:post_id" component={Post}/>
      </BrowserRouter>
      
    )
  }
}

export default App;
