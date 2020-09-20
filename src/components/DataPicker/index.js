import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ptBr from "date-fns/locale/pt-BR"; // the locale you want

import { InputStyle } from "./styles";

registerLocale("pt-BR", ptBr); // register it with the name you want

const DataPicker = (props) => {
  const ExampleCustomInput = ({ value, onClick, onChange }) => (
    <InputStyle
      className="example-custom-input"
      onClick={onClick}
      value={value}
      onChange={onChange}
    />
  );

  return (
    <DatePicker
      selected={props.startDate}
      onChange={(date) => props.changed(date, props.name)}
      locale="pt-BR"
      showTimeSelect
      timeFormat="p"
      timeIntervals={15}
      dateFormat="Pp"
      customInput={<ExampleCustomInput />}
    />
  );
};

export default DataPicker;
