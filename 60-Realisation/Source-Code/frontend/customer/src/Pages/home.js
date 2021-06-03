import { Component, createRef } from 'react';
import Banner from '../Components/banner';
import FooterCustom from '../Components/footer';
import SearchingForm from '../Components/form-search';
import WhyTravelokaPartial from '../Components/why-traveloka';
import RentalGuidePartial from '../Components/rental-guide';
import './home.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            viewMore: false
        }
    }
    setViewMore= ()=>{
        if(this.state.viewMore){
            this.state.viewMore = false;
            this.setState(this);
        }
        else{
            this.state.viewMore = true;
            this.setState(this);
        }
    }
    render() {
        return (
            <div>
                <Banner />
                <WhyTravelokaPartial />
                <RentalGuidePartial />
                <div className="other-content-home">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4 payment-partner">
                                    <h3>Đối tác thanh toán</h3>
                                    <br />
                                    <p>
                                        Những đối tác thanh toán đáng tin cậy của chúng tôi sẽ giúp cho bạn luôn an tâm thực hiện mọi giao dịch một cách thuận lợi nhất!
                                    </p>
                                </div>
                                <div className="col-sm-8">
                                    <table>
                                        <tr>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214095745-950140744e8aaa6adc5f20c9070ec099.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214097094-68a8e4013fffaf9e3eb509ab01c443cd.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214118270-af8e9adc7a6c728d0df9c6590279dd48.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214099540-8d8fe069f3c5f30b42c6067bb66bf7b5.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214169837-2e167f93c28a31c50929ff25141af9c7.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214177572-608f357f64d150269e946dd01dc35f6c.png?tr=q-75,w-82" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214182554-3d9057e89f3e8013c6b5623a0b3fd72d.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617778862778-43a622292ba164040d7264969df8725d.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214295854-530deeeeef4c927cf42574a9c4f18f26.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214297342-0f18b61b9af8466c550a64863c2f7fc9.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214299520-8bfa969c933323094f1f75162ae3fc0f.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214302804-b2cfe4878f3d09ee6b42932a00fac1be.png?tr=q-75,w-82" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214562316-23d36ef9c331eafb5f6969537a71d0d8.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214563936-6db8e46b87125641ecfd380c4a164822.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214567374-346d8678df93256bb18d96411ce6824f.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214569849-e12071083ab6ec3538609ff5fe335d5a.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214572050-b1b7a34c36ff030bf048e132830f1cda.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214650335-23a8d04dcbda252547b163b96960a663.png?tr=q-75,w-82" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214650797-b71c7513db77a56375191d6449cacae9.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214653058-c75030e2f2da18c41f83565052775d78.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214657064-78a53af4edb426e7b9e7ec29c315db23.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214667160-db526deb55b30b5a2dbdf5f603379e94.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/11/1568214692424-fab15f0a3f501acb66bc11964dfdc1a4.png?tr=q-75,w-82" />
                                            </td>
                                            <td>
                                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/04/1620134924854-7aba4700113c851ccc974d04b13a07cc.png?tr=q-75,w-82" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="content">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <h3 style={{marginTop:"30px"}}>Đăng ký nơi nghỉ của bạn</h3>
                                    <p>
                                    Tiếp cận hàng triệu khách hàng tiềm năng và nâng tầm doanh nghiệp của bạn với chúng tôi.
                                    </p>
                                </div>
                                <div class="col">
                                    <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/01/24/1579840685837-76cf8c0f1f54757df1c8a7a5ec3d0811.jpeg?tr=q-75,w-448,h-180" style={{borderRadius:"10px"}}></img>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="content">
                        <h4>Đặt biệt thự đẹp siêu dễ dàng trên Traveloka ở tất cả các điểm đến hấp dẫn</h4>
                        <br/>
                        <p>Trải nghiệm biệt thự siêu đẳng cấp cho chuyến du lịch thêm màu mới mẻ cùng Traveloka
                            Bạn ơi! Đã đến lúc gia đình mình cần một kỳ nghỉ ngắn ngày để gắn kết, các cặp đôi cần một chuyến du lịch thiệt lãng mạn để hâm nóng tình cảm sau những ngày làm việc chăm chỉ. Đám bạn thân chúng mình cũng cần một chuyến vi vu để trải nghiệm thật đã những năm tháng tuổi trẻ. Tận hưởng chuyến đi là việc của bạn, còn đặt biệt thự xịn sò cho cả nhóm thoải mái vui chơi đã có Traveloka lo!  </p>
                        {!this.state.viewMore?
                        <p onClick={()=> this.setViewMore()} className="expand-button">Xem thêm</p>:
                            <div style={{textAlign:'left'}}>
                            <br/>
                            <p>
                            Từ tháng 7/ 2019, Traveloka ra mắt thêm dịch vụ đặt biệt thự trên ứng dụng du lịch “3 trong 1” giúp bạn tha hồ lựa chọn thêm nhiều loại hình lưu trú cho chuyến đi của mình. Bạn có thể dễ dàng đặt biệt thự trên website chính của Traveloka hoặc ứng dụng Traveloka (phiên bản từ 3.6 trở lên). 
                            </p>
                            <br/>
                            <p>
                            Chỉ với 1 chạm - chạm ngay tới căn biệt thự bạn hằng mong ước
                            </p>
                            <p>
                            Với danh sách hàng ngàn biệt thự tuyệt vời đa dạng từ phong cách thiết kế ấn tượng và đầy đủ tiện nghi tới vị trí đắc địa thuận lời nằm ở trong và ngoài nước, việc đặt biệt thự trên Traveloka, từ các điểm du lịch HOT nhất cho đến những thành phố đậm chất địa phương, vô cùng nhanh chóng, tiện lợi và an toàn.  
                            </p>
                            <p>
                            Để chọn ra biệt thự ưng ý, bạn chỉ cần đánh dấu vào các yêu cầu trong phần lọc tính năng, trong tích tắc, hàng hà các biệt thự đẹp phù hợp xuất hiện trên cùng giao diện cực thân thiện khiến bạn dễ dàng so sánh. Bạn chỉ cần xem hình ảnh, thông tin chi tiết, điều khoản sử dụng phòng cùng những đánh giá chân thật từ khách hàng đã trải nghiệm rồi đặt ngay biệt thự “hút hồn” bạn nhất. Chưa hết, chưa hết, nếu có yêu cầu gì đặc biệt thì bạn cứ việc ghi lại trong phần lưu ý, Traveloka sẽ gửi trực tiếp đến chủ nhà. 
                            </p>
                            <br/>
                            <p>
                            Thanh toán dễ dàng - an tâm
                            </p>
                            <p>
                            Với Traveloka, yên tâm đặt biệt thự bạn thích và không cần quan tâm về giá. Không phí ẩn, giá cuối cùng là giá tốt nhất mà ưu đãi thường xuyên còn giúp bạn đặt được biệt thự với giá miễn chê. Thêm vào đó, thanh toán tại Traveloka cũng vô cùng đơn giản với 5 hình thức đa dạng: thẻ thanh toán quốc tế, ATM nội địa, chuyển khoản, thanh toán tại bưu điện và hệ thống cửa hàng có liên kết với Payoo. Để tránh rủi ro khi giao dịch trực tuyến, thông tin thẻ của khách hàng được mã hóa và quản lý bởi một trong những nhà cung cấp dịch vụ quản lý giao dịch thanh toán trực tuyến lớn nhất thế giới thuộc tổ chức thẻ VISA - CyberSource.
                            </p>
                            <br/>
                            <p>
                            Điều kiện cần cho một chuyến đi hứng khởi là tinh thần, điều kiện đủ là tìm được nơi lưu trú để có không gian thư giãn với nhau. Vậy còn chần chừ gì mà không đặt biệt thự cho chuyến du lịch nghỉ dưỡng trên Traveloka ngay bạn ơi! 
                            </p>
                            <p onClick={()=> this.setViewMore()}  className="expand-button">Thu gọn</p>
                        </div>
                    }
                        
                        
                    </div>
                </div>
                <FooterCustom />
            </div>

        );
    }

}

export default HomePage;
// <SearchingForm/>