import {
	StyledImg,
	StyledP,
	StyledQuoteDiv,
	StyledQuoteText,
	StyledQuoteAuthor,
} from "./StyledHome";
import helloImg from "../../images/Hello.jpg";
import { useState, useEffect } from "react";
import { fetchQuote } from "../../fetch";

const Home = () => {
	const [quote, setQuote] = useState({});

	useEffect(() => {
		const getQuote = async () => {
			try {
				const responce = await fetchQuote();
				setQuote(responce.data[0]);
			} catch (error) {
				console.log(error);
			}
		};
		const interval = setInterval(() => {
			getQuote();
		}, 5000); 

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<StyledImg src={helloImg} alt="Hello. My name is Andrii" />
			<StyledP>&lt;... and I am a FullStack Developer.../&gt;</StyledP>
			{quote.quote ? (
				<StyledQuoteDiv>
					<StyledQuoteText>{quote.quote}</StyledQuoteText>
					<StyledQuoteAuthor>{quote.author}</StyledQuoteAuthor>
				</StyledQuoteDiv>
			) : null}
		</>
	);
};

export default Home;
