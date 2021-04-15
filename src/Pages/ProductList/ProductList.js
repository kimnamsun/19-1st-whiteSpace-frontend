import React, { Component } from 'react';
import Product from './Components/Product/Product';
import './ProductList.scss';

export default class ProductList extends Component {
  render() {
    const { productArr } = this.props;
    return (
      <div className="productList">
        <ul>
          <Product productArr={productArr} />
        </ul>
      </div>
    );
  }
}
