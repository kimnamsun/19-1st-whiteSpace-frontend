import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import TableWrap from '../Order/Components/TableWrap/TableWrap';
import './Cart.scss';

const num = 2;

export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartData: [],
    };
  }

  componentDidMount() {
    fetch('data/cartData.json')
      .then(res => res.json)
      .then(data => {
        this.setState({
          cartData: data,
        });
      });
  }

  render() {
    const { cartData } = this.state;
    return (
      <>
        <div id="Cart">
          <Nav />
          <div>
            <h1>SHOPPING CART</h1>
            <TableWrap title={'일반상품' + num}>
              <table className="cartTable">
                <thead>
                  <tr>
                    <th className="tableCheckBoxWidth">
                      <input type="checkbox" />
                    </th>
                    <th className="tableImgWidth">이미지</th>
                    <th>상품정보</th>
                    <th>판매가</th>
                    <th>수량</th>
                    <th>적립금</th>
                    <th>배송비</th>
                    <th>합계</th>
                    <th>선택</th>
                  </tr>
                </thead>
                <tbody>
                  {CART_DATA.map(cart => (
                    <tr>
                      <td className="tbodyCheckBoxLine">
                        <input type="checkbox" />
                      </td>
                      <td className="tbodyImgLine">
                        <img src={cart.product_image} alt={cart.product_name} />
                      </td>
                      <td className="tbodyProductLine">
                        <div>{cart.product_name}</div>
                        <div>{cart.product_name}</div>
                      </td>
                      <td>{cart.default_price}</td>
                      <td className="tbodyUpDownLine">
                        <span>
                          <input type="text" />
                          <button>&#9650;</button>
                          <button>&#9660;</button>
                        </span>
                      </td>
                      <td>적립금</td>
                      <td>배송비</td>
                      <td>합계</td>
                      <td className="tbodyChiceLine">
                        <button>삭제</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3">
                      <span>기본배송</span>
                    </td>
                    <td colSpan="6">
                      <div className="totalPrice">
                        상품구매금액<span>총액</span>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </TableWrap>
            <hr />
          </div>
        </div>
      </>
    );
  }
}

export default Cart;

const CART_DATA = [
  {
    product_id: 1,
    product_image:
      'https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw42b11508/39CFA0036_21G_01.jpg?imwidth=375&impolicy=product',
    product_name: '포켓 세탁세제',
    color_name: '파랑',
    size_name: 'King Size',
    default_price: 199000,
    quantity: 4,
  },
  {
    product_id: 2,
    product_image:
      'http://cdn.shopify.com/s/files/1/0894/5382/products/Product_Page_Main_Image_1400x1400_White_3_1024x1024.jpg?v=1614829643',
    product_name: '포켓 세탁세제',
    color_name: '파랑',
    size_name: 'King Size',
    default_price: 199000,
    quantity: 2,
  },
];

// {
//   "id": 1,
//   "categoryName": "패브릭",
//   "name": "발이 가벼운 에어리 욕실화",
//   "price": 14900,
//   "thumbnail_url": "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dw42b11508/39CFA0036_21G_01.jpg?imwidth=375&impolicy=product",
//   "stock": 30,
//   "is_new": false
// },
// {
//   "id": 2,
//   "categoryName": "패브릭",
//   "name": "사계절 이불 오트밀&베이지",
//   "price": 99000,
//   "thumbnail_url": "http://cdn.shopify.com/s/files/1/0894/5382/products/Product_Page_Main_Image_1400x1400_White_3_1024x1024.jpg?v=1614829643",
//   "stock": 10,
//   "is_new": true
// },
