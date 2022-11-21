/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import "./input.css";
import { ReactComponent as DeleteIcon } from "../icons_svg/x-medium.svg";
import { ReactComponent as LockedIcon } from "../icons_svg/locked.svg";

const Input = function Input() {
  return (
    <>
      <div className="input">
        <label className="input__sticker" htmlFor="input__text-field_empty">
          Дата и время заказа
        </label>
        <div className="input__area">
          <input
            className="input__text-field input__text-field_empty"
            id="input__text-field_empty"
            pattern="[0-9]{2}.[0-9]{2}.[0-9]{4} [0-9]{2}:[0-9]{2}"
            type="text"
            placeholder="Введите"
          />
        </div>
      </div>
      <div className="input">
        <label className="input__sticker" htmlFor="input__text-field_invalid">
          Дата и время заказа
        </label>
        <div className="input__area">
          <input
            className="input__text-field input__text-field_invalid"
            id="input__text-field_invalid"
            pattern="[0-9]{2}.[0-9]{2}.[0-9]{4} [0-9]{2}:[0-9]{2}"
            type="text"
            placeholder="Введите"
            defaultValue="06.12.2021"
          />
          <button className="input__button input__button_clear">
            <DeleteIcon className="input__icon" />
          </button>
        </div>
      </div>
      <div className="input">
        <label className="input__sticker" htmlFor="input__text-field_disabled">
          Дата и время заказа
        </label>
        <div className="input__area">
          <input
            className="input__text-field input__text-field_disabled"
            id="input__text-field_disabled"
            pattern="[0-9]{2}.[0-9]{2}.[0-9]{4} [0-9]{2}:[0-9]{2}"
            disabled
            type="text"
            placeholder="Введите"
            defaultValue="06.12.2021"
          />
          <icon className="input__button input__button_disabled">
            <LockedIcon className="input__icon_disabled" />
          </icon>
        </div>
      </div>
    </>
  );
};

export default Input;
