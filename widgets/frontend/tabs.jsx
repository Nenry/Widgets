import React from 'react';
import Header from './header';

class Tabs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tabs: props.tabs,
        selectedTab: 0
      };
    }

  render() {
    const selectedTab = this.state.tabs[this.state.selectedTab];
    // const tabBar
    const tabHeaders = this.state.tabs.map(obj =>  obj.title );
    return(
      <div id="tabs-container">
        <Header tabHeaders={tabHeaders} selected={this.state.selectedTab}/>

        <article id="tab-content">
          <p>{selectedTab.content}</p>
        </article>
      </div>
    );
  }

}
export default Tabs;
