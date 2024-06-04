import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding: 16px;

	@media (min-width: 768px) {
		padding: 24px;
	}
`;

export const StyledNav = styled.nav`
	display: flex;
	gap: 8px;
	flex-wrap: wrap;

	@media (min-width: 768px) {
		font-size: 24px;
	}
`;

export const StyledName = styled(Link)`
	font-family: "Sedan SC";
	margin-right: 10px;
	font-size: 24px;
	font-weight: 500;

	@media (min-width: 768px) {
		font-size: 30px;
	}
`;

export const StyledFooter = styled.footer`
	position: fixed;
	bottom: 0;
	width: 100%;

	background-color: beige;
	padding: 12px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-around;
		padding: 24px;
		margin-top: 20px;
	}
`;

export const StyledContacts = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 18px;
`;

export const StyledNavLink = styled(NavLink)`
	position: relative;
	text-decoration: none;
	color: inherit;
	padding-bottom: 2px; 

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 3px;
		border-radius: 50%;
		bottom: 0;
		left: 0;
		background-color: currentColor;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	&.active::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
`;

