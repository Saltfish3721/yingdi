import React from 'react';

export default class ADForAPP extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var imgSrc = "https://static.iyingdi.cn/yingdiWeb/images/webimg/web_adv_download.png"
        return (
            <div className="row">
                <img src={imgSrc} className="img-responsive"/>
            </div>
        );
    }
}
