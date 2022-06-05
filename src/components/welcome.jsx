import React from 'react'
import {Link} from 'react-router-dom'

export function Welcome() {
    return (  
    <main>

            <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
                <div className="container7">
                    
                    
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/info">Ajouter</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="#">Consulter</Link>
                            </li>

                            <a className="navbar-brand d-none d-lg-block" href="index.html">
                                Gestionnaire
                                <strong className="d-block">Des Bordereaux</strong>
                            </a>
                            <li className="nav-item">
                                <Link className="nav-link" to="/modifier">Modifier</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">About</Link>
                            </li>

                           
                            
                            
                        </ul>
                    </div>
            </nav>
            <section className="hero" id="hero">
                
                     
                
            </section>
        </main>
    );
  }