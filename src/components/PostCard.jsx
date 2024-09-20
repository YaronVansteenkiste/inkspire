import React from "react";
import {Col} from "react-bootstrap";

function PostCard(props) {
    const { post } = props;
    return (
        <Col>
        <figure>
            <img className="post-image" src={post.url} alt={post.title}/>
            <figcaption>{post.title}</figcaption>
            <p>{post.description}</p>
        </figure>
        </Col>
    );
}
export default PostCard;