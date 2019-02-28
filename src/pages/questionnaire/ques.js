import React, { Component } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import './index.less'
const data=[
    {
        name:'MoCA评分量表',
        TotalScore:25
    },
    {
        name:'认知筛查量表',
        TotalScore:30
    }
]
export  default class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            data:data,
            columns:[
                {
                    title:'题目',
                    dataIndex:'name',
                    key:'name',
                    align:'center'
                },
                {
                    title:'分数',
                    dataIndex:'TotalScore',
                    key:'TotalScore',
                    align:'center'
                },
                {
                    title:'操作',
                    dataIndex:'operation',
                    align:'center',
                    render:(text,record)=>(
                        this.state.data.length>=1?
                            (   <div className='operation'>
                                    <Link to='/edit'>
                                    <Button className='btn'>编辑</Button>
                                    </Link>
                                <Popconfirm  title="确定删除?"  okText="确认" cancelText="取消" onConfirm={() => this.handleDelete(record.key)}>
                                    <Button>删除</Button>
                                </Popconfirm>
                                </div>
                            ) : null)
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <Link to={'/add'}>
                <Button style={{marginBottom:5,float:'right'}}>添加</Button>
                </Link>
                <Table align={'center'} columns={this.state.columns} dataSource={this.state.data}></Table>
            </div>
        )
    }
}