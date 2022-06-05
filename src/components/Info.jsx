import {useEffect, useState} from 'react'

export function Info() {
    const date=new Date()
    const date1=date.getDate()
    const date2=date.getFullYear();
    const [top1,setTop]=useState(100)
     const [numero,setnumero]=useState(`${date1}/${date2}`)
     const [datefact,setdatefact]=useState("")
     const [patient,setpatient]=useState("")
     const [racine,setracine]=useState("")
     const [cle,setcle]=useState("")
     const [qualite,setqualite]=useState("")
     const [codebureau,setbureau]=useState("")
     const [anne,setanne]=useState("")
     const [ordre,setordre]=useState("")
     const [seance,setseance]=useState("")
     const [deb,setdeb]=useState("")
     const [fin,setfin]=useState("")
     const [semaine,setsemaine]=useState(Math.ceil(seance/7))
     const [prixunitaire,setprix]=useState(11.5)
     const [tva,settva]=useState(7)
     const [show , setShow]=useState(false)
     const [dateTble , setTable]=useState([])
   
     
     function setStorage(e){
     
       if(window.localStorage.getItem("all-data")===null)
          {window.localStorage.setItem("all-data","[]")
          var arr=JSON.parse(window.localStorage.getItem("all-data"))
          var obj={
            id: arr.length,
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
          arr.push(obj)
          window.localStorage.setItem("all-data",JSON.stringify(arr))}
       else
          {
             arr=JSON.parse(window.localStorage.getItem("all-data"))
             obj={
              id: arr.length,
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
            arr.push(obj)
            window.localStorage.setItem("all-data",JSON.stringify(arr))
          } 
          setShow(true)
          
          setTimeout(()=>{window.location.replace('/');},1000)
     }
    
     setInterval(()=>{
       setTop(window.pageYOffset)
     },10)
     
     const animation=<div className="success-animation">
     <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
     </div>
    
    

    const lesSeances2= (e)=>{ 
      
      let dateObj= new Date(document.getElementById("deb").value)
      let dateArr=[]
      var j=0
      while(j<document.getElementById("seance").value){
        
        if(dateObj.getDay()==0){
          dateObj.setDate(dateObj.getDate()+1) ;
          console.log("ahad   j=",j)
        }
        else{
          j++
          console.log(dateObj.getDay())
        if(dateObj.getMonth()<10 && dateObj.getDate()<10)
           dateArr.push(`${dateObj.getFullYear()}/0${dateObj.getMonth()+1}/0${dateObj.getDate()}`)
         
        else 
        if(dateObj.getMonth()>10 && dateObj.getDate()>10)
          dateArr.push(`${dateObj.getFullYear()}/${dateObj.getMonth()+1}/${dateObj.getDate()}`)
        

        else 
        if(dateObj.getMonth()<10 && dateObj.getDate()>10)
          dateArr.push(`${dateObj.getFullYear()}/0${dateObj.getMonth()+1}/${dateObj.getDate()}`)
        

        else 
        if(dateObj.getMonth()>10 && dateObj.getDate()<10)  
          dateArr.push(`${dateObj.getFullYear()}/${dateObj.getMonth()+1}/0${dateObj.getDate()}`)
        
         
        dateObj.setDate(dateObj.getDate()+1)
        
      }
      
      }
      
      setdeb(document.getElementById("deb").value)
      setseance(document.getElementById("seance").value)
      setTable(dateArr)
      setfin(dateArr[dateArr.length-1].replaceAll("/","-"))
    }
    return (
      <div className="info">
      
        <div className="title">
            <h1>Facturation Décision</h1>
        </div>
        <div className="n-fact">
           <p>N°Facture</p>
           <input type="text" id="nfa" disabled style={{color: 'white'}} value={numero}></input>
           <p>Date Facture</p>
           <input type="date" value={datefact} onChange={(e)=>{setdatefact(e.target.value)}}></input>

        </div>
        
        <div className="patient">
        <h1>Patient</h1>
        <hr></hr>
          <div className="align">
              <p>Patient </p>
            <input type="text" id="patient" value={patient} onChange={(e)=>{setpatient(e.target.value)}}></input>
          </div>
          <div className="align">
              <p>Racine</p>
            <input type="number" id="Racine" value={racine} onChange={(e)=>{setracine(e.target.value)}}></input>
          </div>
          <div className="align">
              <p>Clé</p>
            <input type="number" id="Cle" value={cle} onChange={(e)=>{setcle(e.target.value)}}></input>
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
            <input type="number" id="bureau" value={codebureau} onChange={(e)=>{setbureau(e.target.value)}}></input>
          </div>
          <div className="align">
              <p>Année</p>
            <input type="number" id="annee" value={anne} onChange={(e)=>{setanne(e.target.value)}}></input>
            <p>Numero desicision </p>
            <input type="text" id="num-des" value={`${codebureau}/${anne}/${ordre}`}></input>
          </div>
          <div className="align">
              <p>N°Ordre</p>
            <input type="number" id="Racine" value={ordre} onChange={(e)=>{setordre(e.target.value)}}></input>
            
          </div>
          <div className="align">
              <p>Nbre Séance</p>
            <input type="number" id="seance" style={{marginRight: "15px"}} value={seance} onChange={lesSeances2}></input>
            <p>Nbre semaine</p>
            <input type="text" id="semaine" style={{color: 'white'}} disabled value={Math.ceil(seance/6)}></input>
          </div>
          <div className="align">
              <p>Date Deb</p>
            <input type="date" id="deb"  value={deb} onChange={lesSeances2 } style={{marginRight: "15px"}}></input>
            <p>Date Fin</p>
            <input type="Date" id="fin" disabled style={{color: "white"}}value={fin}></input>
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
            <input type="text" id="ht"  disabled value={seance*prixunitaire*0.93}  style={{marginRight: "15px" , color: "white"}}></input>
            <p>Prix TTC</p>
            <input type="text" id="ttc" disabled  style={{color: "white"}}value={seance*prixunitaire}></input>
          </div>

          <div className="align">
              <p>T.V.A</p>
            <input type="text" id="tva" disabled value={tva} style={{marginRight: "15px" , color: "white"}}></input>

            <p>Montant TVA</p>
            <input type="text" id="montant" style={{color: "white"}} disabled value={(seance*prixunitaire)-(seance*prixunitaire*0.93)}></input>
            
          </div>
          <div className='fixing'>
          {show ? animation : ''}
          <input type='button' value="Enregistrer" className='bottom'id="submit" onClick={setStorage}></input>
          </div>
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
        

    );
  }
  