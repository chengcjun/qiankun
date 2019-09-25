/**
 * @author Kuitos
 * @since 2019-05-16
 */

import React from 'react';
import style from './index.less';

export default function Framework(props) {

  const { content, loading } = props;

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
      <header className={style.header}>
        <nav>
          <ol>
            <li><a onClick={() => goto('react app', '/react')} title='react16 + antd3'>子应用1</a></li>
            <li><a onClick={() => goto('react15 app', '/15react15')} title='react15 + antd2'>子应用2</a></li>
            <li><a onClick={() => goto('vue app', '/vue')} title='vue2 + element2'>子应用3</a></li>
          </ol>
        </nav>
      </header>
      {
        // <button onClick={setInterval}>set master interval</button>
      }
      <div className={style.body}>
        {loading ? <div className={style.loading}>loading...</div> : null}
        <div dangerouslySetInnerHTML={{ __html: content }} className={style.appContainer}/>
      </div>
    </>

  );
}
