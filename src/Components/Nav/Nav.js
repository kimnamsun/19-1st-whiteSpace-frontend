import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './Component/Category';
import './Nav.scss';

export class Nav extends Component {
  constructor() {
    super();
    this.state = {
      checkScrollTop: true,
      categoryList: [],
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    fetch('http://localhost:3000/data/category.json', {
      // fetch('http://10.58.0.130:8000/nav', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.categories);
        data.categories.unshift({
          category_id: 0,
          category_name: 'All',
        });
        this.setState({
          categoryList: data.categories,
        });
        console.log(this.state.categoryList);
      });
  }

  handleScroll = e => {
    // const { innerHeight } = window;
    // const { scrollHeight } = document.body;
    const myScroll = e.srcElement.scrollingElement.scrollTop;
    // console.log('전체 body 의 높이 : ' + scrollHeight);
    // console.log('전체 스크롤바 높이 : ' + innerHeight);
    // console.log('현재 스크롤 위치 : ' + myScroll);
    // console.log(this.state.checkScrollTop);
    // console.log(this.state.checkScrollTop === true);
    // console.log(this.state.checkScrollTop === false);
    const checkScroll =
      (this.state.checkScrollTop === true && myScroll > 0) ||
      (this.state.checkScrollTop === false && Number(myScroll) === 0);

    // console.log(checkScroll);
    // 스크롤이 최상단이거나 아니거나 변경할 필요가 있을 때만 변경해주도록 함.
    if (checkScroll) {
      this.setState({
        checkScrollTop: myScroll > 0 ? false : true,
      });
    }
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { categoryList, checkScrollTop } = this.state;
    return (
      <div id="nav" className={!checkScrollTop && 'scrollTopOff'}>
        <nav>
          <h1>여백 0100</h1>
          <div className="navLeftMenu">
            <Category categoryList={categoryList} />
          </div>
          <div className="navRightMenu">
            <ul>
              <li>
                <Link to="/">로그인</Link>
              </li>
              <li>
                <Link to="/">회원가입</Link>
              </li>
              <li>
                <Link to="/">장바구니</Link>
              </li>
              <li>
                <button>
                  <i class="fas fa-search"></i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

const navRightMenu = [
  {
    id: 1,
    text: '로그인',
  },
  {
    id: 2,
    text: '회원가입',
  },
  {
    id: 3,
    text: '장바구니',
  },
];
