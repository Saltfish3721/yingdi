import React from 'react';

export default class HotArticleChild extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var sourceID = this.props.data.sourceID
        var linkurl = `https://www.iyingdi.cn/web/article/videogame/${sourceID}?clazz=article`
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <a href={linkurl} target="_blank"><h3 >{this.props.data.title}</h3></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 ">
                            <img src={this.props.data.icon} className="img-responsive">
                            </img>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <p>{this.props.data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
