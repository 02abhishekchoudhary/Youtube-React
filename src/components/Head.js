import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_ICON,
  SEARCH_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    // Update the cache
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    // API call
    // console.log("API call - " + searchQuery);
    // make an api call after every key press
    // but if the diff between 2 API call is <200ms
    // decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

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
        <div className="relative w-full">
          <div>
            <input
              type="text"
              className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
              placeholder="Search"
            />
            <button className="border border-gray-400 py-2 px-5 bg-gray-400 rounded-r-full">
              Search
            </button>
          </div>
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 bg-white py-2 px-2 w-[37rem] shaadow-lg rounded-lg border border-gray-400 z-50">
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100"
                  >
                    🔍 {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img src={USER_ICON} alt="user icon" className="h-10" />
      </div>
    </div>
  );
};

export default Head;
