<<<<<<< Updated upstream
import React from "react";

const Trending = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>Trending Page</h1>
                <p className="lead">La Fleur Premium Central Apartment</p>
                <p className="lead">Vị trí: 5 - 7A Tran Phu, Đà Lạt, Việt Nam</p>
                <p className="lead">Nằm cách Quảng trường Lâm Viên 700 m, La Fleur Premium Central Apartment có chỗ nghỉ, nhà hàng, quầy bar, sảnh khách chung và khu vườn.</p>
                <p className="lead">Không gian yên tĩnh, rất gần chợ và những điểm vui chơi tham quan. Phòng ngủ thoáng mát sạch sẽ. Nhiều điểm cộng cho cách làm việc của nhân viên, đáp ứng nhanh những nhu cầu lúc khách cần hổ trợ. Sẽ quay lại khi nhóm đi Đà Lạt</p>
            </div>
        </div>
    );
};

=======
// import { iam } from "googleapis/build/src/apis/iam";
import React, { useState } from "react";
import {ImageData} from '../../SData/imageData'
const Trending = () => {
	const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};

	return (
		<div className="app">
			<div className="heading">Trending Page</div>
			<div>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label-holder">
					<label htmlFor="file" className="label">
						<i className="btn btn-outline-info">ADD</i>
					</label>
				</div>
				<div className="result">{renderPhotos(selectedFiles)}</div>
				{ImageData.map((item) => (               
					<img src={item.imagePath} alt=""/>
                ))}								
			</div>
		</div>
	);
};



>>>>>>> Stashed changes
export default Trending;
