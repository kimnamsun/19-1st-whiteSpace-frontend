import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.scss';
import '../../../Styles/common.scss';

class Welcome extends Component {
  state = {
    welcomeUser: '',
  };

  componentDidMount() {
    fetch('/url', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          welcomeUser: data.email,
        });
      });
  }

  render() {
    const { welcomeUser } = this.state;

    return (
      <div id="mainBox">
        <main>
          <p>안녕하세요, {welcomeUser}님 여백 0100의 회원이 되신 것을</p>
          <p>진심으로 환영합니다.</p>
          <p>당신의 일상에 여백을 더하세요</p>
          <button>
            <Link to="/Main">여백 둘러보기</Link>
          </button>
        </main>
      </div>
    );
  }
}

export default Welcome;
