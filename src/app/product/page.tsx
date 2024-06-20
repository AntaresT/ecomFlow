
import Header from "@/components/header";
import ProductImages from "@/components/productImages";
import ProductInfo from "@/components/productInfo";

export default function Product() {
  return(
    <div>
      <Header />
      <div className="flex px-104 pt-52 gap-10">
        <ProductImages />
        <ProductInfo />
      </div>
    </div>
  )
}