import React from 'react';
import axios from 'axios';

import Panel from './Panel'
import seedname_to_number from './seedname_to_number'

 
export default class Panellist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seedname:props.seedname,
            feeds: [],
        };
    }
    getData(seedname){
        var seednumber = seedname_to_number[seedname]
        var url = `http://www.iyingdi.cn/feed/list/seed?&web=1&seed=${seednumber}&system=web`
        axios.get(url)
            .then(res => {
                var feeds = res.data.feeds
                this.setState({
                    feeds:feeds
                })
            });
    }
    componentDidMount() {
        this.getData(this.state.seedname)
    }
    /*componentWillReceiveProps(nextProps){
        console.log("render from "+this.state.seedname+" to "+nextProps.seedname)
        this.setState({
                seedname:nextProps.seedname
            }
        )
        this.getData()
        为什么这种情况下getData读取的是前一个state？害我调试好久，，奇怪，以后慢慢看。链接要
        点两下才有效果
    }*/
    componentWillReceiveProps(nextProps){
        this.setState({
            seedname:nextProps.seedname
            }
        )
        console.log("pannllist")
        console.log(nextProps)
        this.getData(nextProps.seedname)
    }
    
    render() {
        var panellist = []
        for(let i=0;i<this.state["feeds"].length;i++){
            var panel = <Panel data={this.state["feeds"][i]["feed"]} key={i.toString()}/>
            panellist.push(panel)
        }
        return (
                <div className="col-md-8">
                    {panellist}
                </div>
        );
    }
}

