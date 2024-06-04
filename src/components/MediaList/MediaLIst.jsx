import {
	FaLinkedin,
	FaFacebookSquare,
	FaTelegram,
	FaGithub,
} from "react-icons/fa";
import { StyledList, StyledLi } from "./StyledMediaList";

const size = { width: 30, height: 30 };

const MediaList = () => {
	return (
		<StyledList>
			<StyledLi>
				<a
					target="blank"
					href="https://www.linkedin.com/in/andrii-pavliuk-a7b089265/">
					<FaLinkedin style={size} />
				</a>
			</StyledLi>
			<StyledLi>
				<a target="blank" href="https://www.facebook.com/andriy.pavlyuk.71/">
					<FaFacebookSquare style={size} />
				</a>
			</StyledLi>
			<StyledLi>
				<a target="blank" href="https://t.me/a_pavlk">
					<FaTelegram style={size} />
				</a>
			</StyledLi>
			<StyledLi>
				<a target="blank" href="https://github.com/andrpavl">
					<FaGithub style={size} />
				</a>
			</StyledLi>
		</StyledList>
	);
};

export default MediaList;
