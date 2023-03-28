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

  console.log('aaaa',window.location.pathname.slice((window.location.pathname.lastIndexOf("/")+1)));
const handleKeyDown=(e:any)=>{
  if(e.key==="Enter"){
    console.log(e.target.value)
    window.location.replace(`/search/all/${e.target.value}`)
  }
}
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
        <Logo to={"home"}>Marketplace</Logo>
        <StyledInput onKeyDown={handleKeyDown}/>
        <ItemsWrapper>
          <StyledNavItems>
            <>{NavItemsList}</>
          </StyledNavItems>
        </ItemsWrapper>
      </StyledNav>
    </Container>
  );
};
