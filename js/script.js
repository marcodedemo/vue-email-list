

const { createApp } = Vue

  createApp({

    data() {

      return {

        // emails array
        emails:[],

        // while counter
        counter: 0,

      }

    },



    /* -------------------------------------------------------------------------- */
    /*                                  functions                                 */
    /* -------------------------------------------------------------------------- */

    methods: {


      createEmailAndPushOnArray(){

        // creo un ciclo per creare 10 email
        while (this.counter < 10) {

          // genero una email tramite l' API
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res)=>{

            // dichiaro una variabile che corrisponde all'email singola generata
            let email = res.data.response;

            // inserisco la singola email nell'array
            this.emails.push(email)

          });
          
          // aumento il contatore
          this.counter++;
          
          
        }
      }

    },


    created(){

      // eseguo la funzione alla creazione del documento
      this.createEmailAndPushOnArray();

    },


  }).mount('#app')