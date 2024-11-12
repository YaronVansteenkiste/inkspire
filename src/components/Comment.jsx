import React, {forwardRef} from 'react';
import Avvvatars from 'avvvatars-react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Comment = forwardRef((props, ref) => {
    const {text, author, timestamp } = props;

    return (
        <Card className="my-3 p-2">
            <Card.Body>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Avvvatars value={author} size={40} />
                    </Col>
                    <Col>
                        <div className="d-flex justify-content-between">
                            <Card.Title className="mb-1">{author}</Card.Title>
                            <Card.Text className="text-muted small mb-1">
                                {new Date(timestamp).toLocaleString()}
                            </Card.Text>
                        </div>
                        <Card.Text>{text}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
});
export default Comment;