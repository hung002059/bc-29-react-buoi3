import React, { Component } from "react";

export default class Cart extends Component {
  renderProduct = () => {
    return this.props.cartList.map((ele) => {
      return (
        <tr key={ele.id}>
          <td>{ele.id}</td>
          <td>{ele.name}</td>
          <td>
            <img height={150} src={ele.image} />
          </td>
          <td>{ele.price}$</td>
          <td>
            <button
              onClick={() => this.props.handleQuantity(ele, false)}
              className="btn btn-warning"
            >
              -
            </button>
            <span className="mx-1">{ele.soLuong}</span>
            <button
              onClick={() => this.props.handleQuantity(ele, true)}
              className="btn btn-info"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => this.props.deleteProduct(ele.id)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
          <td>{ele.price * ele.soLuong}</td>
        </tr>
      );
    });
  };

  renderTongTien = () => {
    return this.props.cartList.map((ele) => {
      return (
        <div>
          <h4 className="text-danger">Thành tiền:</h4>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <table className="table table-striped table-invers w-100">
          <thead className="thead-inverse">
            <tr>
              <th>Mã SP</th>
              <th>Tên</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Action</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </>
    );
  }
}
