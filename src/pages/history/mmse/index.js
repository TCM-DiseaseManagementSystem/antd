import React, { Component } from 'react';
import './index.less';

const data = [
    {
        Id: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
        RespondentId: "fb2413f6-7cea-ea8e-82b3-17b6a9327b68",
        QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
        QuestionnaireName: "MMSE评分量表",
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
                    Title: "星期几",
                    Image: "",
                    Order: 1,
                    GroupName: "定向力",
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
                    Title: "几号",
                    Image: "",
                    Order: 2,
                    GroupName: "定向力",
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
                    Title: "几月",
                    Image: "",
                    Order: 3,
                    GroupName: "定向力",
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
                    Title: "什么季节",
                    Image: "",
                    Order: 4,
                    GroupName: "定向力",
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
                    Title: "哪一年",
                    Image: "",
                    Order: 5,
                    GroupName: "定向力",
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
                    Title: "省市",
                    Image: "",
                    Order: 6,
                    GroupName: "定向力",
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
                    Title: "区县",
                    Image: "",
                    Order: 7,
                    GroupName: "定向力",
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
                    Title: "街道或乡",
                    Image: "",
                    Order: 8,
                    GroupName: "定向力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 5,
                Order: 8,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "什么地方",
                    Image: "",
                    Order: 9,
                    GroupName: "定向力",
                    TotalScore: 1,
                    Type: 1
                },
                Score: 5,
                Order: 9,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "第几层楼",
                    Image: "",
                    Order: 10,
                    GroupName: "定向力",
                    TotalScore: 1,
                    Type: 1
                },
                Score: 5,
                Order: 10,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "皮球",
                    Image: "",
                    Order: 11,
                    GroupName: "记忆力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 11,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "国旗",
                    Image: "",
                    Order: 12,
                    GroupName: "记忆力",
                    TotalScore: 1,
                    Type: 1
                },
                Score: 1,
                Order: 12,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "树木",
                    Image: "",
                    Order: 13,
                    GroupName: "记忆力",
                    TotalScore: 3,
                    Type: 1
                },
                Score: 5,
                Order: 13,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "100-7=93",
                    Image: "",
                    Order: 14,
                    GroupName: "注意力和计算力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 14,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "（93）-7=86",
                    Image: "",
                    Order: 15,
                    GroupName: "注意力和计算力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 15,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "（79）-7=72",
                    Image: "",
                    Order: 16,
                    GroupName: "注意力和计算力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 16,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "（93）-7=86",
                    Image: "",
                    Order: 17,
                    GroupName: "注意力和计算力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 17,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "（72）-7=65",
                    Image: "",
                    Order: 18,
                    GroupName: "注意力和计算力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 18,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "皮球",
                    Image: "",
                    Order: 19,
                    GroupName: "回忆能力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 19,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "国旗",
                    Image: "",
                    Order: 20,
                    GroupName: "回忆能力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 20,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "树木",
                    Image: "",
                    Order: 21,
                    GroupName: "回忆能力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 21,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "命名能力",
                    Image: "",
                    Order: 22,
                    GroupName: "语言能力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 22,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "复述能力",
                    Image: "",
                    Order: 23,
                    GroupName: "语言能力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 23,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "三步命令",
                    Image: "",
                    Order: 24,
                    GroupName: "语言能力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 24,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "阅读能力",
                    Image: "",
                    Order: 25,
                    GroupName: "语言能力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 25,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "书写能力",
                    Image: "",
                    Order: 26,
                    GroupName: "语言能力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 26,
                Images: []
            },
            {
                Id: "0e0499e0-1c8a-4024-bca5-73f330a1da1c",
                RecordId: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
                TopicId: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                TopicInfo: {
                    Id: "0a7c71b8-02f2-49c2-a687-f206a7b4719f",
                    QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
                    Title: "结构能力",
                    Image: "",
                    Order: 27,
                    GroupName: "语言能力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 27,
                Images: []
            },
        ],
        Images: []
    }
];

export default class MMSE extends Component{
    constructor(props) {
        super(props);
    }

    renderGroupName = (data,index) =>{
        console.log('@data',data)
    }

    renderRow = (data) =>{
        if (data) {
            return data.map((item,index) =>{
                return(
                    <div className={'mmse-content-name'}>
                        {/*<span className={'mmse-content-topic'}>Ⅰ定向力（10分）</span>*/}
                        <div className={'mmse-content-detail'}>
                            <ul className={'mmse-content-detail-title'}>
                                <li>{item.TopicInfo.Order}.{item.TopicInfo.Title}</li>
                            </ul>
                            <ul className={'mmse-content-detail-score'}>
                                <li>{item.TopicInfo.TotalScore}</li>
                            </ul>
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
            <div className={'mmse-content'}>
                {this.renderItem(data)}
            </div>
        )
    }
}