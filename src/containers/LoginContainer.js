import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from 'components/Login';
import * as AuthActions from 'store/modules/auth';

class LoginContainer extends Component {

  constructor() {
    super();
    this.state = {
      username: '', password: ''
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleLogin = () => {
    this.props.login(this.state.username, this.state.password);
  }

  handleChangeInput = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <div>
        <Login 
          status={this.props.status}
          onLogin={this.handleLogin}
          onChangeInput={this.handleChangeInput}
        />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   status: state.auth.status
// });

// const mapDispatchToProps = (dispatch) => ({
//   login: () => dispatch(AuthActions.login()),
// });

export default connect(
  (state) => ({
    statue: state.auth.status
  }),
  (dispatch) => bindActionCreators(AuthActions, dispatch)
)(LoginContainer);