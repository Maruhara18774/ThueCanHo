import React from 'react'

function PropertyDetail() {
  return (
    <>
      <div className="table__column__2 css-column-2">
        <div className="table__title css-row" style={{ marginBottom: "16px" }}>
          <div className="column2 css-col">
            <div className="text2 css-text-2">
              <h2>Property Detail</h2>
            </div>
          </div>
        </div>
        <div className="table__title css-row">
          <div className="detail__column css-col">
          <div
              className="box__detail css-bx-dtl"
              style={{ marginBottom: "30px" }}
            >
              <div className="box__detail__section header clearfix css-section">
                <span>Property Detail</span>
              </div>
              <div className="box__detail__section clearfix css-section">
                <div className="box-row css-row">
                  <div className="box-column css-box-col">
                    <label className="box-label css-label">
                      <span>Main Currency</span>
                    </label>
                  </div>
                  <div className="box-column css-col">
                    <span>Australian Dollar (AUD)</span>
                  </div>
                </div>
                <div className="line css-line" style={{ marginTop: "0px" }}></div>
                <div className="box-row css-row">
                  <div
                    className="box-column css-box-col"
                    style={{ marginTop: "8px" }}
                  >
                    <label className="box-label css-label">
                      <span>
                        Reception Area
                      </span>
                    </label>
                  </div>
                  <div
                    className="c-column css-bxcol2"
                    style={{ marginTop: "-4px" }}
                  >
                    <div
                      touched="true"
                      value="NO_PAST_NAME"
                      class="radio-group control-container css-radio css-radio-gr"
                    >
                      <div className="radio css-btn-radio">
                        <input
                          name="generalInformation,propertyDetails,previousNameBoolean"
                          type="radio"
                          value="YES_PAST_NAME"
                          id="radio-9"
                        />
                        <label className="" for="radio-9">
                          <span>Available 24 Hours</span>
                        </label>
                      </div>
                      <div
                        className="radio css-btn-radio"
                      >
                        <input
                          name="generalInformation,propertyDetails,previousNameBoolean"
                          type="radio"
                          value="NO_PAST_NAME"
                          id="radio-10"
                        />
                        <label className="" for="radio-10">
                          <span>Not Available 24 Hours</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line css-line" style={{ marginTop: "0px" }}></div>
                <div className="box-row css-row">
                  <div className="box-column css-box-col">
                    <label className="box-label css-label">
                      <span>Check-In Time</span>
                    </label>
                  </div>
                  <div className="box-column css-col" style={{marginRight: "20px"}}>
                    <label className="box-label css-label">
                      <span>from</span>
                      <span className="label-required" style={{marginLeft: "3px", color: "rgb(87, 167, 237)",}}>*</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropertyDetail
