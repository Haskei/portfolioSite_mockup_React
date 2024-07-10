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
      <div>
        <h3 style={{ display: "flex", justifyContent: "center" }} v>
          Póscrito
        </h3>
      </div>
      <p>
        Bom não está perfeito, eu não sei porque o CSS está estranho ao mudar de
        pagina, e o menu não ta aparecendo direito e eu poderia deixar mais
        bonito aqui e ali, mas fazendo na mão e sózinho mas
        <q>done is better than perfect</q> né?
      </p>
    </>
  );
}
