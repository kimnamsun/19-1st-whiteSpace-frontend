import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { popUpImage, API } from '../../config';
import Slider from './Components/Slider/Slider';
import BestProduct from './Components/BestProduct/BestProduct';
import Modal from '../ProductDetail/Components/Modal/Modal';
import './Main.scss';

const token = localStorage.getItem('token');

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      mainImageArr: [],
      productArr: [],
      modalOpen: true,
    };
  }

  //백이랑 통신하는 코드
  // componentDidMount() {
  //   fetch(`${API}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         mainImageArr: data.banner_images,
  //         productArr: data.best_sellers,
  //       });
  //     });
  // }

  componentDidMount() {
    fetch('data/productData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          mainImageArr: data[0].banner_images,
          productArr: data[0].best_sellers,
        });
      });
  }

  handelModal = modalOpen => {
    this.setState({
      modalOpen,
    });
  };

  render() {
    const { mainImageArr, productArr, modalOpen } = this.state;
    const { handelModal } = this;
    return (
      <div className="main">
        <Slider mainImageArr={mainImageArr} />
        <BestProduct productArr={productArr} />
        {!token && (
          <Modal
            open={modalOpen}
            close={() => {
              handelModal(0);
            }}
          >
            <div className="signUpPopup">
              <img alt="signUpPopup" src={popUpImage} />
              <div>
                <span>첫구매 추가 할인쿠폰을 꼭 사용하세요 🎉</span>
              </div>
              <Link to="/signUp">
                <button>회원가입하기</button>
              </Link>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
