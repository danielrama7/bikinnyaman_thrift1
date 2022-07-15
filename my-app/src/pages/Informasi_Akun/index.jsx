import React from "react";
import { Link, Outlet } from "react-router-dom";
import product1 from "../../img/product1.jpg";

function Informasi_Akun() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">
          Informasi Akun
        </h1>
      </div>
      <div className="mx-48 mt-12 p-3">
        <div className="flex bg-white p-10">
          <div className="w-1/4">
            <div className="mb-4">
              <Link to={"/informasiAkun"}>Informasi Akun</Link>
            </div>
            <div>
              <Link to={"/informasiAkun/akun2"}>Informasi Pembelian</Link>
            </div>
          </div>
          <div className="w-3/4 bg-red-100">
            {/* <div className="flex justify-center">
              <h1 className="font-bold text-3xl">Informasi Akun</h1>
            </div>
            <div className="flex">
              <div className="w-1/3">Nama Lengkap</div>
              <div className="w-2/3">Putri</div>
            </div>
            <div className="flex">
              <div className="w-1/3">Email</div>
              <div className="w-2/3">Putri@gmail.com</div>
            </div>
            <div className="flex">
              <div className="w-1/3">Alamat</div>
              <div className="w-2/3">Disini</div>
            </div> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informasi_Akun;
