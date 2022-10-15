import { BiGroup } from "react-icons/bi";
import { GiDogHouse, GiRose } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { ImStopwatch } from "react-icons/im";
import { FaBullhorn } from "react-icons/fa";
import { MdSave, MdOutlineOndemandVideo } from "react-icons/md";

const userMenu = [
  {
    id: "1",
    Name: "Friends",
    href: "/",
    icon: BiGroup,
    color: "text-blue-400",
  },
  {
    id: "2",
    Name: "Groups",
    href: "/home",
    icon: HiUserGroup,
    color: "text-blue-500",
  },
  {
    id: "3",
    Name: "Saved",
    href: "/",
    icon: MdSave,
    color: "text-pink-500",
  },
  {
    id: "4",
    Name: "Watch",
    href: "/",
    icon: MdOutlineOndemandVideo,
    color: "text-sky-400",
  },
  {
    id: "5",
    Name: "Memories",
    href: "/",
    icon: ImStopwatch,
    color: "text-blue-400",
  },
  {
    id: "6",
    Name: "Marketplace",
    href: "/home",
    icon: GiDogHouse,
    color: "text-blue-500",
  },
  {
    id: "7",
    Name: "Ads Center",
    href: "/",
    icon: FaBullhorn,
    color: "text-blue-400",
  },
  {
    id: "8",
    Name: "Emotional Health",
    href: "/",
    icon: GiRose,
    color: "text-sky-400",
  },
];

export default userMenu;
