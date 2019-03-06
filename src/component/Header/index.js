import React, { Component, Fragment } from 'react';
import { Row, Col, Button } from 'antd';
import {Link} from "react-router-dom";
import './index.less';

export default class Header extends  Component{
    constructor(props) {
        super(props);
        this.state={
            userName: 'snow'
        }
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <Row className="header-top">
                            <span>MIC社区管理系统</span>
                    </Row>
                    <Row className="breadcrumb">
                        <Col span={4} className="breadcrumb-title">
                           首页
                        </Col>
                        <Col span={20} className="welcome">
                            <span style={{ paddingRight: 20 }}>欢迎，{this.state.userName}</span>
                            <Link to='/login'>
                                <Button>登录</Button>
                            </Link>
                            <Link to='/register'>
                                <Button>注册</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}
