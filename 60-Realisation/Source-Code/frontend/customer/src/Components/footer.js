import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

function FooterCustom() {
  return (
    <footer className="footer-bg">
        <table className="main">
            <tr>
              <td rowSpan="2">
                <div className="block">
                  <h2>
                    <span className="mr10">
                      <img src="https://www.flaticon.com/svg/vstatic/svg/201/201623.svg?token=exp=1619342866~hmac=e432d53791660245e83a80fbf2cc5a63" width="30" height="30" class="d-inline-block align-top" alt="logo" />
                    </span>
                      Cabeanloka
                  </h2>
                  <div className="partner-button">
                    <span><i class="far fa-handshake"></i></span> Hợp tác với Cabeanloka
                  </div>
                </div>
              </td>
              <td className="block">
                <p className="title">Về Cabeanloka</p>
                <ul>
                  <li>
                    <a>Cách đặt phòng</a>
                  </li>
                  <li>
                    <a>Liên hệ chúng tôi</a>
                  </li>
                  <li>
                    <a>Trợ giúp</a>
                  </li>
                </ul>
              </td>
              <td  className="block" rowSpan="2">
                  <p className="title">Về sản phẩm</p>
                  <ul>
                      <li>
                          <a>Biệt thự</a>
                        </li>
                        <li>
                          <a>Khuyến mãi</a>
                      </li>
                  </ul>
              </td>
              <td  className="block">
                  <p className="title">Khác</p>
                  <ul>
                      <li>
                          <a>Chính sách quyền riêng tư</a>
                      </li>
                      <li>
                          <a>Điều khoản & Điều kiện</a>
                      </li>
                      <li>
                          <a>Quy chế hoạt động</a>
                      </li>
                  </ul>
              </td>
            </tr>
            <tr>
              <td className="block">
                  <p className="title">Theo dõi chúng tôi trên</p>
                  <table className="contact">
                      <tr className="twitter">
                          <td><i class="fab fa-twitter"></i></td>
                          <td>Twitte</td>
                      </tr>
                      <tr className="facebook">
                          <td><i class="fab fa-facebook-f"></i></td>
                          <td>Facebook</td>
                      </tr>
                      <tr className="instagram">
                          <td><i class="fab fa-instagram"></i></td>
                          <td>Instagram</td>
                      </tr>
                      <tr className="youtube">
                          <td><i class="fab fa-youtube"></i></td>
                          <td>Youtube</td>
                      </tr>
                  </table>
              </td>
            </tr>
            <tr className="block">
              <td colSpan="4">
                  <p className="title">Đối tác thanh toán</p>
                      <table className="payment">
                          <tr>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=q-75,h-20"></img></td>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=q-75,h-20"></img></td>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339591544-eae8263f3d4021c8951e271bdddf60a0.png?tr=q-75,h-20"></img></td>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=q-75,h-20"></img></td>
                          </tr>
                          <tr>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=q-75,h-20"></img></td>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=q-75,h-20"></img></td>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617778793443-2f6b7f7d0668a4a815962032dd8233a2.png?tr=q-75,h-20"></img></td>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=q-75,h-20"></img></td>
                          </tr>
                          <tr>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=q-75,h-20"></img></td>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339663962-2037bef017440339eda165360a5e239f.png?tr=q-75,h-20"></img></td>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=q-75,h-20"></img></td>
                              <td><img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=q-75,h-20"></img></td>
                          </tr>
                      </table>
              </td>
            </tr>
        </table>
        <hr color="gray"/>
        <div className="sub">
          <p className="address">Công ty TNHH Cabeanloka Việt Nam. Mã số DN: 0313581779. Tòa nhà An Mỹ, 117-119 Lý Đức Thắng, Thị xã Texas</p>
          <p>Copyright © 2021 Cabeanloka</p>
        </div>
      </footer>
    
  );
}

export default FooterCustom;
