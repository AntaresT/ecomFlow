import SearchIcon from "@/assets/iconSearch.png"
import Image from "next/image"

export default function FilterManager() {
  return (
    <section className="justify-between flex">
      <h3 className="font-poppins">06 itens encontrados</h3>
      <div className="relative w-400">
        <input type="text" className="bg-offWhite h-40 w-400 rounded-lg py-2 px-3 font-inter" placeholder="Pesquisar" />
        <Image src={SearchIcon} alt="search-icon" className="absolute right-3 top-3" />
      </div>
    </section>
  )
}