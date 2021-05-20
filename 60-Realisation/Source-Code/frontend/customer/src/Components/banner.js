import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './banner.css'

function Banner() {
  // Length : 5
  const listImage = ["https://ik.imagekit.io/tvlk/image/imageResource/2021/04/24/1619249835618-e6e10e25c5243e60715bf7974d35f109.jpeg?tr=q-75,w-472","https://ik.imagekit.io/tvlk/image/imageResource/2021/04/20/1618955866096-09203c459c3f7e6c64dfcfb035c76a93.jpeg?tr=q-75,w-472","https://ik.imagekit.io/tvlk/image/imageResource/2021/03/22/1616392521669-15a8621c07bd83b1fc2310b48a9f0d48.png?tr=q-75,w-472","https://ik.imagekit.io/tvlk/image/imageResource/2021/04/09/1617943852589-426005b7d906a9f21a2acf00680215b4.png?tr=q-75,w-472","https://ik.imagekit.io/tvlk/image/imageResource/2021/04/20/1618909577105-73b478b05c1b3f6922781799834f22cf.png?tr=q-75,w-472"]
  const [currentImage, setCurrentImage] = useState(0);
  const chang2Next =(current) =>{
    if(current==4){
      setCurrentImage(0);

    }
    else{
      setCurrentImage(current+1);
    }
  }
  const change2Prev = (current) =>{
    if(current == 0){
      setCurrentImage(4);
    }
    else{
      setCurrentImage(current-1);
    }
  }
  useEffect(()=>{
    setTimeout(()=>chang2Next(currentImage),3000);
  })
  const getGreeting = () =>{
    const date = new Date();
    const hour = date.getHours();
    if (hour>=4 && hour<11){
      return <h1>Chúc bạn buổi sáng vui vẻ !</h1>
    }
    else if(hour<16){
      return <h1>Chúc bạn buổi trưa mát mẻ !</h1>
    }
    else if(hour<19){
      return <h1>Chúc bạn buổi chiều tốt lành !</h1>
    }
    else if(hour<23){
      return <h1>Chúc bạn buổi tối ấm cúng !</h1>
    }
    else{
      return <h1>Chào mừng bạn !</h1>
    }
  }
  const getLogin = () =>{
    return <p>Hãy <span><a href="/login">Đăng nhập</a></span> ngay để trải nghiệm.</p>
  }
  return (
    <div class="banner-background">
      <div className="content-main">
        <table>
          <tr>
            <th rowspan="2" className="greeting">
            {getGreeting()}
            {getLogin()}
            </th>
            <td><img className="image-small" src={listImage[currentImage]}></img></td>
          </tr>
          <tr>
            <td className="button-zone">
              <span className="button-prev"><i class="fas fa-chevron-left" onClick={() => change2Prev(currentImage)}></i></span>
          <span><a className="bonus" href="#">Xem thêm khuyến mãi</a></span>
          <span className="button-next"><i class="fas fa-chevron-right" onClick={() => chang2Next(currentImage)}></i></span>
          </td>
          </tr>
        </table>
        </div>
    </div>
  );
}

export default Banner;
