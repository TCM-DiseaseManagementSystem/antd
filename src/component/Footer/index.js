import React, { Component } from 'react';
import './index.less';

export default class Footer extends  Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'footer'}>
                MIC社区管理系统  Copyright©成都中医药大学数字医药研究所
            </div>
        )
    }
}