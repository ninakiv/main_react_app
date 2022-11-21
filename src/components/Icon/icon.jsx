import "./icon.css";

import { ReactComponent as IconAbort } from "../icons_svg/abort.svg";
import { ReactComponent as IconBin } from "../icons_svg/bin.svg";
import { ReactComponent as IconCheckmark } from "../icons_svg/checkmark.svg";
import { ReactComponent as IconDot } from "../icons_svg/dot.svg";
import { ReactComponent as IconFilter } from "../icons_svg/filter.svg";
import { ReactComponent as IconLocked } from "../icons_svg/locked.svg";
import { ReactComponent as IconMoon } from "../icons_svg/moon.svg";
import { ReactComponent as IconPencil } from "../icons_svg/pencil.svg";
import { ReactComponent as IconRefresh } from "../icons_svg/refresh.svg";
import { ReactComponent as IconSearch } from "../icons_svg/search.svg";
import { ReactComponent as IconSun } from "../icons_svg/sun.svg";
import { ReactComponent as IconVArrow } from "../icons_svg/v_arrow.svg";
import { ReactComponent as IconXLarge } from "../icons_svg/x-large.svg";
import { ReactComponent as IconXMedium } from "../icons_svg/x-medium.svg";

const Icon = function Icon() {
  return (
    <div className="icon">
      <IconMoon className="icon__field" />
      <IconSun className="icon__field" />
      <IconLocked className="icon__field" />
      <IconCheckmark className="icon__field" />
      <IconDot className="icon__field" />
      <IconFilter className="icon__field" />
      <IconVArrow className="icon__field" />
      <IconSearch className="icon__field" />
      <IconXMedium className="icon__field" />
      <IconXLarge className="icon__field" />
      <IconRefresh className="icon__field" />
      <IconPencil className="icon__field" />
      <IconBin className="icon__field" />
      <IconAbort className="icon__field" />
    </div>
  );
};

export default Icon;
