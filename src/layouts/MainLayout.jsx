import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navber";
import CartSidebar from "../Components/CartSidebar";
import Footer from "../Components/Footer ";

const MainLayout = () => {
  return (
    <>
    <div className=" bg-background">

    <div className="flex flex-col">
      <Navbar />
      <CartSidebar />
    </div>
    <main className="max-w-screen-xl mx-auto flex-grow">

      <Outlet />
    </main>
    <Footer/>
    </div>
    </>
  );
};

export default MainLayout;
