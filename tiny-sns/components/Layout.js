import React from "react";
import Link from "next/link";
import store from "../common/store";

export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Tiny SNS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link href={"/"}>
                  <a className={"nav-link"}>Home</a>
                </Link>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {store.user !== null && (
                <span>{store.user.name}님 반갑습니다.</span>
              )}
              {store.user === null && <span>로그인 해주세요</span>}
            </div>
          </div>
        </nav>
        <div className="container mt-4">{this.props.children}</div>
      </React.Fragment>
    );
  }
}
