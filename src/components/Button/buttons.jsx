/* eslint-disable react/button-has-type */
import "./button.css";
import { ReactComponent as ButtonIcon } from "../icons_svg/abort.svg";

const Buttons = function Buttons() {
  return (
    <div className="container">
      <button className="button button_size_medium button_color_white">
        <ButtonIcon className="button__icon" />
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_medium button_color_blue">
        <ButtonIcon className="button__icon" />
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_medium button_color_black">
        <ButtonIcon className="button__icon" />
        <span className="button__text">Text Here</span>
      </button>

      <button className="button button_size_medium button_color_white">
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_medium button_color_blue">
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_medium button_color_black">
        <span className="button__text">Text Here</span>
      </button>

      <button className="button button_icononly button_size_medium button_color_white">
        <ButtonIcon className="button__icon" />
      </button>
      <button className="button button_icononly button_size_medium button_color_blue">
        <ButtonIcon className="button__icon" />
      </button>
      <button className="button button_icononly button_size_medium button_color_black">
        <ButtonIcon className="button__icon" />
      </button>

      <div className="grid-gap"> </div>

      <button className="button button_size_small button_color_white">
        <ButtonIcon className="button__icon" />
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_small button_color_blue">
        <ButtonIcon className="button__icon" />
        <span className="button__text">Text Here</span>
      </button>

      <button className="button button_size_small button_color_white">
        <span className="button__text">Text Here</span>
      </button>
      <button className="button button_size_small button_color_blue">
        <span className="button__text">Text Here</span>
      </button>

      <button className="button button_icononly button_size_small button_color_white">
        <ButtonIcon className="button__icon" />
      </button>
      <button className="button button_icononly button_size_small button_color_blue">
        <ButtonIcon className="button__icon" />
      </button>
    </div>
  );
};

export default Buttons;
