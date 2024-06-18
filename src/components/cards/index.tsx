import Product from "@/assets/product.png";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return(
    <div className="h-588 w-290 laptop-lg:w-60">
      <Image src={Product} alt="" className="max-h-80 rounded-lg"/>
      <div className="mt-6 gap-2">
        <h5 className="text-gray font-inter text-sm">Tenis social</h5>
        <h3 className="text-xl line-clamp-2 font-medium pt-2">Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa</h3>
        <h5 className="text-sm text-gray line-through">De R$ 500,00</h5>
        <div className="flex items-center pt-2">
          <h3 className="font-poppins text-28 pr-3">R$ 270,00</h3>
          <h5 className="text-sm text-orange">10% OFF</h5>
        </div>
      </div>
      <Link href={"/product"} >
        <button className="rounded-4 text-orange border-solid border-1 border-orange py-3 px-74 laptop-lg:px-8 text-sm w-290 mt-6 laptop-lg:w-60">Adicionar ao carrinho</button>
      </Link>
    </div>
  )
}