import React from 'react';
import ReactDOM from 'react-dom';

import Panellist from './Panellist'
import Sidebar from './Sidebar'

 
export default class Seedname extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seedname:this.props.params.seedname || "hearthstone"
        };
    }
    componentWillReceiveProps(nextProps){
        console.log("seedname")
        console.log(nextProps)
        this.setState({
            /*seedname:this.props.params.seedname*/
            seedname:nextProps.params.seedname
        })
    }
    render() {
         return (
            <div className="container">
                <div className="row">
                    <Panellist seedname={this.state.seedname} />
                    <Sidebar seedname={this.state.seedname}/>
                </div>
            </div>
         )
    }
}
