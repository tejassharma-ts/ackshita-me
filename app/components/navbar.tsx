import Container from "./container";
import Logo from "./logo";
import Menu from "./menu";

export default function Navbar() {
  return (
    <Container className="h-32 flex items-center sticky -top-0 z-50" size="full">
      <nav className="flex items-center justify-between mx-auto w-full">
        <Logo />
        <Menu />
      </nav>
    </Container>
  );
}
