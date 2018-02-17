import React from 'react';
import axios from 'axios';

import seedname_to_number from './seedname_to_number'
import CollectionsChild from './CollectionsChild'

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
        var url = `https://www.iyingdi.cn/feed/recommend/list/seed?seedId=${seednumber}`
        console.log(url)
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
        console.log("collections")
        console.log(nextProps)
        this.getData(nextProps.seedname)
    }

    render() {

        var collectionslist = []
        for(let i=0;i<this.state.list.length;i++){
            var collectionsChild = <CollectionsChild recommend={this.state.list[i].recommend} key={i.toString()}/>
            collectionslist.push(collectionsChild)
        }
        return (
            <div className="row">
                <h3>营地精选</h3>
                {collectionslist}
            </div>
        );
    }
}
