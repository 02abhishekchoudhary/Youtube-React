import {
  HAMBURGER_ICON,
  SEARCH_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
} from "../utils/constants";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img src={HAMBURGER_ICON} alt="menu" className="h-8" />
        <img src={YOUTUBE_LOGO} alt="youtube logo" className="h-8 mx-2" />
      </div>
      <div className="col-span-10 px-32">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 py-2 px-5 bg-gray-400 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img src={USER_ICON} alt="user icon" className="h-10" />
      </div>
    </div>
  );
};

export default Head;
