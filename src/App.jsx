import React from "react";
// import TableMotorista from "./components/tableMotorista/TableMotorista";
import TableVeiculo from "./components/tableVeiculo/TableVeiculo";
import BasicTabs from "./components/tabs/Tabs";

function App() {
  return (
    <BasicTabs>
      <TableVeiculo />
    </BasicTabs>
  )
}

export default App
