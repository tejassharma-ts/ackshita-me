import Container from "./container";
import Logo from "./logo";
import Menu from "./menu";

export default function Navbar() {
  return (
    <Container className="h-20 flex items-center" size="full">
      <nav className="flex items-center justify-between mx-auto w-full">
        <Logo />
        <Menu />
      </nav>
    </Container>
  );
}
