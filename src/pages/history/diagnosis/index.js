import React, { Component } from 'react';
import './index.less';
import $ from "jquery";

export default class Diagnosis extends Component{
    constructor(props) {
        super(props);
        this.state={
            data: {},
        }
    }

    componentWillMount() {
        let set =(data)=> {
            this.setState({data:data.Data})
        };
        $.ajax({
            type:"GET",
            url:"http://localhost:5010/medicalrecord/get/getById",
            data:{Id: this.props.location.state.Id},
            dataType:"Json",
            success: (data) => {
                set(data);
            },
            async:true
        })
    }

    renderDiagnosisDetail = (data) =>{
        if (data) {
            return data.map((item,index) =>{
                return(
                    <span key={index}>{item.DiagnoseName}、</span>
                )
            })
        }
    }

    renderFourInfo = (data) =>{
        if (data){
            return data.map((item,index) =>{
                return(
                    <span key={index}>{item.SymptomName}、</span>
                )
            })
        }
    }

    getDiagnosisDetail = (data) =>{
        if (data) {
            return(
                <div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>主诉：</span>
                        <span className={'right-span'}>{data.ZS}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>现病史:</span>
                        <span className={'right-span'}>{data.XBS}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>既往史:</span>
                        <span className={'right-span'}>{data.JWS}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>过敏史:</span>
                        <span className={'right-span'}>{data.GMS}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>体格检查：</span>
                        <span className={'right-span'}>{data.TGJC}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>中医诊断：</span>
                        <span className={'right-span'}>{this.renderDiagnosisDetail(data.Diagnoses)}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>四诊信息：</span>
                        {this.renderFourInfo(data.Symptoms)}
                    </div>
                </div>
            )
        }
    }

    render() {
        const { data } = this.state
        return(
            <div className={'diagnosis-content'}>
                <h1>四诊数据详情</h1>
                {this.getDiagnosisDetail(data)}
            </div>
        )
    }
}