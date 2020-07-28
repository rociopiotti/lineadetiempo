import React from "react";
// FONT-AWESOME:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faGithub,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Icons = (props) => {
  // DEFINIR ICONS:
  let faIcon;
  switch (props.type) {
    case "instagram":
      faIcon = faInstagram;
      break;
    case "github":
      faIcon = faGithub;
      break;
    case "behance":
      faIcon = faBehance;
      break;
    case "close":
      faIcon = faTimes;
      break;
    default:
      faIcon = null;
      break;
  }
  return <FontAwesomeIcon icon={faIcon} size='sm' />;
};

export default Icons;
