import BannerImg from "@/assets/BannerImg.png"
import Image from "next/image"

export default function Banner() {
  return (
    <div className="flex max-h-96">
      <section className="bg-orange w-2/4">
        <h3 className="text-white text-5xl desktop:px-104 laptop-lg:px-104 py-24 font-semibold font-poppins laptop-lg:text-4xl">Estilo e conforto para os seus pés</h3>
      </section>
      <Image src={BannerImg} alt="banner" />
    </div>
  )
}