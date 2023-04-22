import React, { useContext } from "react";
import "../styles/Connexion.css";
import logo from "../assets/LOGO2 2.png";
import { DocsContext } from "../components/DocsContext";
import mailIcon from '../assets/Vectormail.png'
import pwdIcon from '../assets/Vectorpwd.png'

function Connexion() {
  const { setLogged } = useContext(DocsContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogged(true);
    //  redirect('/Accueil')
  };

  return (
    <div className="Connexion">
      <div className="wrapper">
        <div className="logo-part">
          <img src={logo} className="signin-logo" alt="Logo" />
        </div>
        <div className="form-wrapper">
          <form method="POST" onSubmit={handleSubmit}>
            <p>CONNEXION</p>

            <label htmlFor="email">
            <img src={mailIcon} alt=""/>
              <input
                type={"email"}
                required
                autoComplete="off"
                placeholder="Email"
                name="mail"
                id="email"
              />
            </label>

            <label htmlFor="password" >
            <img src={pwdIcon} alt=""/>
              <input
                type="password"
                placeholder="Mot de passe"
                required
                name="password"
                id="password"
              />
            </label>

            <span>Mot de passe oublié?</span>

            <button type="submit">Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
