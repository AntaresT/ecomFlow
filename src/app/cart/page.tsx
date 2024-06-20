import CartItem from "@/components/cartItem";
import Header from "@/components/header";
import PriceSection from "@/components/priceSection";

export default function Cart() {
  return (
    <div className="">
      <Header />
      <div className="pt-16 px-104 flex justify-between gap-10">
        <CartItem />
        <PriceSection />
      </div>
    </div>
  )
}