import "./style.css";
import imgLogo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div id="sombra"></div>
      <header>
        <nav>
          <div id="menu_links" className="menu_links">
            <Link to={"/"}>home</Link>
            <Link to={"/lista/servicos"}>serviços</Link>
            <Link to={"/cadastrar/usuario"}>cadastro</Link>
          </div>
          <Link className="header_icone_login" to={"/login"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
          </Link>
          <Link className="header_botao_login" to={"/login"}>
            login
          </Link>
        </nav>
      </header>
    </div>
  );
}
export default Header;
