"use client";
import { ToastContainer } from "react-toastify";
import Header from "@/components/utils/Header";
import Navbar from "@/components/utils/Navbar";
import Footer from "@/components/utils/Footer";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <div
          style={{ gridTemplateRows: "2.3rem 4rem auto auto" }}
          className="w-screen h-screen grid overflow-x-hidden"
        >
          <Navbar />
          <Header />
          <div className="seg_container">{children}</div>
          <div className="mt-[3rem]">
            <Footer />
          </div>
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
