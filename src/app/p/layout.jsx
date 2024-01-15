import SideLink from "@/components/home/SideLink";
import Footer from "@/components/utils/Footer";
import Header from "@/components/utils/Header";
import Navbar from "@/components/utils/Navbar";

export const metadata = {
  title: "Art of Electronics - Categories",
  description: "Your first stop electronic online website",
};

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <Header />
      <div className="seg_container h-fit mt-3 ">
        {/* <div className="w-[15rem]">
              <SideLink />
            </div> */}
        {children}
      </div>
      <Footer />
    </div>
  );
}
