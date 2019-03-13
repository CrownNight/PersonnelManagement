import React from 'react';
import ReactDOM from 'react-dom';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import IndexView from './home/menu/index'

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
      <IndexView/>
    </LocaleProvider>,
    document.getElementById("root")
)