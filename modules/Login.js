import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLogin:false
        }
    }


    render() {
        return (
            <div className="panel panel-default">
                {
                    this.state.hasLogin?
                        <p>alreadyLoged</p>:
                        <p>zhuce,denglu</p>
                }
            </div>
        )
    }
}
