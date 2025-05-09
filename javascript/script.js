//prelevo gli elementi
const emailList = document.querySelector("#email-list")
const btnElem = document.querySelector(".btn")


// creo le 10 email

//  for(i = 1 ; i<10; i++){
//      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp)=>{
//          console.log(resp)
//      });
//  }



// stampo le 10 mail in una lista
  
    
    //  for(i = 1 ; i<10; i++){
    //  axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp)=>{
    //     //  console.log(resp)
    //     const email = resp.data.response;
    //     emailList.innerHTML += `<li class="list-group-item"><a>${email}</a></li>`
    //  });
     
     

    //  }

    // funzione di generazione email e di refresh delle ultime

     function generateEmails(){
         for(let i = 0 ; i<10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp)=>{
            //  console.log(resp)
             const email = resp.data.response;
             emailList.innerHTML += `<li class="list-group-item"><a>${email}</a></li>`
             });
         }

      }

     //  richiamo la funzione
     generateEmails();

     // aggiungo al bottone l'evento
     btnElem.addEventListener("click",refresh);
 // funzione di refresh
     function refresh(){
         emailList.innerHTML="";
         for(i = 1 ; i<10; i++){
             axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp)=>{
//             //  console.log(resp)
             const email = resp.data.response;
             emailList.innerHTML += `<li class="list-group-item"><a>${email}</a></li>`
             });
         }

     }

//--------------------------------------sezione di prova implementazione caricamenti simultanei-------------------------------------------------------------------------

// function generateEmails() {
//   emailList.innerHTML = "<li>Caricamento in corso...</li>";

//   let emailArr = [];
//   let counter = 0;

//   for (let i = 0; i < 10; i++) {
//     axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
//       .then((resp) => {
//         const email = resp.data.response;
//         emailArr.push(email);
//         counter++;

//         if (counter === 10) {
//           //una volta che le ho ricevute le svuoto e le stampo
//           emailList.innerHTML = "";
//           emailArr.forEach((email) => {
//             emailList.innerHTML += `<li class="list-group-item"><a>${email}</a></li>`;
//           });
//         }
//       });
//   }
// }

// // Chiamo la funzione una volta all'avvio
// generateEmails();

// // evento click sul bottone pe ril refresh
// btnElem.addEventListener("click", generateEmails);



    // prova di creazione contemporanea 

     let emailArr=[]
     let counter = 0; //quando il counter arriverà a 10 allora stamperà tutte le mail contemporaneamente

     for (let i=0; i<10; i++){
         axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp)=>{
// //          console.log(resp)
          emailArr.push(resp.data.response)
        console.log(emailArr)
         counter ++; 
        
         if(counter = 10){
             emailList.innerHTML += emailArr[i]
         }

       });

     
     }