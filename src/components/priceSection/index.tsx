export default function PriceSection() {
  return (
    <section className="flex flex-col border border-offWhite p-8 w-96 laptop-lg:w-72 gap-6">
      <div className="flex border-b-offWhite border-b-2 justify-between pb-6">
        <h5 className="font-inter font-normal text-gray text-base">Sub total:</h5>
        <h5 className="font-inter font-medium text-base text-black">R$ 300,00</h5>
      </div>

      <div className="flex justify-between">
        <h5 className="font-inter font-normal text-gray text-base">Frete:</h5>
        <h5 className="font-inter font-medium text-base text-green-600">Gratis</h5>
      </div>

      <div className="flex justify-between">
        <h5 className="font-inter font-normal text-gray text-base">Valor total:</h5>
        <h5 className="font-inter font-medium text-base text-black">R$ 1000,00</h5>
      </div>

      <button
        className="bg-orange text-white py-3 w-full text-sm hover:bg-amber-50 hover:text-black 
        ease-in-out delay-150 hover:transition-transform hover:scale-110	duration-300"
      >
        Finalizar pedido
      </button>
    </section>
  )
}