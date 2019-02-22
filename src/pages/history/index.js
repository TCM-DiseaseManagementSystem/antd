import React, { Component } from 'react';
import {
    List, Avatar, Button, Skeleton, Popconfirm,
} from 'antd';
import {Link} from "react-router-dom";
const Data = [
    {
        title: '四诊采集',
        description: '望闻问切，体形结实，肌肉充实，皮肤润泽，表示体格强壮，正气充盛；形体瘦弱，肌肉瘦削，皮肤枯燥，表示衰弱，正气不足。',
        time: '2018-12-20'
    },
    {
        title: '认知筛查量表得分',
        description: '100',
        time: '2018-12-20'
    },
    {
        title: 'MMSE评分量表',
        description: '100',
        time: '2018-12-20'
    },,
    {
        title: 'MoCA评分量表',
        description: '100',
        time: '2018-12-20'
    }
];

export default class History extends Component{
    constructor(props) {
        super(props);
    }

    jump = (data) =>{
        if (data){
            if (data.title === '四诊采集') {
                return(
                    <Link to="/diagnosis">
                        <Button onClick={() => this.handleEdit}>查看</Button>
                    </Link>
                )
            }else if (data.title === '认知筛查量表得分') {
                return(
                    <Link to="/cognition">
                        <Button onClick={() => this.handleEdit}>查看</Button>
                    </Link>
                )
            }else if (data.title === 'MMSE评分量表') {
                return(
                    <Link to="/mmse">
                        <Button onClick={() => this.handleEdit}>查看</Button>
                    </Link>
                )
            }else if (data.title === 'MoCA评分量表')  {
                return(
                    <Link to="/moca">
                        <Button onClick={() => this.handleEdit}>查看</Button>
                    </Link>
                )
            }
        }
    }

    render() {
        return (
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 2,
                }}
                dataSource={Data}
                renderItem={item => (
                    <List.Item actions={[this.jump(item)]}>
                        <List.Item.Meta
                            title={item.title}
                            description={item.description}
                        />
                        <div>{item.time}</div>
                    </List.Item>
                )}
            />
        );
    }
}

