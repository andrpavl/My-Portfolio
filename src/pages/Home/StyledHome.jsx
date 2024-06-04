import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
	from {
		transform: translateX(-100%); 
		opacity: 0
	}
	to {
		transform: translateX(0);
		opacity: 1
	}
`;

const slideText = keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}

	to {
		transform: translateX(0);
		opacity: 1;
	}
`;

const slideQuote = keyframes`
	from { 
		transform: translateY(-100%);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;
const changeQuote = keyframes`
	from { 
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const StyledImg = styled.img`
	max-width: 400px;
	width: 100%;
	margin-top: 20px;
	border-radius: 7%;

	animation: ${slideIn} 1000ms ease-out forwards;
`;

export const StyledP = styled.p`
	font-size: 40px;
	line-height: 1.3;

	letter-spacing: 2px;

	text-align: center;

	animation: ${slideText} 2500ms ease-out forwards;
`;

export const StyledQuoteDiv = styled.div`
	max-width: 400px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 8px;
	margin-left: auto;
	margin-top: 140px;
	margin-bottom: 20px;
	padding: 16px;

	animation: ${slideQuote} 1000ms ease-out forwards;

	@media (max-width: 768px) {
		margin-top: 40px;
	}
`;

export const StyledQuoteText = styled.p`
	animation: ${changeQuote} 4000ms ease-in-out;
	font-family: "Indie Flower";
	font-size: 20px;
`;

export const StyledQuoteAuthor = styled.p`
	max-width: 150px;
	margin-left: auto;
	text-decoration: underline;
	font-weight: bold;
	font-family: "Indie Flower";
	font-size: 18px;
`;
