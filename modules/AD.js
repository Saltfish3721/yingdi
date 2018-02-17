import React from 'react';
import axios from 'axios';


export default class ADForAPP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ad:{}
        }
    }

    componentDidMount() {
        var url = 'https://www.iyingdi.cn/ad/v2?type=web&system=web&module=14'
        axios.get(url)
            .then(res => {
                var ad = res.data.ad
                this.setState({
                    ad:ad
                })
            });
    }

    render() {
        return (
            <div className="row">
                <a href={this.state.ad.url}><img className="img-responsive" src={this.state.ad.img}/></a>
            </div>
        );
    }
}