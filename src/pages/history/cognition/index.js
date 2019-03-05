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

    renderRow = (data) =>{
        if (data){
            return data.map((item,index) =>{
                return (
                    <div key={index}>
                        <div className={'cognition-content-name'}>
                            <div className={'cognition-content-groupname'}>
                                {(index>0 && data[index-1].TopicInfo.GroupName == item.TopicInfo.GroupName)?
                                    null:item.TopicInfo.GroupName}
                            </div>
                            <div className={'cognition-content-detail'}>
                                <ul className={'cognition-content-detail-title'}>
                                    <li>{item.TopicInfo.Order}.{item.TopicInfo.Title}</li>
                                </ul>
                                <ul className={'cognition-content-detail-score'}>
                                    <li>{item.Score}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    getContent = (data) =>{
        return(
            <div>
                <div className={'score'}>
                    <div>{data.QuestionnaireName}总得分</div>
                    <div>{data.Score}</div>
                </div>
                {this.renderRow(data.Infos)}
            </div>
        )
    }

    render() {
        const { data } = this.state;
        return(
            <div className={'cognition-content'}>
                {this.getContent(data)}
            </div>
        )
    }
}