import React from 'react';
import axios from 'axios';

import seedname_to_number from './seedname_to_number'
import HotArticleChild from './HotArticleChild'

export default class ADForAPP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seedname:props.seedname,
            list:[]
        }
    }
    getData(seedname){
        var seednumber = seedname_to_number[seedname]
        var url = `https://www.iyingdi.cn/feed/hotfeed?seedId=${seednumber}`
        axios.get(url)
            .then(res => {
                var list = res.data.list
                this.setState({
                    list:list
                })
            });
    }
    componentDidMount() {
        this.getData(this.state.seedname)
    }
    componentWillReceiveProps(nextProps){
        this.setState({
                seedname:nextProps.seedname
            }
        )
        this.getData(nextProps.seedname)
    }

    render() {

        var HotArticleList = []
        for(let i=0;i<this.state.list.length;i++){
            var child = <HotArticleChild data={this.state.list[i]} key={i.toString()}/>
            HotArticleList.push(child)
        }
        return (
            <div className="row">
                <h3>热门文章</h3>
                {HotArticleList}
            </div>
        );
    }
}