import certificate_img from "../../images/certificate_img.png";
import cv_img from "../../images/cv_img.png";
import certificate from "../../images/certificate.pdf";
import cv from "../../images/cv.pdf";

import { StyledImage, StyledLi, StyledDocsList } from "./StyledDocs";

const Docs = () => {
	return (
		<StyledDocsList>
			<StyledLi>
				<a href={certificate} target="blank">
					<StyledImage src={certificate_img} alt="certificate_img" />
					<p style={{ textAlign: "center" }}>My Certificate</p>
				</a>
			</StyledLi>
			<StyledLi>
				<a href={cv} target="blank">
					<StyledImage src={cv_img} alt="cv_img" />
					<p style={{ textAlign: "center" }}>My CV</p>
				</a>
			</StyledLi>
		</StyledDocsList>
	);
};

export default Docs;
