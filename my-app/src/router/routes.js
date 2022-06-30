import Cara_Pemesanan from "../pages/Cara_Pemesanan";
import Kebijakan_Pengembalian from "../pages/Kebijakan_Pengembalian";
import Kebijakan_Privasi from "../pages/Kebijakan_Privasi";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Syarat_Ketentuan from "../pages/Syarat_Ketentuan";
import Tentang_Kami from "../pages/Tentang_Kami";
import Kontak_Kami from "../pages/Kontak_Kami";
import Ulasan from "../pages/Ulasan";
import Home_Page from "../pages/Home_Page";

export const routes = [
  {
    name: "Login",
    path: () => {
      return "/login";
    },
    exact: true,
    component: Login,
  },
  {
    name: "Register",
    path: () => {
      return "/register";
    },
    exact: true,
    component: Register,
  },
  {
    name: "Cara_Pemesanan",
    path: () => {
      return "/caraPemesanan";
    },
    exact: true,
    component: Cara_Pemesanan,
  },
  {
    name: "Kebijakan_Pengembalian",
    path: () => {
      return "/kebijakanPengembalian";
    },
    exact: true,
    component: Kebijakan_Pengembalian,
  },
  {
    name: "Kebijakan_Privasi",
    path: () => {
      return "/kebijakanPrivasi";
    },
    exact: true,
    component: Kebijakan_Privasi,
  },
  {
    name: "Syarat_Ketentuan",
    path: () => {
      return "/syaratKetentuan";
    },
    exact: true,
    component: Syarat_Ketentuan,
  },
  {
    name: "Tentang_Kami",
    path: () => {
      return "/tentangKami";
    },
    exact: true,
    component: Tentang_Kami,
  },
  {
    name: "Kontak_Kami",
    path: () => {
      return "/kontakKami";
    },
    exact: true,
    component: Kontak_Kami,
  },
  {
    name: "Ulasan",
    path: () => {
      return "/ulasan";
    },
    exact: true,
    component: Ulasan,
  },
  {
    name: "Home_Page",
    path: () => {
      return "/homePage";
    },
    exact: true,
    component: Home_Page,
  },
];
