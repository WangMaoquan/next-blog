import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import axios from 'axios';
import servicePath from '../../Api';
import '../../styles/components/header.css';
import { Row, Col, Menu } from 'antd';
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
  MessageOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(servicePath.getTypeInfo);
      setNavArray(res.data.data);
    };
    fetchData();
  }, []);
  //跳转到列表页
  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push('/');
      setTimeout(function () {
        location.reload();
      }, 1000);
    } else if (e.key == 5) {
      Router.push('/login');
    } else {
      Router.push('/List?id=' + e.key);
    }
  };
  const showIcon = (iconName) => {
    switch(iconName) {
      case 'youtube':
        return <YoutubeOutlined />;
      case 'message':
        return <MessageOutlined />;
      case 'smile':
        return <SmileOutlined />
    }
  };
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="sign">
            <span className="fast-flicker">Decade</span>
            <span className="flicker">W</span>
          </span>
          <span className="header-txt">讨厌自己努力奋斗的样子</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu
            mode="horizontal"
            onClick={handleClick}
            overflowedIndicator={
              <span>
                <MenuUnfoldOutlined />
              </span>
            }
          >
            <Menu.Item key="0">
              <HomeOutlined />
              首页
            </Menu.Item>
            {navArray.map((item) => (
              <Menu.Item key={item.Id}>
                {showIcon(item.icon)}
                {item.typeName}
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
