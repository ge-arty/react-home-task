import Logo from "./Logo";
import Name from "./Name";
import Button from "./Button";
export default function Header() {
  return (
    <div className="header-container">
      <Logo />
      <Name />
      <Button />
    </div>
  );
}
