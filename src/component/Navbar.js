import React from "react";
import "../styles/nav.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const search = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 96 960 960"
      width="48"
    >
      <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
    </svg>
  );

  const logo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="800"
      width="1200"
      viewBox="-7.93728 -13.2296 68.78976 79.3776"
    >
      <defs>
        <clipPath id="a">
          <path d="M0 595.28h841.89V0H0z" />
        </clipPath>
      </defs>
      <g
        clip-path="url(#a)"
        transform="matrix(.35278 0 0 -.35278 -196.111 155.4552)"
      >
        <path
          fill-rule="evenodd"
          fill="#ff6700"
          d="M700.2027 290.6537H561.5962c-3.145 0-5.6943 2.5495-5.6943 5.6946v138.6162c0 3.1452 2.5493 5.6932 5.6943 5.6932h138.6065c3.145 0 5.6942-2.548 5.6942-5.6932V296.3483c0-3.1451-2.5493-5.6946-5.6942-5.6946"
        />
        <g fill="#fff">
          <path d="M673.5186 393.4786h-11.8004c-.5053 0-.9144-.402-.9144-.8972v-53.8442c0-.491.4091-.8929.9144-.8929h11.8004c.501 0 .9158.402.9158.893v53.8441c0 .4952-.4148.8972-.9158.8972m-40.2916 0h-44.9496c-.5053 0-.9115-.402-.9115-.8972v-53.8442c0-.491.4062-.8929.9115-.8929h11.8033c.5024 0 .9186.402.9186.893v42.2596c0 .488.4062.8929.9115.8929h25.4252c7.1498 0 9.1794-5.4764 9.1794-9.0092v-34.1434c0-.491.4105-.8929.9158-.8929h11.7961c.5024 0 .9144.402.9144.893v38.1971c0 3.151-.379 7.6814-4.444 11.6692-4.2531 4.163-8.133 4.875-12.4708 4.875" />
          <path d="M624.959 372.0322h-12.3918c-.5053 0-.92-.402-.92-.8943v-32.405c0-.4895.4147-.8914.92-.8914h12.3918c.501 0 .9115.402.9115.8914v32.405c0 .4924-.4105.8943-.9115.8943" />
        </g>
      </g>
    </svg>
  );

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <Link className="navLinks" to="/miphones">
        Mi Phones
      </Link>
      <Link className="navLinks" to="/redmiphones">
        Redmi Phones
      </Link>
      <Link className="navLinks" to="/tv">
        Tv
      </Link>
      <Link className="navLinks" to="laptops">
        Laptops
      </Link>
      <Link className="navLinks" to="lifestyle">
        Finess & Lifestyle
      </Link>
      <Link className="navLinks" to="/home">
        Home
      </Link>
      <Link className="navLinks" to="/audio">
        Radio
      </Link>
      <Link className="navLinks" to="/accessories">
        Accessories
      </Link>
      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        {search}
      </div>
    </div>
  );
};

export default Navbar;
