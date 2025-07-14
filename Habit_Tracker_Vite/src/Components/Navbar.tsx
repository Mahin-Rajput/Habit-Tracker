import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  
  return (
    <>
      <header className="bg-[rgb(255,255,255)] fixed w-full z-full">
        <nav>
          <ul className="flex flex-wrap justify-between item-center p-5 space-x-6 roboto-n1 w-full text-2xl">
            {/* <li>Built by Mahin <FontAwesomeIcon icon={faSpider} /></li> */}
            <li>
              <FontAwesomeIcon
              className="mr-2"
              icon={faCalendarDays}
              style={{ color: "#000000" }}
            /> Dashboard
            </li>
            <li className="ml-auto"><a href="#">Habits</a></li>
            <li>
              <a href="">Features</a>
            </li>
            <li><a href="">Login</a></li>
            <li className="-mt-1">
              <a href="/mahin_resume.pdf"
                className="
                                px-4 py-2
                                border-2 border-[rgb(58,124,243)]
                                rounded-lg
                                text-[rgb(58,124,243)] bg-white
                                font-semibold text-[17px]
                                transition-all
                                hover:bg-[rgb(58,124,243)] hover:text-white
                                text-center
                            "
              >
                Signup
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
