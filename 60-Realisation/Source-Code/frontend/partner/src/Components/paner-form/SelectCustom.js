import React, { Component } from "react";
import "../../App.css";

class SelectCustom extends Component {
  state = {
    defaultTitle: "",
    isOpen: false,
  };

  handleSelect = (propertyType) => {
    if (!this.state.isOpen) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
      defaultTitle: propertyType,
    }));
  };

  handleOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleOutsideClick = () => {
    this.handleSelect();
  };

  render() {
    const { data, placeholder } = this.props;
    const { defaultTitle } = this.state;

    return (
      // option-custom -> select-has-value //select-input -> select-control //select-list -> select-menu-outer
      //select-menu //select-item -> select-option
      <div className="select-has-value">
        <div className="select-control" onClick={this.handleOpen}>
          <div className="select-placeholder">
            <span
              className={`${
                placeholder && defaultTitle === ""
                  ? "select-title placeholder"
                  : "select-title"
              }`}
            >
              {defaultTitle === "" ? placeholder : defaultTitle}
            </span>
          </div>
          <span className="select-arrow-zone">
            <span className="select-arrow"></span>
          </span>
        </div>

        {this.state.isOpen ? (
          <div className="select-menu-outer">
            {data.map((item, index) => (
              <div className="select-menu">
                <div
                  key={index}
                  onClick={() => this.handleSelect(data[index].propertyType)}
                  className="select-option"
                >
                  <span className="select-title">{item.propertyType}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SelectCustom;
