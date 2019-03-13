import React from 'react';
import ReactDOM from 'react-dom';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
       <div>123123</div>
    </LocaleProvider>,
    document.getElementById("root")
)