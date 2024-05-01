"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { PrismicRichText } from "@prismicio/react";

const Info = ({ animalito, closeModal }) => {
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 animate__animated animate__fadeIn animate__faster z-40">
      <div
        ref={modalRef}
        className="bg-[#f6f6f6] w-full mx-5 h-[98%] p-2 rounded-[75px]"
      >
        <h1 className="text-[20px] xl:text-[50px] 2xl:text-[70px] font-semibold text-[#2B2B2E] text-center">
          {animalito.nombre}
        </h1>
        <div className="flex flex-col md:flex-row 2xl:justify-between">
          <div className="w-[50vw] h-[50vw] md:w-[38vw] md:h-[38vw] lg:w-[32vw] lg:h-[32vw] xl:w-[430px] xl:h-[300px] overflow-hidden ml-[20%] md:ml-10 shadow-lg rounded-[16px]">
            <Image
              className="inset-0 w-full h-full object-cover rounded-[16px]"
              alt={animalito.foto.alt}
              src={animalito.foto.url}
              width={528}
              height={433}
            />
          </div>
          <div className="grid grid-cols-2 pl-4 self-center justify-items-start w-full md:h-[25vw] lg:h-fit mt-5 sm:mt-3 md:ml-5 md:w-[50%] lg:ml-5 lg:w-[60%] xl:ml-20 xl:w-2/3 xl:mr-36 gap-1 md:gap-0 lg:gap-16 shadow md:shadow-md shadow-[#989898]">
            <p className="font-rubik font-semibold text-[13px] sm:text-[14px] md:text-[17px] lg:text-[25px] xl:text-[25px] 2xl:text-[30px] text-black">
              SEXO: {animalito.sexo.toUpperCase()}
            </p>
            <p className="font-rubik font-semibold text-[13px] sm:text-[14px] md:text-[17px] lg:text-[25px] 2xl:text-[30px] text-black">
              TAMAÑO: {animalito.tamanhio}
            </p>
            <p className="font-rubik font-semibold text-[13px] sm:text-[14px] md:text-[17px] lg:text-[25px] 2xl:text-[30px] text-black">
              EDAD: {animalito.edad}
            </p>
            <p className="font-rubik font-semibold text-[13px] sm:text-[14px] md:text-[17px] lg:text-[25px] 2xl:text-[30px] text-black">
              ESTERILIZACIÓN: {animalito.esterilizacion ? "SÍ" : "NO"}
            </p>
            <p className="font-rubik font-semibold text-[13px] sm:text-[14px] md:text-[17px] lg:text-[25px] 2xl:text-[30px] text-black">
              LUGAR: {animalito.lugar}
            </p>
            <p className="font-rubik font-semibold text-[13px] sm:text-[14px] md:text-[17px] lg:text-[25px] 2xl:text-[30px] text-black">
              PESO: {animalito.peso}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 sm:gap-1 md:gap-5 md:ml-4 xl:ml-10 mt-3 md:mt-1 xl:mt-4">
          <div>
            <h2 className="font-semibold font-rubik text-[12px] md:text-[15px] xl:text-[17px] 2xl:text-[20px] text-black text-left">
              VACUNAS
            </h2>
            <hr className="h-[2px] bg-[#4f4f4f] w-1/2 md:w-3/4" />
            <span className="font-semibold font-rubik text-[12px] md:text-[15px] xl:text-[17px] text-black text-left">
              <PrismicRichText field={animalito.vacunas} />
            </span>
          </div>
          <div>
            <h2 className="md:mt-1 font-semibold font-rubik text-[12px] md:text-[15px] xl:text-[17px] 2xl:text-[20px] text-black text-left">
              DESCRIPCIÓN
            </h2>
            <hr className="h-[2px] bg-[#4f4f4f] w-1/2 md:w-3/4" />
            <span className="font-semibold font-rubik text-[12px] md:text-[15px] xl:text-[17px] text-black text-left">
              <PrismicRichText field={animalito.descripcion} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
