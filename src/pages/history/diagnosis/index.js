import React, { Component } from 'react';
import './index.less';

const data = [
    {
        Id: "b9d6c4fe-69f7-42f9-ab64-318af8e7f62a",
        RespondentId: "fb2413f6-7cea-ea8e-82b3-17b6a9327b68",
        ZS: "aa",
        XBS: "cc",
        JWS: "xx",
        GMS: "aa",
        TGJC: "sa",
        Diagnoses: [
            {
                Id: "09da15f8-903f-472a-93b4-d91c967871f9",
                RecordId: "b9d6c4fe-69f7-42f9-ab64-318af8e7f62a",
                DiagnoseId: "6dff6e7c-9eca-11e8-aeb3-00155dd71001",
                ParentId: "",
                DiagnoseName: "痹症",
                Order: 1,
                Type: 1
            },
            {
                Id: "79ed6aa0-322c-4ad3-ab43-b88502fe7444",
                RecordId: "b9d6c4fe-69f7-42f9-ab64-318af8e7f62a",
                DiagnoseId: "6dfea797-9eca-11e8-aeb3-00155dd71001",
                ParentId: "",
                DiagnoseName: "腰痛病",
                Order: 0,
                Type: 1
            },
            {
                Id: "c447c153-2136-4de2-98ca-7d258f1fac35",
                RecordId: "b9d6c4fe-69f7-42f9-ab64-318af8e7f62a",
                DiagnoseId: "f0d3d31d-9ecb-11e8-aeb3-00155dd71001",
                ParentId: "09da15f8-903f-472a-93b4-d91c967871f9",
                DiagnoseName: "温热壅滞证",
                Order: 0,
                Type: 2
            }
        ],
        Symptoms: [
            {
                Id: "2f2dacc3-4069-4996-bb12-8e2d64850aab",
                RecordId: "b9d6c4fe-69f7-42f9-ab64-318af8e7f62a",
                Order: 0,
                SymptomName: "踢腿等运动性抽动",
                SymptomId: "6ff0d278-9ecb-11e8-aeb3-00155dd71001",
                SymptomLevel: 1
            },
            {
                Id: "63927849-12c4-4005-88a7-293fbcf38228",
                RecordId: "b9d6c4fe-69f7-42f9-ab64-318af8e7f62a",
                Order: 1,
                SymptomName: "或月经失调",
                SymptomId: "6ff0d843-9ecb-11e8-aeb3-00155dd71001",
                SymptomLevel: 1
            }
        ],
        MedicalImgs: [],
        Diagnose: "",
        CreatedAt: "2019-01-05 17:40:32"
    }
];

export default class Diagnosis extends Component{
    constructor(props) {
        super(props);
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
                        <span className={'right-span'}>{data[0].ZS}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>现病史:</span>
                        <span className={'right-span'}>{data[0].XBS}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>既往史:</span>
                        <span className={'right-span'}>{data[0].JWS}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>过敏史:</span>
                        <span className={'right-span'}>{data[0].GMS}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>体格检查：</span>
                        <span className={'right-span'}>{data[0].TGJC}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>中医诊断：</span>
                        <span className={'right-span'}>{this.renderDiagnosisDetail(data[0].Diagnoses)}</span>
                    </div>
                    <div className={'diagnosis-content-detail'}>
                        <span className={'left-span'}>四诊信息：</span>
                        {this.renderFourInfo(data[0].Symptoms)}
                    </div>
                </div>
            )
        }
    }

    render() {
        return(
            <div className={'diagnosis-content'}>
                <h1>四诊数据详情</h1>
                {this.getDiagnosisDetail(data)}
            </div>
        )
    }
}