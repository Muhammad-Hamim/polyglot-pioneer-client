import footerBg from "../../assets/cool-background.svg";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div
        className="bg-right-top pt-10 bg-contain bg-no-repeat px-8"
        style={{ backgroundImage: `url(${footerBg})` }}>
        <div className="max-w-screen-xl py-8 mx-auto grid md:grid-cols-2 justify-center lg:grid-cols-4 gap-5">
          <div className="">
            <Link to="/">
              <button>
                <img className="w-32 h-fit" src={logo} alt="" />
              </button>
            </Link>
            <p className=" text-left mt-2 text-gray-300">
              <span className="font-bold">Polyglot Pioneers Academy</span>{" "}
              signifies an institution that aims to cultivate a community of
              language learners who aspire to become skilled in multiple
              languages. It conveys a sense of exploration, innovation, and
              breaking new ground in the realm of language education.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-10">Links</h2>
            <ul className="text-gray-300 space-y-2">
              <li>
                <Link>
                  <button>Contact us</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>Gallery</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>News & Articles</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>FAQ&#39;s</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>Sign in/Registration</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>Coming soon</button>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-10">
              Online Plateform
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>
                <Link>
                  <button>About</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>Course</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>Instructors</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>Event</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>Instructor Profile</button>
                </Link>
              </li>
              <li>
                <Link>
                  <button>Purchase Guide</button>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-10">Contacts</h2>
            <div className="text-gray-200">
              <p>
                <span className="font-bold">Address:</span>{" "}
                <span className="italic">Box 564, Disneyland USA</span>
              </p>
              <p>
                <span className="font-bold">Mobile:</span>{" "}
                <a href="tel: +88 013442245442">+88 013442245442</a>{" "}
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:PPA@gmail.com">Polyglot Pioneers Academy</a>
              </p>
            </div>
            <div className="text-gray-200 mt-5 space-x-3 text-3xl">
              <Link>
                <button>
                  <FaFacebookF />
                </button>
              </Link>
              <Link>
                <button>
                  <FaTwitter />
                </button>
              </Link>
              <Link>
                <button>
                  <FaInstagram />
                </button>
              </Link>
              <Link>
                <button>
                  <FaYoutube />
                </button>
              </Link>
              <Link>
                <button>
                  <FaLinkedinIn />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:max-w-screen-sm mx-auto py-10 text-center">
          <p className="text-gray-200">
            Enter your email address to register to our newsletter subscription
          </p>
          <div className="flex gap-3 items-center mt-4 w-full mx-auto">
            <input
              type="email"
              className="p-3 rounded-md w-full outline-none border-[1px] border-indigo-600"
              placeholder="Your email"
            />
            <button className="flex gap-1 items-center justify-center bg-indigo-600 rounded-md px-5 py-3 text-gray-100">
              Subscribe <FaArrowRight />
            </button>
          </div>
        </div>
        <div className=" border-t-2 border-indigo-500">
          <p className="text-center py-8 text-slate-100">
            Copyright 2023{" "}
            <span className="font-bold cursor-pointer">
              Polyglot Pioneers Academy
            </span>{" "}
            Designed By
            <span className="font-bold"> Hamim</span>. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
