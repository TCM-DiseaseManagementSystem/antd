import React, { Component, Fragment } from 'react';
import Button from 'antd/lib/button';
import { Row, Col } from 'antd';
import Header from './component/Header';
import NavLeft from './component/Navleft';
import Content from './component/Content';
import './App.css';
import Footer from "./component/Footer";

class Admin extends Component {
    render() {
        return (
            <Row className={'container'}>
                    <Col span={4} className={"nav-left"}>
                        <NavLeft />
                    </Col>
                    <Col span={20} className={'main'}>
                        <Header />
                        <Row className={"content"}>
                            {this.props.children}
                        </Row>
                        <Footer/>
                    </Col>
            </Row>
        );
    }
}

export default Admin;