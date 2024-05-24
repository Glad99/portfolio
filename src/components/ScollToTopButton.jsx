
import { TiArrowUp } from "react-icons/ti";

const ScrollToTopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="p-1 border-4 border-purple-900 text-purple-900 hover:bg-slate-600 rounded-3xl text-2xl hover:text-white absolute right-10 cursor-pointer hover:border-none hover:p-2" 
    >
      <TiArrowUp/>
    </button>
  );
};

export default ScrollToTopButton;
