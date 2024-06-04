import styled from "styled-components";

export const StyledList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 60%;
	max-width: 300px;
	margin-bottom: 10px;

	@media (min-width: 768px) {
		width: auto;
	}
`;

export const StyledLi = styled.li`
	@media (min-width: 768px) {
		margin-right:16px;
	}
`;
