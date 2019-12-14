import React, { Component } from 'react';

//import axios from 'axios';

//import Post from '../../components/Post/Post';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {

    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth:true 
    }

  

/* Ovi ispod postovi su one tri kutijice sa homePAge na vrhu
                    Mi ih trebamo iskoristiti da nam dinamicki generisu podatke sa servera
                    i ispisu ih u one kutijice */




    render () {

    return (

            <div className = "Blog">

            
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to = "/" exact>Home</NavLink></li>
                            <li><NavLink to = {{
                             pathname: '/new-post', 
                             hash: '#submit',
                             search: '?quick-submit = true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path = "/" exact render = {() => <h1>Home</h1>}/>
                <Route path = "/"  render = {() => <h1>Home2</h1>}/>*/}

                

                <Switch>



                   {this.state.auth ? <Route path = "/new-post" component = {NewPost}/> : null}
                   <Route path = "/"   component = {Posts}/>
                   
                   
                   {<Route render = {() => <h1>Not found</h1>}/>}
                   
                   {/*<Redirect from = "/"  to = "/new-post"/>*/}           
                </Switch>
                
                </div>
        );
    }
}

export default Blog;