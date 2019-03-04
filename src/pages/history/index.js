import React, { Component } from 'react';
import {
    List, Avatar, Button, Skeleton, Popconfirm,
} from 'antd';
import {Link} from "react-router-dom";
import $ from "jquery";
import './index.less';
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
    },
    {
        title: 'MoCA评分量表',
        description: '100',
        time: '2018-12-20'
    }
];

export default class History extends Component{
    constructor(props) {
        super(props);
        this.state={
            dataSource:[],
        }
    }

    componentWillMount() {
        let set =(data)=> {
            this.setState({dataSource:data.Data})
        };
        $.ajax({
            type:"GET",
            url:"http://localhost:5010/visit/get/GetRespondentRecord",
            data:{RespondentId: this.props.location.state.key},
            dataType:"Json",
            success: (data) => {
                set(data);
            },
            async:true
        })
    }

    selectDetaile = (data) =>{
        if (data) {
            if (data.QuestionnaireRecords) {
                if (data.QuestionnaireRecords.QuestionnaireName === '认知筛查量表得分' ) {
                    return(
                        <Link to="/cognition">
                            <Button onClick={() => this.handleEdit}>查看</Button>
                        </Link>
                    )
                }else if (data.QuestionnaireRecords.QuestionnaireName === 'MMSE评分量表') {
                    return(
                        <Link to="/mmse">
                            <Button onClick={() => this.handleEdit}>查看</Button>
                        </Link>
                    )
                } else if (data.QuestionnaireRecords.QuestionnaireName === 'MoCA评分量表') {
                    return(
                        <Link to="/moca">
                            <Button onClick={() => this.handleEdit}>查看</Button>
                        </Link>
                    )
                }
            }else if (data.MedicalRecords) {
                return(
                    <Link to="/diagnosis">
                        <Button onClick={() => this.handleEdit}>查看</Button>
                    </Link>
                )
            }else if (data.GaugeRecords) {
                return(
                    <Link to={'/physicochemical'}>
                        <Button onClick={() => this.handleEdit}>查看</Button>
                    </Link>
                )
            }
        }
    }

    getContent = (data) =>{
        if (data) {
            return (
                <div>
                    {data.GaugeRecords ? data.GaugeRecords.map((item,index) =>{
                        return(
                            <div className={'detail-content'} key={index}>
                                <div className={'detail-content-title'}>
                                    <span className={'detail-content-titles'}>生理数据采集</span>
                                    <span className={'detail-content-dels'}>总体正常，部分指标偏高。</span>
                                </div>
                                <div className={'detail-content-time'}>{item.CreatedAt}</div>
                                <div className={'detail-content-btn'}>{this.selectDetaile(data)}</div>
                            </div>
                        )
                    }) : null}
                    {data.MedicalRecords ? data.MedicalRecords.map((item,index) =>{
                        return(
                            <div className={'detail-content'} key={index}>
                                <div className={'detail-content-title'}>
                                    <span className={'detail-content-titles'}>四诊信息采集</span>
                                    <span
                                        className={'detail-content-dels'}>望闻问切，体形结实，肌肉充实，皮肤润泽，表示体格强壮，正气充盛；形体瘦弱，肌肉瘦削，皮肤枯燥，表示衰弱，正气不足。</span>
                                </div>
                                <div className={'detail-content-time'}>
                                    {item.MedicalRecords.CreatedAt}
                                </div>
                                <div className={'detail-content-btn'}>{this.selectDetaile(data)}</div>
                            </div>
                        )
                    }): null}
                    {data.QuestionnaireRecords ? data.QuestionnaireRecords.map((item,index) =>{
                        return(
                            <div className={'detail-content'} key={index}>
                                <div className={'detail-content-title'}>
                                    <span className={'detail-content-titles'}>{item.QuestionnaireName}</span>
                                    <span className={'detail-content-dels'}>{item.TotalScore}</span>
                                </div>
                                <div className={'detail-content-time'}>{item.CreatedAt}</div>
                                <div className={'detail-content-btn'}>{this.selectDetaile(data)}</div>
                            </div>
                        )
                    }): null}
                </div>
            )
        }
    }

    render() {
        const { dataSource } = this.state;
        console.log('@dataSource',dataSource)
        return (
            <div>
                {this.getContent(dataSource)}
            </div>
        );
    }
}

