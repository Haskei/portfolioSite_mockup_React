import Link from "next/link";
import Menu from "../components/Menu.jsx";
import Image from "next/image";
import profilePic from "/app/images/Foto_Pedro_Boa.jpg";
import "./p2_style.css";
export default function Pagina2() {
  return (
    <>
      <Menu />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={profilePic} height={300} alt="Minha Foto" />
      </div>
    </>
  );
}
