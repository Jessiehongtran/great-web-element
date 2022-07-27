import React from 'react';
import InstaRecentPosts from './insta-recent-posts';
import InstaRecentStories from './insta-recent-stories';
import InstaStatistic from './insta-statistic';

export default class InstaFeed extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <InstaStatistic />
                <InstaRecentPosts />
                <InstaRecentStories />
            </div>
        )
    }
}