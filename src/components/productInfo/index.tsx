import PixIcon from "@/assets/pix.png"
import Image from "next/image"

export default function ProductInfo() {
  return (
    <div className="flex w-2/4 flex-col gap-10">
      <div>
        <h5 className="font-poppins font-normal text-gray text-sm">Tenis Social</h5>
        <h2 className="font-poppins font-medium text-28 pt-2">
          Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa
        </h2>
      </div>
      <section className="flex bg-lightGray h-231 items-center justify-center flex-col">
        <Image src={PixIcon} alt="pixIcon" className="w-5 h-5 mb-4" />
        <h5 className="text-sm text-gray line-through">De R$ 500,00</h5>
        <h3 className="font-poppins text-28 pr-3">R$ 270,00</h3>
        <p>no pix <span className="text-orange">10%</span> de desconto</p>
      </section>
      <button className="bg-orange text-white py-3 w-full hover:bg-amber-50 hover:text-black 
      ease-in-out delay-150 hover:transition-transform hover:scale-110	duration-300">
        Adicionar ao carrinho
      </button>
    </div>
  )
}