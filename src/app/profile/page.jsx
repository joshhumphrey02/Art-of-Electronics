import Footer from "@/components/utils/Footer";
import Header from "@/components/utils/Header";
import Navbar from "@/components/utils/Navbar";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="seg_container">
        <div className="my-2">
          <h2>
            Welcome, <span>Humphrey Joshua</span>
          </h2>
          <h4>Joshuahumphrey759@gmail.com</h4>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="">MY ACCOUNT</h3>
          <ul className="acc_menu format">
            <div className="">
              <li>
                <Link href="/" className="pro_links">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/" className="pro_links">
                  Inbox
                </Link>
              </li>
              <li>
                <Link href="/" className="pro_links">
                  Pending Reviews
                </Link>
              </li>
              <li>
                <Link href="/" className="pro_links">
                  Favorite Items
                </Link>
              </li>
              <li>
                <Link href="/" className="pro_links">
                  Dispute
                </Link>
              </li>
            </div>
          </ul>
        </div>

        <div className="account_info">
          <h3 className="">ACCOUNT SETTINGS</h3>
          <ul className="acc_setting format">
            <div className="">
              <li>
                <Link href="/" className="pro_links">
                  Account Infomation
                </Link>
              </li>
              <li>
                <Link href="/" className="pro_links">
                  Shipping Address
                </Link>
              </li>
              <li>
                <Link href="/" className="pro_links">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/" className="pro_links">
                  Close Account
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <span className="logout">
          <Link href="/logout">LOGOUT</Link>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default page;
