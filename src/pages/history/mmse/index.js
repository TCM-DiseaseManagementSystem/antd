import React, { Component } from 'react';
import './index.less';

export default class MMSE extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'mmse-content'}>
                <div className={'score'}>
                    <div>总得分</div>
                    <div>0</div>
                </div>
                <div className={'mmse-content-name'}>
                    <span className={'mmse-content-topic'}>Ⅰ定向力（10分）</span>
                    <div className={'mmse-content-detail'}>
                        <ul className={'mmse-content-detail-title'}>
                            <li>1.星期几</li>
                            <li>2.几号</li>
                            <li>3.几月</li>
                            <li>4.什么季节</li>
                            <li>5.哪一年</li>
                            <li>6.省市</li>
                            <li>7.区县</li>
                            <li>8.街道或乡</li>
                            <li>9.什么地方</li>
                            <li>10.第几层楼</li>
                        </ul>
                        <ul className={'mmse-content-detail-score'}>
                            <li>+1</li>
                            <li>+1</li>
                            <li>+1</li>
                            <li>+1</li>
                            <li>+1</li>
                            <li>+1</li>
                            <li>+1</li>
                            <li>+1</li>
                            <li>+1</li>
                            <li>+1</li>
                        </ul>
                    </div>
                </div>
                <div className={'mmse-content-name'}>
                    <span className={'mmse-content-topic'}>Ⅱ记忆力（3分）</span>
                    <div className={'mmse-content-detail'}>
                        <ul className={'mmse-content-detail-title'}>
                            <li>11.皮球</li>
                            <li>12.国旗</li>
                            <li>13.树皮</li>
                        </ul>
                        <ul className={'mmse-content-detail-score'}>
                            <li>+1</li>
                            <li>+1</li>
                            <li>+1</li>
                        </ul>
                    </div>
                </div>
                <div className={'mmse-content-name'}>
                    <span className={'mmse-content-topic'}>Ⅲ 注意力和计算力（10分）</span>
                    <div className={'mmse-content-detail'}>
                        <ul className={'mmse-content-detail-title'}>
                            <li>14.100-7=93</li>
                            <li>15.（93）-7=86</li>
                            <li>16.（86）-7=79</li>
                            <li>17.（79）-7=72</li>
                            <li>18.（72）-7=65</li>
                        </ul>
                        <ul className={'mmse-content-detail-score'}>
                            <li>+2</li>
                            <li>+2</li>
                            <li>+2</li>
                            <li>+2</li>
                            <li>+2</li>
                        </ul>
                    </div>
                </div>
                <div className={'mmse-content-name'}>
                    <span className={'mmse-content-topic'}>Ⅳ回忆能力（10分）</span>
                    <div className={'mmse-content-detail'}>
                        <ul className={'mmse-content-detail-title'}>
                            <li>19.皮球</li>
                            <li>20.国旗</li>
                            <li>21.树木</li>
                        </ul>
                        <ul className={'mmse-content-detail-score'}>
                            <li>+2</li>
                            <li>+3</li>
                            <li>+4</li>
                        </ul>
                    </div>
                </div>
                <div className={'mmse-content-name'}>
                    <span className={'mmse-content-topic'}>Ⅴ语言能力（10分）</span>
                    <div className={'mmse-content-detail'}>
                        <ul className={'mmse-content-detail-title'}>
                            <li>22.命名能力</li>
                            <li>23.复述能力</li>
                            <li>24.三步命令</li>
                            <li>25.阅读能力</li>
                            <li>26.书写能力</li>
                        </ul>
                        <ul className={'mmse-content-detail-score'}>
                            <li>+2</li>
                            <li>+2</li>
                            <li>+2</li>
                            <li>+2</li>
                            <li>+2</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}