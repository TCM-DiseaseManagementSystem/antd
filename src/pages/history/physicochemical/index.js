import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Icon } from "antd";
import './index.less';
import $ from "jquery";

export default class Physicochemical extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                Data: {
                    GaugeRecord: {
                        Id: "3001",
                        GaugeId: "1001",
                        GaugeName: "测试量表1"
                    },
                    RecordInfos: [
                        {
                            InfoId: "4001",
                            RecordId: "3001",
                            TopicId: "2001",
                            GroupTime: "2019-02-22",
                            ItemValue: "10",
                            ItemResult: "异常",
                            ExceptionType: 1,
                            GaugeId: "1001",
                            GroupName: "组1",
                            GroupOrder: 1,
                            Title: "项目1",
                            Order: 1,
                            Type: 1
                        },
                        {
                            InfoId: "4003",
                            RecordId: "3001",
                            TopicId: "2003",
                            GroupTime: "2019-02-22",
                            ItemValue: "2",
                            ItemResult: "异常",
                            ExceptionType: 2,
                            GaugeId: "1001",
                            GroupName: "组1",
                            GroupOrder: 1,
                            Title: "项目2",
                            Order: 2,
                            Type: 2
                        },
                        {
                            InfoId: "4002",
                            RecordId: "3001",
                            TopicId: "2002",
                            GroupTime: "2019-02-22",
                            ItemValue: "1",
                            ItemResult: "正常",
                            ExceptionType: 0,
                            GaugeId: "1001",
                            GroupName: "组2",
                            GroupOrder: 2,
                            Title: "项目1",
                            Order: 1,
                            Type: 1
                        }
                    ]
                },
                Message: "",
                InnerMessage: "",
                Success: true
            },
        }
    }

    // componentWillMount() {
    //     let set =(data)=> {
    //         this.setState({data:data.Data})
    //     };
    //     $.ajax({
    //         type:"GET",
    //         url:"http://localhost:5010/gaugerecord/get/getById",
    //         data:{Id: this.props.location.state.Id},
    //         dataType:"Json",
    //         success: (data) => {
    //             set(data);
    //         },
    //         async:true
    //     })
    // }

    getContent = (data) =>{
        if (data) {
            return data.Data.RecordInfos.map((item,index) =>{
                return(
                    <div key={index}>
                        <span className={'groupName'}>{item.GroupName}</span>
                        <div className={'physicochemical-content-detail'}>
                            <ul className={'physicochemical-content-details'}>
                                <li>{item.Title}</li>
                            </ul>
                            <ul className={'physicochemical-content-details'}>
                                <li>{item.ItemResult}{item.ExceptionType === '1' ? <Icon type='arrow-up' /> : <Icon type='arrow-down' /> }</li>
                            </ul>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        const { data } = this.state;
        return(
            <div className={'physicochemical-content'}>
                <h1>理化检查详情</h1>
                <div className={'physicochemical-content-title'}>
                    <span>测定项目</span>
                    <span>测定结果</span>
                </div>
                {this.getContent(data)}
            </div>
        )
    }
}