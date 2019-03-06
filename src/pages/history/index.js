import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import $ from "jquery";
import './index.less';

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

    getContent = (data) =>{
        if (data) {
            return (
                <div>
                    {data.GaugeRecords ? data.GaugeRecords.map((item,index) =>{
                        console.log('@item',item)
                        console.log('@id',item.Id)
                        return(
                            <div className={'detail-content'} key={index}>
                                <div className={'detail-content-title'}>
                                    <span className={'detail-content-titles'}>{item.GaugeName}</span>
                                    <span className={'detail-content-dels'}>总体正常，部分指标偏高。</span>
                                </div>
                                <div className={'detail-content-time'}>{item.CreatedAt}</div>
                                <div className={'detail-content-btn'}>
                                    <Link to={
                                        {
                                            pathname: '/physicochemical',
                                            state: {Id: item.Id},
                                        }
                                    }>
                                        <Button onClick={() => this.handleEdit}>查看</Button>
                                    </Link>
                                </div>
                            </div>
                        )
                    }) : null}
                    {data.MedicalRecords ? data.MedicalRecords.map((item,index) =>{
                        return(
                            <div className={'detail-content'} key={index}>
                                <div className={'detail-content-title'}>
                                    <span className={'detail-content-titles'}>四诊信息采集</span>
                                    <span className={'detail-content-dels'}>
                                        {item.Diagnoses.map((items,indexs) =>{
                                        return(
                                            <div key={indexs}>{items.DiagnoseName}、</div>
                                        )
                                        })
                                        }
                                    </span>
                                </div>
                                <div className={'detail-content-time'}>{item.CreatedAt}</div>
                                <Link to={
                                    {
                                        pathname: '/diagnosis',
                                        state: {Id: item.Id},
                                    }
                                }>
                                    <Button onClick={() => this.handleEdit}>查看</Button>
                                </Link>
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
                                {item.QuestionnaireId === '16c7071b-ec13-4788-bfce-123774b8e347' ?  <Link to={
                                    {
                                        pathname: '/cognition',
                                        state: { Id: item.Id}
                                    }
                                }>
                                    <Button onClick={() => this.handleEdit}>查看</Button>
                                </Link> : item.QuestionnaireId === '87f5a6b4-ee86-4b2f-a984-1dc6edc77e9c' ? <Link to={
                                    {
                                        pathname: '/mmse',
                                        state: { Id: item.Id}
                                    }
                                }>
                                    <Button onClick={() => this.handleEdit}>查看</Button>
                                </Link> : item.QuestionnaireId === '39c66d1e-cab6-412d-918b-5fb895e545d7' ? <Link to={
                                    {
                                        pathname: '/moca',
                                        state: { Id: item.Id}
                                    }
                                }>
                                    <Button onClick={() => this.handleEdit}>查看</Button>
                                </Link> : null
                                }
                            </div>
                        )
                    }): null}
                </div>
            )
        }
    }

    render() {
        const { dataSource } = this.state;
        return (
            <div>
                {this.getContent(dataSource)}
            </div>
        );
    }
}

