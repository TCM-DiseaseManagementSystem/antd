import React, { Component } from 'react';
import './index.less';

const data = [
        {
            Id: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
            RespondentId: "fb2413f6-7cea-ea8e-82b3-17b6a9327b68",
            QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
            QuestionnaireName: "认知筛查量表",
            TotalScore: 13,
            PassScore: 12,
            Score: 13,
            Infos: [
                {
                    Id: "0235ecf5-7623-4660-9a84-8380cd9959cc",
                    RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                    TopicId: "3dc9b1b9-653b-4d93-a07f-8223092ff72b",
                    TopicInfo: {
                        Id: "3dc9b1b9-653b-4d93-a07f-8223092ff72b",
                        QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                        Title: "记忆力(是/否)",
                        Image: "",
                        Order: 1,
                        GroupName: "主观认知下降.你觉得以下方面哪方面有问题？（受访者需要即刻回答）",
                        TotalScore: 1,
                        Type: 0
                    },
                    Score: 1,
                    Order: 1,
                    Images: []
                },
                {
                    Id: "6579fa33-a098-4dcd-a575-6b49f11a1585",
                    RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                    TopicId: "bf381da0-7cd5-4bf6-9a07-6eaae90a4db9",
                    TopicInfo: {
                        Id: "bf381da0-7cd5-4bf6-9a07-6eaae90a4db9",
                        QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                        Title: "语言 / 找词困难",
                        Image: "",
                        Order: 2,
                        GroupName: "主观认知下降.你觉得以下方面哪方面有问题？（受访者需要即刻回答）",
                        TotalScore: 1,
                        Type: 0
                    },
                    Score: 1,
                    Order: 2,
                    Images: [
                        {
                            Id: "bd4a0ab2-9488-44cf-a2c6-a0ffbb7773e5",
                            InfoId: "6579fa33-a098-4dcd-a575-6b49f11a1585",
                            RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                            Url: "/assets/images/upload/2019-01-05/1972acf8-a2ae-4ce1-ae5f-c019f1439ecd.jpg"
                        }
                    ]
                },
                {
                    Id: "98001842-7d2b-4ef1-b41d-605c339dc487",
                    RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                    TopicId: "40d7d9d8-1302-4b77-86fb-2ff5afccc9f8",
                    TopicInfo: {
                        Id: "40d7d9d8-1302-4b77-86fb-2ff5afccc9f8",
                        QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                        Title: "组织能力 / 计划能力",
                        Image: "",
                        Order: 3,
                        GroupName: "主观认知下降.你觉得以下方面哪方面有问题？（受访者需要即刻回答）",
                        TotalScore: 1,
                        Type: 0
                    },
                    Score: 1,
                    Order: 3,
                    Images: []
                },
                {
                    Id: "41bf2d98-a82c-4b25-aa3e-fa266f21b5f5",
                    RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                    TopicId: "9ec568f2-9a57-4ba5-a36b-9f234858f5fe",
                    TopicInfo: {
                        Id: "9ec568f2-9a57-4ba5-a36b-9f234858f5fe",
                        QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                        Title: "注意力 / 专心",
                        Image: "",
                        Order: 4,
                        GroupName: "主观认知下降.你觉得以下方面哪方面有问题？（受访者需要即刻回答）",
                        TotalScore: 1,
                        Type: 0
                    },
                    Score: 1,
                    Order: 4,
                    Images: []
                },
                {
                    Id: "0559d65e-a2b5-48ba-922f-6194499f0461",
                    RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                    TopicId: "1d4252b0-9555-454c-b459-abe9eb495892",
                    TopicInfo: {
                        Id: "1d4252b0-9555-454c-b459-abe9eb495892",
                        QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                        Title: "其他认知功能方面",
                        Image: "",
                        Order: 5,
                        GroupName: "主观认知下降.你觉得以下方面哪方面有问题？（受访者需要即刻回答）",
                        TotalScore: 1,
                        Type: 0
                    },
                    Score: 1,
                    Order: 5,
                    Images: []
                },
                {
                    Id: "676b4bfc-3b08-4554-8bc8-7ebc68bda2b2",
                    RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                    TopicId: "ec68d923-ab7b-4548-9b71-f3549204e2b1",
                    TopicInfo: {
                        Id: "ec68d923-ab7b-4548-9b71-f3549204e2b1",
                        QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                        Title: "请记住五个词语:教堂.红色.气球.荷花.鼠标（嘱患者复述一遍，不计分）",
                        Image: "",
                        Order: 6,
                        GroupName: "记忆力",
                        TotalScore: 0,
                        Type: 0
                    },
                    Score: 0,
                    Order: 6,
                    Images: []
                },
                {
                    Id: "73c0fe04-5593-4d1b-9d80-da3af0da706b",
                    RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                    TopicId: "8e7b06d3-0919-4cbc-8599-872ff315af8e",
                    TopicInfo: {
                        Id: "8e7b06d3-0919-4cbc-8599-872ff315af8e",
                        QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                        Title: "画钟试验：请受试者画个钟表:说明：钟表轮廓1分，数字1分，指针1分）",
                        Image: "",
                        Order: 7,
                        GroupName: "执行能力及空间思维能力",
                        TotalScore: 3,
                        Type: 1
                    },
                    Score: 3,
                    Order: 7,
                    Images: []
                },
                {
                    Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                    RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                    TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    TopicInfo: {
                        Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                        QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                        Title: "请重复刚才的五个词语:每个词1分。",
                        Image: "",
                        Order: 8,
                        GroupName: "记忆力",
                        TotalScore: 5,
                        Type: 1
                    },
                    Score: 5,
                    Order: 8,
                    Images: []
                }
            ],
            Images: []
        }
    ];

export default class Cognition extends Component{
    constructor(props) {
        super(props);
    }

    renderGroupName = (data,index) =>{
        console.log('@data',data)
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
        if (data){
            return(
                <div>
                    <div className={'score'}>
                        <div>总得分</div>
                        <div>{data[0].TotalScore}</div>
                    </div>
                    {this.renderGroupName(data[0].Infos)}
                    {this.renderRow(data[0].Infos)}
                </div>
            )
        }
    }

    render() {
        return(
            <div className={'cognition-content'}>
                {this.renderItem(data)}
            </div>
        )
    }
}