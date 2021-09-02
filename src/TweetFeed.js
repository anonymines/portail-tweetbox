import React from 'react';
import Tweet from "./Tweet"

class TweetFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        }
    }

    componentDidMount = () => {
        this.getTweets()
    }

    getTweets = () => {
        const url = "http://localhost:8000/lasttweets";

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({ tweets: data })
        });
    }

    render() {
        return (
            <ul>
                { this.state.tweets.length ? this.state.tweets.map((data, idx) => (
                    <Tweet
                        idx={ idx }
                        username={ data.username }
                        text={ data.tweet }
                        date={ data.date }
                    />
                )) : "Chargement en cours..." }
            </ul>
        );
    }
}

export default TweetFeed;