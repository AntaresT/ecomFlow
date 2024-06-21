import Logo from "@/assets/logo.png";
import Bag from "@/assets/ShoppingBagOpen.png";
import User from "@/assets/User.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex py-5 px-32 max-[480px]:px-0 max-[480px]:py-2  max-h-16 justify-between border-b-offWhite border-b-2">
      <Image src={Logo} alt="logo" />

      <div >
        <ul className="flex items-center gap-4">
          <li>
            <Link href={"/cart"} className="flex items-center">
              <Image src={Bag} alt="Bag" className="h-4 w-4 mr-3" />
              <h5>Carrinho</h5>
            </Link>
          </li>
          <div className="h-1 w-1 bg-offWhite"></div>
          <li>
            <Link href={"/"} className="flex items-center">
              <Image src={User} alt="Bag" className="h-4 w-4 mr-3" />
              <h5>Entrar</h5>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}