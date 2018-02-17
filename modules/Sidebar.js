import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import seedname_to_number from './seedname_to_number'
import ADForApp from './ADForAPP'
import Collections from './Collections'
import HotArticle from './HotArticle'
import AD from './AD'


export default class Panellist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seedname:props.seedname,
        };
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            seedname:nextProps.seedname
        })
        //这行没有打印
        console.log("sidebar")
        console.log(nextProps)
    }

    //子组件不会随着路由改变而修改。。。待定BUG。。在哪里啊。。去。。panellist都可以，
    //caocaocaocoacoaocaocoacoacoc，函数名字写错了
    render() {
        return (
            <div className="col-md-4">
                <ADForApp></ADForApp>
                <AD/>
                <Collections seedname={this.state.seedname}></Collections>
                <HotArticle seedname={this.state.seedname}></HotArticle>
            </div>
        );
    }
}