import React, {useState} from "react";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function PostCard(props) {
    const { post } = props;
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Col>
        <figure className="post-image"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
            <Link to={`/post/${post.id}`}>
                <img src={post.url} alt={post.title}/>
            </Link>
            {isHovered && (
                <figcaption>
                    <p className="fw-bold text-primary">{post.title}</p>
                    <p>{post.description}</p>
                    <p>{post.author}</p>
                </figcaption>
            )}
        </figure>
        </Col>
    );
}
export default PostCard;