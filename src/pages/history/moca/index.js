import  React, { Component } from 'react';
import './index.less';

const data = [
    {
        Id: "0c7523d0-d157-4918-9ba6-ecfa7bed8527",
        RespondentId: "fb2413f6-7cea-ea8e-82b3-17b6a9327b68",
        QuestionnaireId: "16c7071b-ec13-4788-bfce-123774b8e347",
        QuestionnaireName: "MoCA评分量查表",
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
                    Title: "",
                    Image: "",
                    Order: 1,
                    GroupName: "视空间与执行功能",
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
                    Title: "",
                    Image: "",
                    Order: 2,
                    GroupName: "视空间与执行功能",
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
                    Title: "画钟表（11点过10分）（3分）",
                    Image: "",
                    Order: 3,
                    GroupName: "视空间与执行功能",
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
                    Title: "",
                    Image: "",
                    Order: 4,
                    GroupName: "命名",
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
                    Title: "",
                    Image: "",
                    Order: 5,
                    GroupName: "命名",
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
                    Title: "",
                    Image: "",
                    Order: 6,
                    GroupName: "命名",
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
                    Title: "（面孔、天鹅绒、教堂、菊花、红色）读出下列词语，然后由患者 重复上述过程2次，5分钟后回忆。（不计分）",
                    Image: "",
                    Order: 7,
                    GroupName: "记忆",
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
                    Title: "（21854顺背 742倒背）读出下列数字，请患者重复（每秒1个）。21854顺背 742倒背",
                    Image: "",
                    Order: 8,
                    GroupName: "注意",
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
                    Title: "（52139411806215194511141905112）读出下列数字，每当数字出现1时，患者敲一下桌面，错误数大于或等于2不给分。",
                    Image: "",
                    Order: 9,
                    GroupName: "注意",
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
                    Title: "100连续减7，答案93-86-79-72-65.4~5个正确给3分，2~3个正确给1分，全部错误为0分。",
                    Image: "",
                    Order: 10,
                    GroupName: "注意",
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
                    Title: "重复：我只知道今天张亮是来帮过忙的人。狗在房间的时候，猫总是躲在沙发下面",
                    Image: "",
                    Order: 11,
                    GroupName: "语言",
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
                    Title: "流畅性：在1分钟内尽可能多地说出动物的名字。大于等于11个名称",
                    Image: "",
                    Order: 12,
                    GroupName: "语言",
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
                    Title: "词语相似性：香蕉-桔子=水果 [ ]火车-自行车[ ]手表-尺子",
                    Image: "",
                    Order: 13,
                    GroupName: "抽象",
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
                    Title: "回忆时不能提醒（面孔、天鹅绒、教堂、菊花、红色）",
                    Image: "",
                    Order: 14,
                    GroupName: "延迟回忆",
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
                    Title: "日期几？",
                    Image: "",
                    Order: 15,
                    GroupName: "定向",
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
                    Title: "几月份？",
                    Image: "",
                    Order: 16,
                    GroupName: "定向",
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
                    Title: "年代？",
                    Image: "",
                    Order: 17,
                    GroupName: "定向",
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
                    GroupName: "星期几？",
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
                    Title: "地点",
                    Image: "",
                    Order: 19,
                    GroupName: "定向",
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
                    Title: "城市",
                    Image: "",
                    Order: 20,
                    GroupName: "回忆能力",
                    TotalScore: 5,
                    Type: 1
                },
                Score: 1,
                Order: 20,
                Images: []
            }
        ],
        Images: []
    }
];

export default class MOCA extends Component{
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
                    <div className={'moca-content-name'}>
                        {/*<span className={'moca-content-name-detail'}>视空间与执行功能</span>*/}
                        <div className={'moca-content-detail'}>
                            <ul className={'moca-content-detail-title'}>
                                <li>{item.TopicInfo.Order}.{item.TopicInfo.Title}</li>
                            </ul>
                            <ul className={'moca-content-detail-score'}>
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
            <div className={'moca-content'}>
                {this.renderItem(data)}
            </div>
        )
    }
}