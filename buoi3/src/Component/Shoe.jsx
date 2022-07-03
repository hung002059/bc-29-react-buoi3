import React, { Component } from "react";

export default class Shoe extends Component {
  render() {
    const { name, price, image, description } = this.props.product;
    return (
      <div className="card">
        <img className="card-img-top" src={image} />
        <div className="card-body">
          <h4 className="card-title m-1">{name}</h4>
          <h4 className="card-text m-1 text-danger">{price}$</h4>
        </div>
        <div>
          <button
            onClick={() => this.props.showDescript(description)}
            className="btn btn-success mr-2"
          >
            Xem chi tiết
          </button>
          <button
            onClick={() => this.props.addToCart(this.props.product)}
            className="btn btn-info mr-2"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
