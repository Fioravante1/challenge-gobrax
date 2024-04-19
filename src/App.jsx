import React, { useContext } from "react";
import TableMotorista from "./components/tableMotorista/TableMotorista";
import TableVeiculo from "./components/tableVeiculo/TableVeiculo";
import BasicTabs from "./components/tabs/Tabs";
import Context from "./context/Context";

function App() {
  const { tabIndex } = useContext(Context)

  return (
    <BasicTabs>
      {tabIndex === 0 && <TableMotorista />}
      {tabIndex === 1 && <TableVeiculo />}
    </BasicTabs>
  )
}

export default App
