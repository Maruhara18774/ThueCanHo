// import { iam } from "googleapis/build/src/apis/iam";
import React, { useState } from "react";
import {ImageData} from '../../StaticData/imageData'
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



export default Trending;
