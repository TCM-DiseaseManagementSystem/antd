import  React, { Component } from 'react';
import './index.less';
import $ from "jquery";

export default class MOCA extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:{}
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
        if (data) {
            return data.map((item,index) =>{
                return(
                    <div className={'moca-content-name'}>
                        <div className={'moca-content-name-detail'}>
                            {(index>0 && data[index-1].TopicInfo.GroupName == item.TopicInfo.GroupName)?
                                null:item.TopicInfo.GroupName}
                        </div>
                        <div className={'moca-content-detail'}>
                            <ul className={'moca-content-detail-title'}>
                                <li>{item.TopicInfo.Order}.{item.TopicInfo.Title}</li>
                            </ul>
                            <ul className={'moca-content-detail-score'}>
                                <li>{item.Score}</li>
                            </ul>
                        </div>
                    </div>
                )
            })
        }
    }

    getContent = (data) =>{
        if (data){
            return(
                <div>
                    <div className={'score'}>
                        <div>{data.Ques}总得分</div>
                        <div>{data.Score}</div>
                    </div>
                    {this.renderRow(data.Infos)}
                </div>
            )
        }
    }

    render() {
        const { data } = this.state;
        return(
            <div className={'moca-content'}>
                {this.getContent(data)}
            </div>
        )
    }
}