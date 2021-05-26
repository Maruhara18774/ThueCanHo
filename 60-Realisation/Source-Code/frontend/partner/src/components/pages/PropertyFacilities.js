/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import axios from "axios";
import Accordion from "../paner-form/Accordion";
export default class PropertyFacilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_CSVC: 0,
      ID_CT_CSVC: 0,
      typeFaci: [],
      lstFaci: [],
    };
    this.getListAnimal();
  }
  getListAnimal = () => {
    axios
      .post(
        "http://localhost:3000/api/partner/registrationDetail/getListPropFaci",
        {}
      )
      .then((response) => {
        this.state.typeFaci = response.data;
        this.setState(this);
      });
  };
  render() {
    return (
      <>
      <div className="table__column__2 css-column-2">
        <div className="table__title css-row" style={{ marginBottom: "16px" }}>
            <div className="column2 css-col">
              <div className="text2 css-text-2">
                <h2>Property Facilities</h2>
              </div>
            </div>
          </div>
          <div className="table__title css-row">
            <div className="detail__column css-col">
            {this.state.typeFaci.map((item) => (
          <>
            <Accordion
              key={item.ID_CSVC}
              title={item.TEN_CSVC}
              content={item["CHITIETCSVC"].map((index) => (
                <div className="checkbox-group control-container css-radio css-radio-gr">
                  <div className="table-row css-checkbox-group">
                    <div className="table-column checkbox">
                      <div className="accorfion-checkbox css-checkbox">
                        <input type="checkbox" key={index.ID_CT_CSVC} ref={index.ID_CT_CSVC}/>
                        <label key={index.ID_CT_CSVC}>{index.TEN_CSVC}</label>
                      </div>
                    </div>
                  </div>
                  <div className="line css-line" style={{ marginTop: "0px" }}></div>
                </div>
              ))}
            />
          </>
        ))}
            </div>
          
          </div>
        
      </div>
        
      </>
    );
  }
}
