const $form = document.querySelector('#form' )
    const $mail = document.querySelector('#mail')
    const nombre= document.getElementById("nombre")
    const correo= document.getElementById("correo")
    const motivo= document.getElementById("motivo")
    const mensaje= document.getElementById("mensaje")
    const parrafo= document.getElementById("warnings")
    
    $form.addEventListener("submit", handleSubmit)
    
        function handleSubmit(event) {
                event.preventDefault()
                const  form= new FormData(this)
                let warnings= ""
                let invalido= false
                parrafo.innerHTML= ""
                if (nombre.value.length < 1) {
                    warnings += `Ingrese su nombre completo\n`
                    invalido=true    
                }
    
                if (! ValidateEmail(correo)){
                    warnings += `<br/>Ingrese un mail válido\n`
                    invalido=true
                }
    
                if (motivo.value.length <= 1){
                    warnings += `<br/>Especifique un motivo\n`
                    invalido=true    
                }
    
                if (invalido){
                    parrafo.innerHTML= warnings
                }   
                                    
                else{
                    event.preventDefault()            
                            $mail.setAttribute('href',`mailto: avilasofia076@gmail.com?subject=${form.get('nombre')}&{form.get('email')}&body=${form.get('mensaje')}`)
                            $mail.click()
                }  
                
                
            }   
          
            
    
        function ValidateEmail(mail){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
        { 
            return (true)
        }
            return (false)
    }