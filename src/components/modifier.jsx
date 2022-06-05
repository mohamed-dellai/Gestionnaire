import {useEffect,useState} from 'react'
import {InModifier} from './InModifier'
export function Modifier() {
const [index,setIndex]= useState(0);
const [show,setShow]= useState(false);
const modifier = (e)=>{

  setIndex(e.target.parentElement.getElementsByClassName("og-li-col-1")[0].innerText)
  setShow(true)
}




const [arr,setArr]=useState(()=>JSON.parse(window.localStorage.getItem("all-data")))
if(show===false)
    {return (
      <div className='modifier'>
         <div className="og-contianer">
            <h1 className="heading-line">Modifier les bordereaux</h1>
            <div className="og-row og-li og-li-head">
              <div className="og-li-col og-li-col-1 text-center">ID</div>
              <div className="og-li-col og-li-col-2">Nom</div>
              <div className="og-li-col og-li-col-3 text-center">N°Facture</div>
              <div className="og-li-col og-li-col-4 text-center">Date Fact</div>
              <div className="og-li-col og-li-col-5 text-center">Tot HT</div>
              <div className="og-li-col og-li-col-6 text-center">Tot TVA</div>
              <div className="og-li-col og-li-col-7 text-center">Tot TTC</div>
              <div className="og-li-col og-li-col-8 text-center">Nbr_S</div>
            </div>
 
  
    {arr.map((item,index)=>
    {
      console.log(item.prixunitaire)
      return (<div className="data-row og-row og-li" key={index} onClick={modifier}>
      <div className="og-li-col og-li-col-1 text-center">{`${item.id}`}</div>
      <div className="og-li-col og-li-col-2">{`${item.patient}`}</div>
      <div className="og-li-col og-li-col-3 text-center">{`${item.numero}`}</div>
      <div className="og-li-col og-li-col-4 text-center">{`${item.datefact}`}</div>
      <div className="og-li-col og-li-col-5 text-center">{item.seance*item.prinxunitaire*0.93 }</div>
      <div className="og-li-col og-li-col-6 text-center">{(item.seance*item.prinxunitaire)-(item.seance*item.prinxunitaire*0.93)}</div>
      <div className="og-li-col og-li-col-7 text-center">{item.seance*item.prinxunitaire}</div>
      <div className="og-li-col og-li-col-8 text-center">{`${item.seance}`}</div>
      </div>)
})}
   
    </div>
    </div>   
    );
  }
else{
  return(
    <InModifier index={index}/>
  )
}
}
  
  