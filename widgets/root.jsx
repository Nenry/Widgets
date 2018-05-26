import React from "react";
import Clock from "./frontend/clock";
import Tabs from './frontend/tabs';

const Root = () => (
  <div>
    <Clock />
    <br />
    <Tabs tabs =
      {[{title:  'tab1', content: 'content1'},
      {title:  'tab2', content: 'content2'},
      {title:  'tab3', content: 'content3'}]}/>
  </div>
);

export default Root;
