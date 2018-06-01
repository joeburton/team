import React, { Component } from 'react';

class Team extends Component {
    styleMe() {
        return {
            listStyle: 'none',
            margin: '0 auto',
            maxWidth: '600px'
        };
    }
    render() {
        return (
            <ul style={this.styleMe()}>
                {this.props.members.map((member, i) => {
                    return (
                        <li key={i}>{member}</li>
                    )
                })}
            </ul>
        );
    }
}

export default Team;
