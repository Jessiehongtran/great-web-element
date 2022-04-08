import React from 'react';

export default class Profiles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            profiles: [
                {
                    avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
                    name: "Tammy Wilson",
                    title: "Project Consultant"
                },
                {
                    avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
                    name: "Tammy Wilson 2",
                    title: "Project Consultant 2"
                },
                {
                    avatar: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
                    name: "Tammy Wilson 3",
                    title: "Project Consultant 3"
                }
            ],
            ind: 0
        }
    }

    render(){

        setTimeout(function(){
            if (this.state.ind + 1 < this.state.profiles.length){
                this.setState({ind: this.state.ind + 1})
            } else {
                this.setState({ind: 0})
            }
            
        }.bind(this), 5000)

        let person = this.state.profiles[this.state.ind]

        return (
            <div className="profiles" style={{ padding: '0 20px' }} >
                <div className="each-profile" style={{ display: 'flex', alignItems: 'center' }}>
                    <img style={{ borderRadius: '50%', width: '60px', height: '60px', marginRight: '20px' }} src={person.avatar} />
                    <div>
                        <div className="name" style={{fontWeight: 500}} >{person.name}</div>
                        <div className="title" style={{ color: 'grey', marginTop: '5px'}} >{person.title}</div>
                    </div>
                </div>
            </div>
        )
    }
}