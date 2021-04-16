import React from 'react';
import { Card } from 'react-bootstrap'; // equivalent : import Card from 'react-bootstrap/Card'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; // could be synthetize in : import { Card, Form, Button } from 'react-bootstrap';

class TweetBox extends React.Component {
    render() {
       return (
        <Card className="bg-light">
            <Card.Body className="text-right">
                <Form.Control as="textarea" rows={3} />
                <br />
                <Button variant="primary">Tweet</Button>
            </Card.Body>
        </Card>
       );
    }
};

export default TweetBox;