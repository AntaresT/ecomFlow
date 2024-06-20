import Product from "@/assets/product.png";
import TrashBin from "@/assets/TrashSimple.png";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function CartItem() {
  return (
    <div className="flex gap-10">
      <Image src={Product} alt="product" className="rounded-lg w-150 h-150" />
      <section className="flex flex-col gap-3 max-w-618 ">
        <h2 className="font-poppins text-2xl text-black font-medium">
          Sapatenis Masculino Branco Tênis Casual FLOW para Dia a Dia - Camursa
        </h2>
        <div className="flex justify-between">
          <h3 className="font-poppins text-28 pr-3">R$ 270,00</h3>
          <div className="flex gap-3">
            <button className="bg-lightRed px-2 py-2 rounded-lg">
              <Image src={TrashBin} alt="trash" />
            </button>
            <form className="max-w-xs mx-auto">
              <div className="relative flex items-center max-w-[8rem] h-10">
                <button 
                  type="button" 
                  id="decrement-button" 
                  data-input-counter-decrement="quantity-input" 
                  className="bg-offWhite hover:bg-gray-200 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                  <FiMinus size={16} className="text-gray" />
                </button>
                  <input 
                    type="text" 
                    id="quantity-input" 
                    data-input-counter aria-describedby="helper-text-explanation" className="bg-offWhite border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="999" 
                    required 
                  />
                  <button 
                    type="button" 
                    id="increment-button" 
                    data-input-counter-increment="quantity-input" 
                    className="bg-offWhite hover:bg-gray-200 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
                  >
                    <FiPlus size={16} className="text-gray" />
                  </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}