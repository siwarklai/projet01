import React from 'react';
import './login.css';
export const Login = () => {
    return (
        <div className="comar-form-container">
        <div className='background'>
        <form className="comar-form">
          <h2 className="comar-form-title">Contactez-nous</h2>
          <div className="comar-form-group">
            <label htmlFor="Nom">Email</label>
            <input type="text" id="name" name="name" className="comar-form-input" />
          </div>
          <div className="comar-form-group">
            <label htmlFor="Mot De Passe">Numéro de Police</label>
            <input type="password" id="password" name="password" className="comar-form-input" />
          </div>
          <button type="submit" className="comar-form-button">Envoyer</button>
        </form>
      </div>
    </div>
    );
   
    

    

    

}