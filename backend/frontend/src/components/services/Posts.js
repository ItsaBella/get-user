import React from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts} from '../../actions/postActions';


class Posts extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post =>(
            <div key= {post.id}>
                <h3>{post.uName}</h3>
                <h2>{post.uEmail}</h2>
                <p>{post.uSurname} & {post.uDOB}</p>
                
            </div>
        ))
        return <div>
            <h1>Welcome to QG!</h1>
            {postItems}
        </div>;
    }
}
Posts.protoTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

 const mapStateToProps = state => ({
     posts: state.posts.items,
     newPost: state.posts.item
 });
 
export default connect(mapStateToProps, {fetchPosts})(Posts);