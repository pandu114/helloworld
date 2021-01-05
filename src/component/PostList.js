import React, { Component } from 'react'
import axios from 'axios'
export class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(responce =>{
            console.log(responce)
            this.setState({posts: responce.data})
        }).catch(error => {
            console.log(error);
            this.setState({errorMsg: 'Error Occuring'})
        })
    }
    
    render() {
        const {posts} = this.state
        const {errorMsg} = this.state
        return (
            <div>
                 List of Post List
                 {
                     posts.length ?
                     posts.map(post => <div key={post.id}>{post.title}</div>) : null
                 },
                 {
                     errorMsg ? <div>{errorMsg}</div>: null
                 }
            </div>
        )
    }
}

export default PostList
