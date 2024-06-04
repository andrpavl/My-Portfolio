import styled from "styled-components";

export const StyledProjectsList = styled.ul`
	@media (min-width: 768px) {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
`;

export const Card = styled.li`
	max-width: 320px;

	border-radius: 8px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

	margin-left: auto;
	margin-right: auto;
	margin-bottom: 30px;

	padding: 12px;

	transition: transform 500ms ease-in;

	&:hover {
		transform: scale(1.1);
	}
	@media (min-width: 768px) {
		display: flex;
		flex: 1 1 calc(33.333% - 16px);
		flex-direction: column;
		justify-content: space-between;
		min-height: 500px;
	}
`;

export const Links = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	margin-top: auto;
`;

export const Link = styled.a`
	box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
		rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	padding: 8px;
	border-radius: 6px;

	&:hover {
		text-decoration: underline;
	}
`;

export const ProjectImg = styled.img`
	width: 100%;
	height: 200px;
	border-radius: 8px;
`;

export const StyledDescription = styled.p`
	color: slategrey;

	@media (min-width: 768px) {
		max-height: 140px;
		overflow: auto;
		
		scrollbar-width: thin;
		scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1); /* Firefox */

		&::-webkit-scrollbar {
			width: 6px;
		}

		&::-webkit-scrollbar-track {
			background: rgba(0, 0, 0, 0.1);
			border-radius: 50%;
		}

		&::-webkit-scrollbar-thumb {
			background-color: rgba(0, 0, 0, 0.5);
			border-radius: 8px;
			border: 1px solid rgba(0, 0, 0, 0.1);
		}
	}

	@media (min-width: 1200px) {
		max-height: 120px;
	}
`;
