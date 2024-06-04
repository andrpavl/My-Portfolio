import styled from "styled-components";

export const StyledDocsList = styled.ul`
    @media (min-width: 768px) {
        display: flex;
    }
`

export const StyledImage = styled.img`
	max-width: 200px;
	border-radius: 6px;

    @media (min-width: 768px) {
       max-width: 300px;
    }
`;

export const StyledLi = styled.li`
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	margin: 20px auto;
	padding: 10px;
	display: table;
`;
