import { useDispatch } from "react-redux";
import {
  HAMBURGER_ICON,
  SEARCH_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  useEffect(() => {
    // API call
    console.log(searchQuery);
    // make an api call after every key press
    // but if the diff between 2 API call is <200ms
    // decline the API call
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          src={HAMBURGER_ICON}
          alt="menu"
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img src={YOUTUBE_LOGO} alt="youtube logo" className="h-8 mx-2" />
        </a>
      </div>
      <div className="col-span-10 px-32">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
