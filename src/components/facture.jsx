import React from 'react'
import {useParams} from "react-router-dom"
export function Facture() {
    const params=useParams()
    
    var test= JSON.parse(window.localStorage.getItem("all-data"))
    test=test[params.id]
    console.log(test.prinxunitaire)
    
    return(
     <div>
        <div className="info-generale">
            <div className="lestitres">
                <p>Patient</p>
                <p>N°Assure</p>
                <p>Qualité</p>
                <p>Prise en charge N°</p>
                <p>Nombre de séances</p>
            </div>
            <div className='lesinformatios'>
                <p>{test.patient}</p>
                <p>{test.numero}</p>
                <p>{test.qualite}</p>
                <p>{test.datefact}</p>
                <p>{test.seance} seances de {test.deb} à {test.fin}</p>
            </div>
        </div>
        <div className="montant1">
            <div className='lestitres'>
                <p>Prix Unitaire</p>
                <p>Montant HT</p>
                <p>Montant TVA</p>
                <p>Montant Total TTC</p>
            </div>
            <div className='lesinformatios'>
                <p>{test.prinxunitaire}</p>
                <p>{test.prinxunitaire * test.seance * 0.93}</p>
                <p>{test.prinxunitaire * test.seance-(test.prinxunitaire * test.seance * 0.93)}</p>
                <p>{test.prinxunitaire * test.seance}</p>
            </div>
        </div>
     </div>)
}