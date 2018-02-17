import React from 'react';
import axios from 'axios';
import {Link} from 'react-router'
//一定要有花括号

import seedname_to_number from './seedname_to_number'
import Login from './Login'


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seeds:[]
        }
    }

    componentDidMount() {
        var url = "https://www.iyingdi.cn/seed/menu/list?version=600&system=web"
        axios.get(url)
            .then(res => {
                var seeds = res.data.seeds
                this.setState({
                    seeds:seeds
                })
            });
    }

    render() {

        return (
            <div>
                {/*<Login/>*/}
                <ul className="nav nav-pills">
                    {this.state.seeds.map((s) => {
                        let seedname = ''
                        for(let i in seedname_to_number){
                            if(seedname_to_number[i] == s.seed.id)
                                seedname = i
                        }
                        var el = <li role="presentation" className="active" key={s.seed.id}><Link to={"/article/"+seedname}>{s.seed.title}</Link></li>
                        var result = s.seed.visible?el:null
                        return (
                            result
                        )
                    })}
                </ul>
            </div>
        );
    }
}