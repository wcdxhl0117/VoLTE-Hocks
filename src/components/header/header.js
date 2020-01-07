import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import { Link } from 'react-router-dom';

// 引入样式
import {
  HeaderWrapper,
} from './style'

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HeaderWrapper style={{marginBottom:'20px'}}>
        <Link style={{marginRight: '20px'}} to='/home'>To Home</Link>
        <Link to='/child'>To Child</Link>
        <span style={{paddingLeft: '20px'}}>{this.props.header_state}</span>
      </HeaderWrapper>
    );
  }
}

const mapState = (state) => {
  // 获取state
  return {
		header_state: state.getIn(['header', 'header_state'])
	}
}

const mapDispatch = (dispatch) => ({
  // 派发state
	changeHeaderData() {
		dispatch(actionCreators.asyncGet());
	}
});

export default connect(mapState, mapDispatch)(Header);
