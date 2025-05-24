import { AiOutlineHome } from "react-icons/ai";
import { BiLike, BiNews } from "react-icons/bi";
import { CgPlayListSearch } from "react-icons/cg";
import {
  FaDiscord,
  FaFire,
  FaGithub,
  FaHistory,
  FaInstagram,
  FaLinkedin,
  FaShoppingCart,
} from "react-icons/fa";
import { GiHanger } from "react-icons/gi";
import { HiOutlineSignal } from "react-icons/hi2";
import { ImYoutube } from "react-icons/im";
import { IoBookSharp } from "react-icons/io5";
import {
  MdLocalMovies,
  MdOutlinePodcasts,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
} from "react-icons/md";
import { RiMusicFill } from "react-icons/ri";
import {
  SiYoutubegaming,
  SiYoutubemusic,
  SiYoutubeshorts,
} from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-52 ">
      <ul>
        <Link to={"/"}>
          <li className="flex items-center gap-2">
            <AiOutlineHome />
            Home
          </li>
        </Link>
        <li className="flex items-center gap-2">
          <SiYoutubeshorts className="text-red-500" />
          Shorts
        </li>
        <li className="flex items-center gap-2">
          <MdOutlineSubscriptions />
          Subscriptions
        </li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li className="flex items-center gap-2">
          <FaHistory />
          History
        </li>
        <li className="flex items-center gap-2">
          <CgPlayListSearch />
          Playlists
        </li>
        <li className="flex items-center gap-2">
          <IoBookSharp />
          Your courses
        </li>
        <li className="flex items-center gap-2">
          <MdOutlineWatchLater />
          Watch Later
        </li>
        <li className="flex items-center gap-2">
          <BiLike />
          Liked Videos
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="flex items-center gap-2">
          <ImYoutube />
          Youtube
        </li>
        <li className="flex items-center gap-2">
          <FaGithub />
          Github
        </li>
        <li className="flex items-center gap-2">
          <FaLinkedin />
          Linkedin
        </li>
        <li className="flex items-center gap-2">
          <FaDiscord />
          Discord
        </li>
        <li className="flex items-center gap-2">
          <FaInstagram />
          Instagram
        </li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li className="flex items-center gap-2">
          <FaFire />
          Trending
        </li>
        <li className="flex items-center gap-2">
          <FaShoppingCart />
          Shopping
        </li>
        <li className="flex items-center gap-2">
          <RiMusicFill />
          Music
        </li>
        <li className="flex items-center gap-2">
          <MdLocalMovies />
          Movies
        </li>
        <li className="flex items-center gap-2">
          <HiOutlineSignal />
          Live
        </li>
        <li className="flex items-center gap-2">
          <SiYoutubegaming />
          Gaming
        </li>
        <li className="flex items-center gap-2">
          <BiNews />
          News
        </li>
        <li className="flex items-center gap-2">
          <IoBookSharp />
          Courses
        </li>
        <li className="flex items-center gap-2">
          <GiHanger />
          fasion & Beauty
        </li>
        <li className="flex items-center gap-2">
          <MdOutlinePodcasts />
          Podcasts
        </li>
      </ul>
      <h1 className="font-bold pt-5">More from YouTube</h1>
      <ul>
        <li className="flex items-center gap-2">
          <ImYoutube className="text-red-500" />
          YouTube Premium
        </li>
        <li className="flex items-center gap-2">
          <SiYoutubemusic className="text-red-500" />
          Youtube Music
        </li>
        <li className="flex items-center gap-2">
          <TbBrandYoutubeKids className="text-red-500" />
          YouTube Kids
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
