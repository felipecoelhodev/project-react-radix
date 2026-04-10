import "./App.css";
import MenuBarDemo from "./components/MenuBar";
import AccordionDemo from "./components/Accordion";
import CheckboxDemo from "./components/Checkbox";
import DialogDemo from "./components/Dialog";
import PopoverDemo from "./components/Popover";
import RadioGroupDemo from "./components/RadioGroup";
import SelectDemo from "./components/Select";
import SliderDemo from "./components/Slider";
import SwitchDemo from "./components/Switch";
import ToastDemo from "./components/Toast";
import ButtonDemo from "./components/Button";
import FieldsetDemo from "./components/Fieldset";
import InputDemo from "./components/Input";
import LabelDemo from "./components/Label";

function App() {
  return (
    <>
      <MenuBarDemo />
      <h1 className="AppTitle">Dashboard de Componentes</h1>
      <p className="AppDescription">Interface unificada com acessibilidade.</p>

      <div className="ComponentsGrid">
        <div className="ComponentCard">
          <h2 className="CardTitle">Entradas Básicas</h2>
          <div className="CardContent column">
            <FieldsetDemo>
              <LabelDemo htmlFor="nome">Usuário</LabelDemo>
              <InputDemo id="nome" placeholder="Digite seu nome..." />
            </FieldsetDemo>
            <div style={{ display: "flex", gap: "10px" }}>
              <ButtonDemo>Botão</ButtonDemo>
              <DialogDemo />
            </div>
          </div>
        </div>

        <div className="ComponentCard">
          <h2 className="CardTitle">Seletores e Switch</h2>
          <div className="CardContent column">
            <SelectDemo />
            <SwitchDemo />
            <CheckboxDemo />
            <SliderDemo />
          </div>
        </div>

        <div className="ComponentCard">
          <h2 className="CardTitle">Interação e Status</h2>
          <div className="CardContent">
            <PopoverDemo />
            <ToastDemo />
          </div>
          <br />
          <FieldsetDemo
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <LabelDemo style={{ textAlign: "left", color: "#6e40c9" }}>
              Gênero
            </LabelDemo>
            <RadioGroupDemo />
          </FieldsetDemo>
        </div>

        <div className="ComponentCard full-width">
          <h2 className="CardTitle">FAQ / Accordion</h2>
          <AccordionDemo />
        </div>
      </div>
    </>
  );
}

export default App;
