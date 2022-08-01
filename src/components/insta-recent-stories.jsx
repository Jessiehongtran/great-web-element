import React from 'react';

const stories = [
    "https://i.pinimg.com/236x/e9/34/f4/e934f42f1240da8717c9333055a331a0.jpg",
    "https://i.pinimg.com/236x/28/e9/02/28e9026ad3280b88c2b222e3163902f5.jpg",
    "https://i.pinimg.com/236x/88/28/fc/8828fccafcc3f88eae4874ead4a559a5.jpg",
    "https://i.pinimg.com/236x/04/14/2e/04142e3823051700fb866753e3b7ecdb.jpg"
]

export default class InstaRecentStories extends React.Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <h3>Recent Stories</h3>
                <div className="" style={{ display: 'flex' }}>
                {stories.map(story => 
                    <div style={{ margin: '0 15px 15px 0'}}>
                        <img style={{borderRadius: '6px', height: '340px'}} src={story}/>
                    </div>)}
                </div>
            </div>
        )
    }
}