import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar flex justify-between items-center px-5">
      <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891?_gl=1*1g96hnc*_ga*MTg0NzI3NjQ4MC4xNzE2MTI2MDQx*_ga_ZKBVC1X78F*MTcxNjE4NDA4NC4yLjEuMTcxNjE4NTAwNi4wLjAuMA..&_ga=2.15195382.1576550137.1716126041-1847276480.1716126041">
        <div className="envato flex">
          <img className="mx-2" src="/images/leaf.png" width={20}></img>
          <span className="text-white font-bold text-xl">enavato</span>
          <span className="text-green-600 text-xl">market</span>
        </div>
      </a>
      <a href="https://codecanyon.net/checkout/102304625/create_account?_ga=2.22461435.1576550137.1716126041-1847276480.1716126041">
        <button className="buy text-white">
          <span class="buyFront">Buy Now</span>
        </button>
      </a>
    </div>
  );
};

export default Navbar;
