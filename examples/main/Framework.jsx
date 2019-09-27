/**
 * @author Kuitos
 * @since 2019-05-16
 */

import React, { useState } from 'react';
import { Spin, Menu } from 'antd'
import style from './index.less';

export default function Framework(props) {

  const { content, loading } = props;

  const [ currentMenuItem, switchMenuItem ] = useState('1')

  function goto(title, href) {
    window.history.pushState({}, title, href);
  }

  function setInterval() {
    window.setInterval(() => {
      console.log('master interval');
    }, 1000);
  }

  return (
    <>
      <Menu defaultOpenKeys={['1']} onClick={(e) => {switchMenuItem(e.key); console.log(e)}} selectedKeys={[currentMenuItem]} mode='horizontal' theme='dark' className={style.header}>
        <Menu.Item key={'1'} onClick={() => goto('react app', '/react')} title='react16 + antd3'>子应用1</Menu.Item>
        <Menu.Item key={'2'} onClick={() => goto('react15 app', '/15react15')} title='react15 + antd2'>子应用2</Menu.Item>
        <Menu.Item key={'3'} onClick={() => goto('vue app', '/vue')} title='vue2 + element2'>子应用3</Menu.Item>
      </Menu>
      <Spin spinning={loading} size='large'>
        <div className={style.body}>
          <div dangerouslySetInnerHTML={{ __html: content }} className={style.appContainer} />
        </div>
      </Spin>
    </>

  );
}
