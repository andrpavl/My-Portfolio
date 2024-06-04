import styled from "styled-components";

const Container = styled.main`
	width: 100%;
	padding: 0 16px;

	box-sizing: border-box;

	margin: 0 auto;

	margin-bottom: 190px;

	@media (min-width: 768px) {
		padding: 20px 30px;

		margin-bottom: 100px;
	}

	@media (min-width: 1200px) {
		padding: 30px 60px;
	}
`;

export default Container;
