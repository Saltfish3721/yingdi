import React from 'react';

export default class CollectionsChild extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var id = this.props.recommend.id
        var linkurl = `https://www.iyingdi.cn/web/article/hearthstone/essence/recommend${id}`
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <a href={linkurl} target="_blank"><h3 >{this.props.recommend.title}</h3></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 ">
                            <img src={this.props.recommend.icon} className="img-responsive">
                            </img>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <p>{this.props.recommend.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
