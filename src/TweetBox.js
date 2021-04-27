import React from 'react';
import { Card } from 'react-bootstrap'; // equivalent : import Card from 'react-bootstrap/Card'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; // could be synthetize in : import { Card, Form, Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

class TweetBox extends React.Component {
    constructor(props) {
        super(props); // like in other languages, you have to call the parent constructor first

        // initialization of the "state object"
        this.state = {
            text: '',
        };
    }

    handleChange = (e) => {
        // in React, you never modify the DOM directly
        // instead, in an event handler, oyu modify something called the "component state"
        // then, every time the state is updated, render() is called again
        // and inside render(), you can access the state to tell React how you want the DOM to be modified

        this.setState({ text: e.target.value });
        // console.log(e.target.value);
    };

    getRemainingChars = () => {
        return 280 - this.state.text.length;
    };

    renderOverflowAlert = () => {
        return (this.getRemainingChars() < 0) ? (
            <Alert variant="warning" className="text-left">
                <strong>Oops! Too long:</strong>
                &nbsp; &#8230;
                { this.state.text.substring(280 - 10, 280) }
                <strong className="bg-danger text-light">{ this.state.text.substring(280) }</strong>
            </Alert>
        ) : '';
    };

    render() {
       return (
        // now you can use the updated state here
        <Card className="bg-light">
            <Card.Body className="text-right">
                { this.renderOverflowAlert() }
                <Form.Control as="textarea" rows={3} onChange={ this.handleChange }/> {/* we use curly brackets to include JS inside HTML syntax part of JSX */}
                <br />
                <span className="mx-3 secondary">{ this.getRemainingChars() }</span>
                <Button variant="primary" disabled={ this.state.text.length === 0 }>Tweet</Button>
            </Card.Body>

            { /* this.state.text */ }
        </Card>
       ); 
    }
};

export default TweetBox;