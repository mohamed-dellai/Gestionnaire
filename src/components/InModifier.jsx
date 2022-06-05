
import {useState} from 'react'
import {Link} from 'react-router-dom'
export function InModifier(props){
    var item=JSON.parse(window.localStorage.getItem("all-data"))
    const obj=item[props.index]
    const [visible , setVisible]= useState(false)
    const [top1,setTop]=useState(100)
    const [numero,setnumero]=useState(obj.numero)
    const [datefact,setdatefact]=useState(obj.datefact)
    const [patient,setpatient]=useState(obj.patient)
    const [racine,setracine]=useState(obj.racine)
    const [cle,setcle]=useState(obj.cle)
    const [qualite,setqualite]=useState(obj.qualite)
    const [codebureau,setbureau]=useState(obj.codebureau)
    const [anne,setanne]=useState(obj.anne)
    const [ordre,setordre]=useState(obj.ordre)
    const [seance,setseance]=useState(obj.seance)
    const [deb,setdeb]=useState(obj.deb)
    const [fin,setfin]=useState(obj.fin)
    const [semaine,setsemaine]=useState(obj.semaine)
    const [prixunitaire,setprix]=useState(11.5)
    const [tva,settva]=useState(7)
    const [dateTble , setTable]=useState([])
    
    const show=<div className='show' style={{margin: "auto" , width: "200px" , display: "flex" , gap: "50px"}}>
    <Link style={{textDecoration: "none" , color: "white"}} to={`facture/${props.index}`} >Facture</Link>
    <Link style={{textDecoration: "none" , color: "white"}}  to={`bordereau/${props.index}`}>Bordereau</Link>
  </div>

    const supprimer= ()=>{
    
      item.splice(props.index,1)
      
      item.map((item,index)=>{
          return(
              item.id=index
          )
      })
      
      window.localStorage.setItem("all-data", JSON.stringify(item))
      window.location.replace('/modifier');
      setTimeout(window.location.reload(),500)
    }

    setInterval(()=>{
      setTop(window.pageYOffset)
    },10)
    const imprimer=()=>{
       setVisible(!visible)
      
    }
    const modifier= ()=>{
      var arr=JSON.parse(window.localStorage.getItem("all-data"))
      var obj1={
        id: props.index,
        numero: numero ,
        datefact: datefact,
        patient: patient,
        racine: racine,
        cle: cle,
        qualite: qualite,
        codebureau: codebureau,
        anne: anne,
        ordre: ordre,
        seance: seance,
        deb: deb,
        fin: fin,
        semaine: semaine,
        prinxunitaire: prixunitaire,
        tva: tva,
        array: dateTble
      }
      arr.splice(props.index,1,obj1)
      window.localStorage.setItem("all-data",JSON.stringify(arr))
      setTimeout(window.location.reload(),500)
    }
  
    const lesSeances2= ()=>{
      let dateObj= new Date(deb)
      let dateArr=[]
      for(let i=0 ; i<document.getElementById('seance').value;i++){
        console.log(i)
        if(dateObj.getMonth()+1<10 && dateObj.getDate()<10)
         {
           dateArr.push(`${dateObj.getFullYear()}/0${dateObj.getMonth()+1}/0${dateObj.getDate()}`)
         }
        else 
        if(dateObj.getMonth()+1>=10 && dateObj.getDate()>=10){
          dateArr.push(`${dateObj.getFullYear()}/${dateObj.getMonth()+1}/${dateObj.getDate()}`)
        }

        else 
        if(dateObj.getMonth()+1<10 && dateObj.getDate()>=10){
          dateArr.push(`${dateObj.getFullYear()}/0${dateObj.getMonth()+1}/${dateObj.getDate()}`)
        }

        else 
        if(dateObj.getMonth()+1>=10 && dateObj.getDate()<10)
         {
          dateArr.push(`${dateObj.getFullYear()}/${dateObj.getMonth()+1}/0${dateObj.getDate()}`)
        }
      
        dateObj.setDate(dateObj.getDate()+1)
      }
      
      setseance(document.getElementById('seance').value)
      setTable(dateArr)
      setfin(dateArr[dateArr.length-1].replaceAll('/','-'))
    }

    return(
            <div className="info">
              <div className="title">
                  <h1>Facturation Décision {props.index}</h1>
              </div>
              <div className="n-fact">
                 <p>N°Facture</p>
                 <input type="text" id="nfa" disabled style={{color: 'white'}} value={numero}></input>
                 <p>Date Facture</p>
                 <input type="date" value={datefact} onChange={(e)=>{ setdatefact(e.target.value)}}></input>
      
              </div>
              
              <div className="patient">
              <h1>Patient</h1>
              <hr></hr>
                <div className="align">
                    <p>Patient </p>
                  <input type="text" id="patient" value={patient} onChange={(e)=>{ setpatient(e.target.value)}}></input>
                </div>
                <div className="align">
                    <p>Racine</p>
                  <input type="text" id="Racine" value={racine} onChange={(e)=>{ setracine(e.target.value)}}></input>
                </div>
                <div className="align">
                    <p>Clé</p>
                  <input type="text" id="Cle" value={cle} onChange={(e)=>{setcle(e.target.value)}}></input>
                  <p>N°.assuré</p>
                  <input type="text" id="num" value={`${racine}/${cle}`}></input>
                </div>
               
                <div className="align">
                    <p>Qualité</p>
                  <select className="qualite" value={qualite} onChange={(e)=>{setqualite(e.target.value)}}>
                      <option value="mére">mére</option>
                      <option value="enfant">enfant</option>
                  </select>
                </div>
              </div>
              <div className="des">
              <h1>Desicision</h1>
              <hr></hr>
              <div className="align">
                    <p>Code Bureau</p>
                  <input type="text" id="bureau" value={codebureau} onChange={(e)=>{setbureau(e.target.value)}}></input>
                </div>
                <div className="align">
                    <p>Année</p>
                  <input type="text" id="annee" value={anne} onChange={(e)=>{setanne(e.target.value)}}></input>
                  <p>Numero desicision </p>
                  <input type="text" id="num-des" value={`${codebureau}/${anne}/${ordre}`}></input>
                </div>
                <div className="align">
                    <p>N°Ordre</p>
                  <input type="text" id="Racine" value={ordre} onChange={(e)=>{setordre(e.target.value)}}></input>
                  
                </div>
                <div className="align">
                    <p>Nbre Séance</p>
                    <input type="number" id="seance" style={{marginRight: "15px"}} value={seance} onChange={lesSeances2}></input>
                  <p>Nbre semaine</p>
                  <input type="text" id="semaine" style={{color: 'white'}} disabled value={Math.ceil(seance/7)}></input>
                </div>
                <div className="align">
                    <p>Date Deb</p>
                    <input type="date" id="deb"  value={deb} onChange={(e)=>{setdeb(e.target.value); lesSeances2()} } style={{marginRight: "15px"}}></input>
                  <p>Date Fin</p>
                  <input type="Date" id="fin" value={fin} style={{color:'white'}} onChange={(e)=>{setfin(e.target.value)}} disabled></input>
                </div>
              </div>
              <div className="calcul">
                  <h1>Calcul HT</h1>
                  <hr></hr>
                  <div className="align">
                    <p>Prix Uni</p>
                  <input type="text" id="uni" value={prixunitaire} onChange={(e)=>{setprix(e.target.value)}}></input>
                  
                </div>
      
                <div className="align">
                    <p>Prix HT</p>
                  <input type="text" id="ht"  value={seance*prixunitaire*0.93}  style={{marginRight: "15px"}}></input>
                  <p>Prix TTC</p>
                  <input type="text" id="ttc" value={seance*prixunitaire}></input>
                </div>
      
                <div className="align">
                    <p>T.V.A</p>
                  <input type="text" id="tva" value={tva} style={{marginRight: "15px"}}></input>
      
                  <p>Montant TVA</p>
                  <input type="text" id="montant" value={(seance*prixunitaire)-(seance*prixunitaire*0.93)}></input>
                  
                </div>
                <div className="buttons">
                 <button type="button" className="btn btn-primary btn-block fix" onClick={modifier}>Modifier</button>
                 <button type="button" className="btn btn-success btn-block" onClick={imprimer}>Imprimer</button>
                 <button type="button" className="btn btn-danger btn-block" onClick={supprimer}>Supprimer</button>
                </div>
                 {visible ? show : ""}
              </div>

              <div className='container' style={{top: top1+150 }}>
        <table className='tableau' id="tab" >
  <thead>
    <tr>
      <th>N° de seance</th>
      <th>Date de seance</th>
    </tr>
  </thead>
  <tbody>

   { dateTble.map( (item,index)=>{
   return (
    <tr>
   <td data-column="First Name">{index+1}</td>
      <td data-column="Last Name">{item}</td>
    </tr>

    )})}
    
   
    
  </tbody>
</table>
</div>

      </div>
    )
}