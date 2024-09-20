import React, {useState} from "react";
import {Col} from "react-bootstrap";

function PostCard(props) {
    const { post } = props;
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Col>
        <figure className="post-image"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
            <img src={post.url} alt={post.title}/>
            {isHovered && (
                <figcaption>
                    <p className="fw-bold">{post.title}</p>
                    <p>{post.description}</p>
                    <p>{post.author}</p>
                </figcaption>
            )}
        </figure>
        </Col>
    );
}
export default PostCard;