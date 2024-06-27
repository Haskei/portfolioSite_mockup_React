"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Menu from "../components/Menu.jsx";
import profilePic from "/app/images/Foto_Pedro_Boa.jpg";
import "./p1_style.css";
import Pres from "../components/Presente.tsx";

export default function Pagina1() {
  const searchParams = useSearchParams();
  let name = searchParams.get("name");

  return (
    <>
      <Menu />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={profilePic} height={300} alt="Minha Foto" />
      </div>
      <Pres />
    </>
  );
}
