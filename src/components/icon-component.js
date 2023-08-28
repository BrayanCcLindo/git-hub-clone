/* eslint-disable default-case */
import Heart from "../Icon/heart";
import Github from "../Icon/github";
import ArrowDown from "../Icon/arrow-down";
import Book from "../Icon/book";
import User from "../Icon/user";
import Twitter from "../Icon/twitter";
import Star from "../Icon/star";
import Search from "../Icon/search";
import Location from "../Icon/location";
import Link from "../Icon/link";
import Home from "../Icon/home";
import Check from "../Icon/check";
import Cancel from "../Icon/cancel";
import Branch from "../Icon/branch";
import Loader from "../Icon/loader";
import LightMode from "../Icon/light-mode";
import DarkMode from "../Icon/dark-mode";

function IconComponent({ name, ...props }) {
  switch (name) {
    case "heart": {
      return <Heart {...props} />;
    }
    case "github": {
      return <Github {...props} />;
    }
    case "arrowDown": {
      return <ArrowDown {...props} />;
    }
    case "book": {
      return <Book {...props} />;
    }
    case "user": {
      return <User {...props} />;
    }
    case "twitter": {
      return <Twitter {...props} />;
    }
    case "star": {
      return <Star {...props} />;
    }
    case "search": {
      return <Search {...props} />;
    }
    case "location": {
      return <Location {...props} />;
    }
    case "link": {
      return <Link {...props} />;
    }
    case "home": {
      return <Home {...props} />;
    }
    case "check": {
      return <Check {...props} />;
    }
    case "cancel": {
      return <Cancel {...props} />;
    }
    case "branch": {
      return <Branch {...props} />;
    }
    case "loader": {
      return <Loader {...props} />;
    }
    case "light": {
      return <LightMode {...props} />;
    }
    case "dark": {
      return <DarkMode {...props} />;
    }
  }
}

IconComponent.defaultProps = {
  size: 16,
  color: "#fff",
};

export default IconComponent;
