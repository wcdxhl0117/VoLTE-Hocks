import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

// 引入样式
import {
  ChildWrapper,
} from './style'

class Childpage extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  render() {
    return (
      <ChildWrapper onClick={this._handleClick}>
        Childpage {this.props.childpage_state}
      </ChildWrapper>
    );
  }
  _handleClick() {
    this.props.changeChildData();
  }
}

const mapState = (state) => {
  console.log(state.getIn(['childpage', 'childpage_state']))
  // 获取state
  return {
    childpage_state: state.getIn(['childpage', 'childpage_state'])
  }
}

const mapDispatch = (dispatch) => ({
  // 派发state
	changeChildData() {
		dispatch(actionCreators.asyncGet());
	}
});

export default connect(mapState, mapDispatch)(Childpage);
