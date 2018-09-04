
var app = new Vue({
    el: '#app',
    data: {
        asunto: '',
        textMessage : '',
        tituloSms: '',
        smsMessage: ''
    },
    methods : {
        enviarSms: function(){
            $.ajax({
                type: "post",
                url: "http://localhost:3000/sms",
                data: {tituloSms: this.tituloSms, message: this.smsMessage},
                success: function (response) {
                    console.log(response)
                    alert('Mensaje enviado con exito')
                },
                error: function(err){
                    console.log(err)
                    alert('ocurrio un error de conexion')
                }
            });
            this.tituloSms = ''
            this.smsMessage = ''
        },
        enviarNotificacion: function () {  

        }  
    }
  })