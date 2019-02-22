import React, { Component } from 'react';

export default class Diagnosis extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>主诉：</div>
                <div>现病史:</div>
                <div>既往史:</div>
                <div>体格检查：</div>
                <div>中医诊断：</div>
                <div>四针信息：</div>
            </div>
        )
    }
}