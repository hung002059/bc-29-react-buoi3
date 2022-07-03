import React, { Component } from "react";
import Data from "../Data/data.json";
import Cart from "./Cart";
import Shoe from "./Shoe";

export default class Home extends Component {
  showDescript = (descript) => {
    alert(descript);
  };

  state = {
    cartList: [],
  };

  addToCart = (product) => {
    const data = [...this.state.cartList];

    const idx = data.findIndex((ele) => ele.id === product.id);

    if (idx !== 1) data[idx].soLuong += 1;
    else data.push({ ...product, soLuong: 1 });

    this.setState({
      cartList: data,
    });
  };

  handleQuantity = (product, isIncrease) => {
    const data = [...this.state.cartList];

    const idx = data.findIndex((ele) => ele.id === product.id);

    if (idx !== -1)
      if (isIncrease) data[idx].soLuong += 1;
      else if (data[idx].soLuong > 1) data[idx].soLuong -= 1;
      else if (window.confirm("Xóa k ?????")) data.splice(idx, 1);

    this.setState({
      cartList: data,
    });
  };

  renderListShoe = () => {
    return Data.map((ele) => {
      return (
        <div className="col-4" key={ele.id}>
          <Shoe
            addToCart={this.addToCart}
            showDescript={this.showDescript}
            phone={ele}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#menu1">
                Giỏ hàng ({this.state.cartList.length})
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="home" className="container tab-pane p-0 active">
              <div className="row">{this.renderListShoe()}</div>
            </div>
            <div id="menu1" className="container tab-pane fade">
              <Cart
                handleQuantity={this.handleQuantity}
                cartList={this.state.cartList}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
