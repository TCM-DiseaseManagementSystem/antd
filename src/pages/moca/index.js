import  React, { Component } from 'react';

export default class MOCA extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>总得分</div>
                <div>0</div>
                <div>
                    <span>视空间与执行功能</span>
                    <ul>
                        <li>1.</li>
                        <li>3.</li>
                        <li>3.画钟表（11点过10分）（3分）</li>
                    </ul>
                </div>
                <div>
                    <span>命名</span>
                    <ul>
                        <li>4.</li>
                        <li>5.</li>
                        <li>6.</li>
                    </ul>
                </div>
                <div>
                    <span>记忆</span>
                    <ul>
                        <li>7.（面孔、天鹅绒、教堂、菊花、红色）读出下列词语，然后由患者 重复上述过程2次，5分钟后回忆。（不计分）</li>
                    </ul>
                </div>
                <div>
                    <span>注意</span>
                    <ul>
                        <li>8.（21854顺背 742倒背）读出下列数字，请患者重复（每秒1个）。21854顺背 742倒背</li>
                        <li>9.（52139411806215194511141905112）读出下列数字，每当数字出现1时，患者敲一下桌面，错误数大于或等于2不给分。</li>
                        <li>10.100连续减7，答案93-86-79-72-65.4~5个正确给3分，2~3个正确给1分，全部错误为0分。</li>
                    </ul>
                </div>
                <div>
                    <span>语言</span>
                    <ul>
                        <li>11.重复：我只知道今天张亮是来帮过忙的人。狗在房间的时候，猫总是躲在沙发下面</li>
                        <li>12.流畅性：在1分钟内尽可能多地说出动物的名字。大于等于11个名称</li>
                    </ul>
                </div>
                <div>
                    <span>抽象</span>
                    <ul>
                        <li>13.词语相似性：香蕉-桔子=水果 [ ]火车-自行车[ ]手表-尺子</li>
                    </ul>
                </div>
                <div>
                    <span>延迟回忆</span>
                    <ul>
                        <li>14.回忆时不能提醒（面孔、天鹅绒、教堂、菊花、红色）</li>
                    </ul>
                </div>
                <div>
                    <span>定向</span>
                    <ul>
                        <li>15.日期几？</li>
                        <li>16.几月份？</li>
                        <li>17.年代？</li>
                        <li>18.星期几？</li>
                        <li>19.地点</li>
                        <li>20.城市</li>
                    </ul>
                </div>
            </div>
        )
    }
}