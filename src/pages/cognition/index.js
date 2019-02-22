import React, { Component } from 'react';

export default class Cognition extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>
                    <span>主观认知下降，以下几个方面是否有问题？（受访者需要即刻回答）</span>
                    <ul>
                        <li>1.记忆力（是/否）</li>
                        <li>2.语言/找词困难</li>
                        <li>3.组织能力/执行能力</li>
                        <li>4.注意力/专心</li>
                        <li>5.其他认知功能方面</li>
                    </ul>
                </div>
                <div>
                    <span>记忆力</span>
                    <ul>
                        <li>6.请记住五个词语：教堂、红色、气球、荷花、鼠标（嘱咐患者复述一遍，不计分）</li>
                    </ul>
                </div>
                <div>
                    <span>执行能力及空间思维能力</span>
                    <ul>
                        <li>7.画钟实验：请受试者画个钟表（说明：钟表轮廓1分，数字1分，指针1分）</li>
                    </ul>
                </div>
                <div>
                    <span>记忆力</span>
                    <ul>
                        <li>8.请重复刚才的5个词语：每个词1分。</li>
                    </ul>
                </div>
            </div>
        )
    }
}