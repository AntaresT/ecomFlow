import Banner from "@/components/banner";
import Card from "@/components/cards";
import FilterManager from "@/components/filterManager";
import Filters from "@/components/filters";
import Header from "@/components/header";

export default function List() {
  return(
    <>
      <Header />
      <Banner />
      <div className="pt-12 px-104">
        <FilterManager />
        <div className="flex mt-12">
          <Filters />
          <div className="grid grid-rows-3 grid-flow-col gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}