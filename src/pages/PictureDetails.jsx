import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Container, Figure, Form, Row, Spinner } from 'react-bootstrap';
import { useImageContext } from "../context/ImageFromDbContext.jsx";
import { useCommentContext } from "../context/CommentFromDbContext.jsx";
import Comment from "../components/Comment.jsx";
import { useUserContext } from "../context/UserFromDbContext.jsx";
import Avvvatars from "avvvatars-react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export function PictureDetails() {
    const { id } = useParams();
    const { images, incrementLikes } = useImageContext();
    const { comments, handleCommentSubmit } = useCommentContext();
    const { users } = useUserContext();

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [liked, setLiked] = useState(false);
    const [commentText, setCommentText] = useState("");

    const user = users.find(user => user.id === image?.authorId);
    const authorName = user ? user.username : "Anonymous";

    useEffect(() => {
        const foundImage = images.find(image => image.id === id);
        if (foundImage) {
            setImage(foundImage);
        }
        setLoading(false);
    }, [id, images]);

    const handleLike = async () => {
        if (image) {
            const newLikes = liked ? image.likes - 1 : image.likes + 1;
            await incrementLikes(image, newLikes);
            setImage({ ...image, likes: newLikes });
            setLiked(!liked);
        }
    };

    if (loading) {
        return <Spinner animation="border" className="d-block mx-auto" />;
    }

    if (!image) {
        return <h1 className="text-center mt-5">Image not found</h1>;
    }

    const imageComments = comments.filter(comment => comment.imageId === id);

    return (
        <Container>
            <Row className="justify-content-center mt-4">
                <Col md={8} className="text-center">
                    <h1>{image.title}</h1>
                    <p>Published on {new Date(image.publishDate).toLocaleDateString()}</p>
                </Col>
            </Row>
            <Row className="justify-content-center my-4">
                <Col md={5} className="text-center">
                    <Figure>
                        <Zoom>
                            <Figure.Image width={300} alt={image.title} src={image.url} />
                        </Zoom>
                    </Figure>
                </Col>
                <Col md={5}>
                    <Card className="h-100">
                        <Card.Body className="text-center">
                            <Avvvatars value={authorName} size={40} className="mb-3" />
                            <Card.Title>Author: {authorName}</Card.Title>
                            <Card.Text>{image.description}</Card.Text>
                            <Card.Text><b>Category</b>: {image.category}</Card.Text>
                            <Button variant="outline-secondary" size="sm" className="me-2" onClick={handleLike}>
                                {liked ? '💔' : '❤️'}
                            </Button>
                            <span className="h4">{image.likes}</span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col md={10}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center">Comments</Card.Title>
                            <Form onSubmit={(e) => handleCommentSubmit(e, id, commentText, setCommentText)} className="mb-3">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Add a comment..."
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-2">Submit</Button>
                            </Form>
                            <div>
                                {imageComments.map(comment => (
                                    <Comment key={comment.id} {...comment} />
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}