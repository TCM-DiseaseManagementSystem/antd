import React, { Component } from 'react';
import './index.less';

export default class Diagnosis extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'diagnosis-content'}>
                <h1>四诊数据详情</h1>
                <div className={'diagnosis-content-detail'}>
                    <span className={'left-span'}>主诉：</span>
                    <span className={'right-span'}>主诉是住院病历中第一项内容，好的主诉需精炼准确；尽可能用病人自己描述的症状，不用诊断用语；要与现病史一致；遵循客观、实事求是的原则。</span>
                </div>
                <div className={'diagnosis-content-detail'}>
                    <span className={'left-span'}>现病史:</span>
                    <span className={'right-span'}>头昏脑涨。</span>
                </div>
                <div className={'diagnosis-content-detail'}>
                    <span className={'left-span'}>既往史:</span>
                    <span className={'right-span'}>无。</span>
                </div>
                <div className={'diagnosis-content-detail'}>
                    <span className={'left-span'}>体格检查：</span>
                    <span className={'right-span'}>无大碍。</span>
                </div>
                <div className={'diagnosis-content-detail'}>
                    <span className={'left-span'}>中医诊断：</span>
                    <span className={'right-span'}>风寒引起的风寒感冒。</span>
                </div>
                <div className={'diagnosis-content-detail'}>
                    <span className={'left-span'}>四诊信息：</span>
                    <span className={'right-span'}>nv fkodlrcfl</span>
                </div>
            </div>
        )
    }
}