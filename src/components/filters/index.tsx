'use client'
import SearchIcon from "@/assets/iconSearch.png";
import { Slider } from "antd";
import Image from "next/image";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import Checkbox from "../checkbox";


export default function Filters() {

  const [min, setMin] = useState<number>(20);
  const [max, setMax] = useState<number>(50);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mr-6">
      <div className="bg-offWhite w-290 p-4 rounded-lg">
        <section className="bg-white p-4">
          <h5 className="font-poppins text-base">Categorias</h5>
          <div className="relative w-226">
            <input type="text" className="bg-offWhite h-40 w-226 rounded-lg py-2 px-3 font-inter" placeholder="Pesquisar" />
            <Image src={SearchIcon} alt="search-icon" className="absolute right-3 top-3" />
          </div>
          <section>
            <Checkbox label="Botas" register={register} />
            <Checkbox label="Chinelos" register={register} />
            <Checkbox label="Chuteiras" register={register} />
            <Checkbox label="Sandálias" register={register} />
            <Checkbox label="Sapatênis" register={register} />
            <Checkbox label="Tênis" register={register} />
            <Checkbox label="Tênis de corrida" register={register} />
          </section>
        </section>
      </div>

      <div className="bg-offWhite w-290 p-4 rounded-lg mt-4">
        <section className="bg-white p-4">
          <h5 className="font-poppins text-base">Preço</h5>
          <section>
            <Slider range defaultValue={[20, 250]} min={min} max={max} />
            <div className="flex gap-4">
              <div className="relative w-105">
                <input type="text" className="bg-offWhite h-40 w-105 rounded-lg py-2 px-3 font-inter" placeholder="Min"/>
              </div>
              <div className="relative w-105">
                <input type="text" className="bg-offWhite h-40 w-105 rounded-lg py-2 px-3 font-inter" placeholder="Max" />
              </div>
            </div>
          </section>
        </section>
      </div>
    </form>
  )
}