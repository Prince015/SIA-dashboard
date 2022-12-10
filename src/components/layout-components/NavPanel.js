import React, { Component } from 'react';
import { SettingOutlined, UserOutlined, BellOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar, Badge, Drawer, Menu } from 'antd';
import ThemeConfigurator from './ThemeConfigurator';
import { connect } from "react-redux";
import { DIR_RTL } from 'constants/ThemeConstant';

export class NavPanel extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Menu mode="horizontal">
          <Menu.Item key="search" >
            <span><SearchOutlined className="nav-icon mr-0" /></span>
          </Menu.Item>
          <Menu.Item key="noto" >
            <span><BellOutlined className="nav-icon mr-0" /></span>
          </Menu.Item>
          <Menu.Item key="setting" onClick={this.showDrawer}>
            <span><SettingOutlined className="nav-icon mr-0" /></span>
          </Menu.Item>
          <Menu.Item key="avatar" >
            <Badge dot >
              <Avatar size={30} className="nav-icon mr-0" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Badge>
          </Menu.Item>
        </Menu>
        <Drawer
          title="Theme Config"
          placement={this.props.direction === DIR_RTL ? 'left' : 'right'}
          width={350}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <ThemeConfigurator />
        </Drawer>
      </>
    );
  }
}

const mapStateToProps = ({ theme }) => {
  const { locale } = theme;
  return { locale }
};

export default connect(mapStateToProps)(NavPanel);