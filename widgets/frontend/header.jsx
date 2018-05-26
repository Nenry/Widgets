import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ul id="tab-bar">
      {this.props.tabHeaders.map((obj, i) => {
        if (i === this.props.selected) {
          return <h1 key={i} id="selected-tab">{obj}</h1>;
        }else {
          return <h1 key={i}>{obj}</h1>;
        }})}
    </ul>
  );
  }
}

export default Header;
