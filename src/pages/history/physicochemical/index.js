import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Icon } from "antd";
import './index.less';
import $ from "jquery";

export default class Physicochemical extends Component{
    constructor(props){
        super(props);
        this.state={
            data: {
                RecordInfos:[]
            }
        }
    }

    componentWillMount() {
        let Id = this.props.location.state.Id;
        let set =(data)=> {
            this.setState({data:data.Data})
        };
        $.ajax({
            type:"GET",
            url:"http://localhost:5010/gaugerecord/get/getById",
            data:{Id: Id},
            dataType:"Json",
            success: (data) => {
                set(data);
            },
            async:true
        })
    }

    getContent = (data) =>{
        console.log('@123',data)
        if (data) {
            return data.RecordInfos.map((item,index) =>{
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
        console.log('@data',data)
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