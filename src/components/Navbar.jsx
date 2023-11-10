import PropTypes from "prop-types";
import Logo from "../assets/images/Logo.png";

const Navbar = ({ uri }) => {
  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src={Logo} alt="logo" className="w-10 h-10" draggable="false" />
      </div>
      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0"
        >
          <li>
            <a className="uppercase">Random</a>
          </li>
          <li>
            <a
              className="uppercase"
              onClick={() => {
                downloadURI(uri, "stage.png");
              }}
            >
              Download
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="text-2xl menu menu-horizontal px-1">
          <li>
            <a
              className="uppercase"
              onClick={() => {
                downloadURI(uri, "stage.png");
              }}
            >
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default Navbar;
