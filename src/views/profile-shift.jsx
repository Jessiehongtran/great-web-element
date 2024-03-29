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
            ind: 0,
            updating: false
        }
    }

    render(){


        // setTimeout(function(){

        //     if (!this.state.updating){
        //         if (this.state.ind + 1 < this.state.profiles.length){
        //             this.setState({ind: this.state.ind + 1, updating: true })
        //         } else {
        //             this.setState({ind: 0, updating: true})
        //         }
        //     }
            
        // }.bind(this), 5000)

        // setTimeout(function(){
        //     this.setState({ updating: false })
        // }.bind(this), 8000)

        let person = this.state.profiles[this.state.ind]

        return (
            <div className="profiles" >
                <div className="each-profile" style={{ display: 'flex', alignItems: 'center' }}>
                    <img alt="profile placeholder" style={{ borderRadius: '50%', width: '60px', height: '60px', marginRight: '20px' }} src={person.avatar} />
                    <div>
                        <div className="name" style={{fontWeight: 500}} >{person.name}</div>
                        <div className="title" style={{ color: 'grey', marginTop: '5px'}} >{person.title}</div>
                    </div>
                </div>
            </div>
        )
    }
}