import { Card } from "react-bootstrap"

const Tweet = (props) => (
    <li key={ props.idx }>
        <Card>
            <Card.Header>
                <span>{ props.username }</span>
                <span>{ props.date }</span>
            </Card.Header>
            <Card.Body>
                { props.text }
            </Card.Body>
        </Card>
    </li>
);

export default Tweet;