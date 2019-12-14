import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import classes from './Posts.css';
import { Route, Link } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component{

    state = {
     
        posts: [],
        selectedPostID:null

    }


    
componentDidMount() {
console.log(this.props);
    axios.get('/posts/')
    .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts =  posts.map(post => {
            return{
                ...post,
                author: 'Max'
            }
        });
        this.setState({posts: updatedPosts});
       
    });
    }



    postSelectedHandler = (id) => {

        this.setState({selectedPostID: id});
                       
        }


    render(){



        let postovi = this.state.posts.map(post =>{
            return (
            <Link to = {'/' + post.id} key={post.id}>
            <Post
            key={post.id}
             title = {post.title}
               author = {post.author}
                 clicked = {()=> this.postSelectedHandler(post.id)}/>
                </Link>
                );
     
         });


    return(

 <div>
 <section className="Posts">

 {postovi}

</section>

<Route path = "/:id" exact  component = {FullPost}/>

</div>
);


    }
}

export default Posts;



