import React, { Component } from 'react';
import {
    List, Avatar, Button, Skeleton, Popconfirm,
} from 'antd';
import {Link} from "react-router-dom";
const Data = [
    {
        type: '四诊采集',
        result: '望闻问切，体形结实，肌肉充实，皮肤润泽，表示体格强壮，正气充盛；形体瘦弱，肌肉瘦削，皮肤枯燥，表示衰弱，正气不足。',
        time: '2018-12-20'
    },
    {
        type: '认知筛查量表得分',
        result: '100',
        time: '2018-12-20'
    },
    {
        type: 'MMSE评分量表',
        result: '100',
        time: '2018-12-20'
    },,
    {
        type: 'MoCA评分量表',
        result: '100',
        time: '2018-12-20'
    }
];

export default class History extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            list: [],
        }
    }

    componentDidMount() {
            this.setState({
                data: Data,
                list: Data,
            });
    }

    render() {
        const { list } = this.state;
        return (
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                bordered="true"
                dataSource={list}
                renderItem={item => (
                    <List.Item actions={[<Link to="/historyDetail"><Button onClick={() => this.handleEdit}>查看</Button></Link>]}>
                        <Skeleton  title={false}>
                            <List.Item.Meta
                                title={item.type}
                                description={item.result}
                                time={item.time}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        );
    }
}

