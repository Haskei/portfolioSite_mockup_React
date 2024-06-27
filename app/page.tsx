import Image from "next/image";
import React from "react";
import "./style.css";
import Header from "./components/Header";
import Proposito from "./components/proposito";
import Menu from "./components/Menu.jsx";
import profilePic from "/app/images/Foto_Pedro_Boa.jpg";
import Nasc from "./components/Nasc";
export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={profilePic} height={300} alt="Minha Foto" />
      </div>
      <Proposito />
      <h1 style={{ display: "flex", justifyContent: "center"}}>Passado</h1>
      <Nasc />
    </>
  );
}
