import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../Login.css';

const Login = ({
  status,
  onLogin,
  onChangeInput,
}) => {
  return (
    <div id="formContainer">
      <div id="login-form">
        {/* <form> */}
          <Input 
            className="int" 
            name="username"
            placeholder="사용자 이름"
            size="mini"
            onChange={onChangeInput} 
          />
          <Input 
            className="int" 
            name="password" 
            type="password" 
            placeholder="비밀번호" 
            size="mini" 
            onChange={onChangeInput}
          />
          <Button className="int" primary size="mini" onClick={onLogin}>로그인</Button>
          {status}
        {/* </form> */}
      </div>
    </div>
  );
};

Login.propTypes = {
  status: PropTypes.string,
  onLogin: PropTypes.func
};

Login.defaultProps = {
  status: 'LOGOUT',
  onLogin: (username, password) => { console.error("Login function not defined."); }
};

export default Login;