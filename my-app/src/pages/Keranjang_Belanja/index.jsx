import React, { useState } from "react";
import product1 from "../../img/product1.jpg";

const dataDummy = [
  {
    nama: "Sweater Illionis",
    warna: "Hitam",
    ukuran: "small",
    harga: 10000,
    jumlah: 3,
  },
  {
    nama: "Sweater Illionis",
    warna: "Hitam",
    ukuran: "small",
    harga: 10000,
    jumlah: 3,
  },
];

function Keranjang_Belanja() {
  // Set the initial count state to zero, 0
  const [data, setData] = useState(dataDummy);

  // Create handleIncrement event handler
  const handleIncrement = (i) => {
    const newData = [...data];
    newData[i] = {
      ...newData[i],
      jumlah: data[i].jumlah + 1,
    };

    setData(newData);
  };

  //Create handleDecrement event handler
  const handleDecrement = (i) => {
    const newData = [...data];
    newData[i] = {
      ...newData[i],
      jumlah: data[i].jumlah === 1 ? data[i].jumlah : data[i].jumlah - 1,
    };

    setData(newData);
  };
  return (
    <div className="bg-[#F6F6F6]">
      <div className="flex bg-white h-[304px] items-center justify-center">
        <img src={product1} alt="" className="object-cover h-full w-full" />
        <h1 className="text-5xl font-bold absolute text-white">
          Keranjang Belanja
        </h1>
      </div>
      <div className="mx-20 mt-12 p-3">
        <div className="bg-white p-10">
          <table className="table-auto w-full">
            <thead className="bg-[#F6F6F6] h-10 text-center font-bold">
              <tr>
                <th className="p-2">PRODUK</th>
                <th className="p-2">HARGA</th>
                <th className="p-2">JUMLAH</th>
                <th className="p-2">TOTAL</th>
                <th className="p-2">HAPUS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
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
                          {item.nama}
                        </a>
                        <p className="text-sm">Warna: {item.warna}</p>
                        <p className="text-sm">Ukuran: {item.ukuran}</p>
                      </div>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div>
                      <p className="font-bold">Rp. {item.harga}</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleDecrement(i)}
                        className="bg-[#F6F6F6] p-1 w-10 h-8"
                      >
                        -
                      </button>
                      <h1 className="bg-[#F6F6F6] p-1 w-10 h-8 mx-1">
                        {item.jumlah}
                      </h1>
                      <button
                        onClick={() => handleIncrement(i)}
                        className="bg-[#F6F6F6] p-1 w-10 h-8"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div>
                      <p className="font-bold">
                        Rp. {item.harga * item.jumlah}
                      </p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="w-20"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Keranjang_Belanja;
