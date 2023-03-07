const { Link } = require("react-router-dom");

const Navbar = () => {
  return (
    <nav style={{ textAlign: "center", marginTop: "20px" }}>
            
      <Link to="/" style={{ padding: "10px" }}>
                Home       
      </Link>
            
      <Link to="/profile" style={{ padding: "10px" }}>
        Login       
      </Link>
            
      <Link to="/products" style={{ padding: "10px" }}>
        Products       
      </Link>
          
    </nav>
  );
};
export default Navbar;
