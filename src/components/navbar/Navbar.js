import Sidebar from "../sidebar/Sidebar";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
      
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100013019985082">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/amnkssv_a/">
            <img src="/instagram.png" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;


