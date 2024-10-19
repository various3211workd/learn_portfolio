import { DarkModeButton } from './darkmodebutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <>
      <div
        className="border-gray-200 dark:bg-gray-800 dark:border-gray-700 sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? '1' : '0'}`,
          top: ` ${isOpen ? '0' : '-100%'}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          <FontAwesomeIcon icon={faXmark} className="text-auto" />
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <a href="#top" className="block py-2" onClick={toggle}>
              TOP
            </a>
          </li>
          <li>
            <a href="#introduction" className="block py-2" onClick={toggle}>
              introduction
            </a>
          </li>
          <li>
            <a href="#project" className="block py-2" onClick={toggle}>
              Project
            </a>
          </li>
          <li>
            <a href="#skills" className="block py-2" onClick={toggle}>
              Skills
            </a>
          </li>
          <li>
            <a href="#slide" className="block py-2 " onClick={toggle}>
              Slide
            </a>
          </li>
          <li>
            <DarkModeButton />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
