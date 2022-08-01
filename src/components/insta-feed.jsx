import React from 'react';
import InstaRecentPosts from './insta-recent-posts';
import InstaRecentStories from './insta-recent-stories';
import InstaStatistic from './insta-statistic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const numberData = [
    {
        name: "Total Followers",
        description: "",
        number: 1244,
        chart_image: "https://google.github.io/charts/flutter/example/line_charts/simple_full.png",
        link: ""
    },
    {
        name: "Account Reached",
        description: "",
        number: 640,
        chart_image: "https://google.github.io/charts/flutter/example/line_charts/simple_full.png",
        link: ""
    },
    {
        name: "Account Engaged",
        description: "",
        number: 36,
        chart_image: "https://google.github.io/charts/flutter/example/line_charts/simple_full.png",
        link: ""
    }
]

export default class InstaFeed extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ padding: '10px 10px 10px 0', width: '150px', margin: '10px 10px 10px 0' }}>
                        <h4 style={{ margin: 0, fontSize: '20px', color: '#067BCB' }}>Insights Overview</h4>
                        <p style={{ marginTop: '10px' }}>You gained <span style={{ color: '#067BCB', fontWeight: 'bold' }}>24</span> more followers compared to May 30 - June 12</p>
                        <div style={{ background: '#fff', padding: '8px 10px', borderRadius: '4px', margin: '5px', cursor: 'pointer' }}>
                            <span style={{ marginRight: '10px' }}>Last 14 days</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </div>
                    <div className="statistics" style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        {numberData.map(data => <InstaStatistic data={data} />)}
                    </div>
                </div>
                <InstaRecentPosts />
                <InstaRecentStories />
            </div>
        )
    }
}