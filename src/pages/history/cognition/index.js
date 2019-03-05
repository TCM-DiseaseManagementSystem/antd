import React, { Component } from 'react';
import './index.less';
import $ from "jquery";

export default class Cognition extends Component{
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
            url:"http://localhost:5010/questionnairerecord/get/getById",
            data:{Id: this.props.location.state.Id},
            dataType:"Json",
            success: (data) => {
                set(data);
            },
            async:true
        })
    }

    renderGroupName = (data,index) =>{
        // console.log('@data',data)
    }

    renderRow = (data) =>{
        if (data){
            return data.map((item,index) =>{
                return (
                    <div key={index}>
                        <div className={'cognition-content-name'}>
                            <div className={'cognition-content-detail'}>
                                <ul className={'cognition-content-detail-title'}>
                                    <li>{item.TopicInfo.Order}.{item.TopicInfo.Title}</li>
                                </ul>
                                <ul className={'cognition-content-detail-score'}>
                                    <li>{item.TopicInfo.TotalScore}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    renderItem = (data) =>{
        return(
            <div>
                <div className={'score'}>
                    <div>总得分</div>
                    <div>{data.Score}</div>
                </div>
                {/*{this.renderGroupName(data[0].Infos)}*/}
                {this.renderRow(data.Infos)}
            </div>
        )
    }

    render() {
        const { data } = this.state;
        return(
            <div className={'cognition-content'}>
                {this.renderItem(data)}
            </div>
        )
    }
}