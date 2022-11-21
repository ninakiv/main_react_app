import "./components/css/settings.css";
import "./components/css/main.css";

import Icons from "./components/Icon/icon";
import Buttons from "./components/Button/buttons";
import Input from "./components/Input/input";

function App() {
  return (
    <section>
      <div className="box box_icon">
        <Icons />
      </div>
      <div className="box box_input">
        <Input />
      </div>
      <div className="box box_button">
        <Buttons />
      </div>
    </section>
  );
}

export default App;
