import FirstBurger from "./FirstBurger";
import SecondBurger from "./SecondBurger";
import ThirdBurger from "./ThirdBurger";
export default function MiddleSection() {
  return (
    <div className="burger-container">
      <FirstBurger />
      <SecondBurger />
      <ThirdBurger />
    </div>
  );
}
