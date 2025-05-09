//prelevo gli elementi
const emailList = document.querySelector("#email-list")



// creo le 10 email

//  for(i = 1 ; i<10; i++){
//      axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp)=>{
//          console.log(resp)
//      });
//  }



// stampo le 10 mail in una lista
  
    
     for(i = 1 ; i<10; i++){
     axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp)=>{
        //  console.log(resp)
        const email = resp.data.response;
        emailList.innerHTML += `<li>${email}</li>`
     });
     
     

     }

    //  