
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <div className='app'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root