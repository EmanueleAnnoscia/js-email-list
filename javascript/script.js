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

    btnElem.addEventListener("click",refresh);

    function refresh(){
        emailList.innerHTML="";
        for(i = 1 ; i<10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp)=>{
            //  console.log(resp)
            const email = resp.data.response;
            emailList.innerHTML += `<li class="list-group-item"><a>${email}</a></li>`
            });
        }

    }

