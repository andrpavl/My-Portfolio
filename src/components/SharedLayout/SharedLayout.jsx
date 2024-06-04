import { Outlet } from "react-router-dom";
import {
	StyledHeader,
	StyledFooter,
	StyledName,
	StyledNav,
	StyledContacts,
	StyledNavLink,
} from "./StyledSharedLayout";
import Container from "../Container";
import MediaList from "../MediaList/MediaLIst";

export const SharedLayout = () => {
	return (
		<>
			<StyledHeader>
				<StyledName to="/">Andrii Pavliuk</StyledName>
				<StyledNav>
					<StyledNavLink to="/" end>
						Home
					</StyledNavLink>
					<StyledNavLink to="/projects">Projects</StyledNavLink>
					<StyledNavLink to="/about">About</StyledNavLink>
					<StyledNavLink to="/docs">Docs</StyledNavLink>
				</StyledNav>
			</StyledHeader>
			<Container>
				<Outlet />
			</Container>
			<StyledFooter>
				<StyledName style={{ marginBottom: 16 }} to="/">
					Andrii Pavliuk
				</StyledName>
				<MediaList />
				<StyledContacts>
					<a href="tel:+4550199513">+45 50 19 95 13</a>
					<a href="mailto:puvlo@yahoo.com">puvlo@yahoo.com</a>
				</StyledContacts>
			</StyledFooter>
		</>
	);
};
