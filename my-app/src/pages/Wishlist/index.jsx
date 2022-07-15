import React from "react";
import product1 from "../../img/product1.jpg";

function Wishlist() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">Wishlist</h1>
      </div>
      <div className="mx-20 mt-12 p-3">
        <div className="bg-white p-10">
          <table className="table-auto w-full">
            <thead className="bg-[#F6F6F6] h-10 text-center font-bold">
              <tr>
                <th className="p-2">PRODUK</th>
                <th className="p-2">HARGA</th>
                <th className="p-2">STATUS BARANG</th>
                <th className="p-2">MASUKKAN KERANJANG</th>
                <th className="p-2">HAPUS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="w-80 pt-6">
                  <div className="flex items-center">
                    <div className="h-28 w-28">
                      <img
                        src={product1}
                        alt=""
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="text-center pl-10">
                      <a href="" className="font-bold">
                        Sweater Illinois
                      </a>
                      <p className="text-sm">Warna: Hitam</p>
                      <p className="text-sm">Ukuran: SL</p>
                    </div>
                  </div>
                </td>
                <td className="pt-6">
                  <div>
                    <p className="font-bold">Rp. 50.000</p>
                  </div>
                </td>
                <td className="pt-6">
                  <div className="font-bold">
                    <p>Stok Tersedia</p>
                  </div>
                </td>
                <td className="pt-6">
                  <div className="w-44"></div>
                </td>
                <td className="pt-6">
                  <div className="w-20"></div>
                </td>
              </tr>
              <tr className="text-center">
                <td className="w-80 pt-6">
                  <div className="flex items-center ">
                    <div className="h-28 w-28">
                      <img
                        src={product1}
                        alt=""
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="text-center pl-10">
                      <a href="" className="font-bold">
                        Sweater Illinois
                      </a>
                      <p className="text-sm">Warna: Hitam</p>
                      <p className="text-sm">Ukuran: SL</p>
                    </div>
                  </div>
                </td>
                <td className="pt-6">
                  <div>
                    <p className="font-bold">Rp. 50.000</p>
                  </div>
                </td>
                <td className="pt-6">
                  <div className="font-bold">
                    <p>Stok Habis</p>
                  </div>
                </td>
                <td className="pt-6">
                  <div className="w-44"></div>
                </td>
                <td className="pt-6">
                  <div className="w-20"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
