import styled from "styled-components";
import {
  Container,
  ItemsWrapper,
  Logo,
  StyledInput,
  StyledNav,
  StyledNavItem,
  StyledNavItems,
} from "./Navbar-Style";

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  const NavItems = ["Mesaje", "Favorite", "Contul tau"];
  const NavItemsList = NavItems.map((item) => {
    return (
      <StyledNavItem to={`${item.replace(" ", "-").toLowerCase()}`}>
        {item}
      </StyledNavItem>
    );
  });
  return (
    <Container>
      <StyledNav>
        <Logo to={"acasa"}>Marketplace</Logo>
        <StyledInput />
        <ItemsWrapper>
          <StyledNavItems>
            <>{NavItemsList}</>
          </StyledNavItems>
        </ItemsWrapper>
      </StyledNav>
    </Container>
  );
};
