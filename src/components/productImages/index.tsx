import Product from "@/assets/product.png";
import Image from "next/image";

export default function ProductImages() {
  return (
    <div className="flex gap-6 w-2/4">
      <section className="flex flex-col gap-6">
        <Image src={Product} alt="image" className="w-105 rounded-lg"/>
        <Image src={Product} alt="image" className="w-105 rounded-lg"/>
        <Image src={Product} alt="image" className="w-105 rounded-lg"/>
        <Image src={Product} alt="image" className="w-105 rounded-lg"/>
      </section>
      <Image src={Product} alt="main-image" className="w-467 rounded-lg" />
    </div>
  )
}