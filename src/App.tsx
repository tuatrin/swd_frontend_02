// src/App.tsx
import React from "react";
import { Flex, Layout, Menu } from "antd";
import AddPersonForm from "./components/AddPersonForm";
import PersonTable from "./components/PersonTable";
import "./App.scss";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="main">
      <Flex flex={1} vertical style={{ padding: "0 100px" }}>
        <h1>การจัดการหน้าฟอร์ม</h1>
        <div style={{ padding: "0 10%" }}>
          <AddPersonForm />
        </div>
        <PersonTable />
      </Flex>
    </div>
  );
}

export default App;
