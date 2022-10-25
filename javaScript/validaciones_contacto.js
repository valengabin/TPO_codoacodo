const $form = document.querySelector('#form' )
        const $mail = document.querySelector('#mail')

        $form.addEventListener('submit', handleSubmit)


        function handleSubmit(event) {
            event.preventDefault()
            const  form= new FormData(this)
            console.log(form.get('nombre'))
            $mail.setAttribute('href',`mailto: avilasofia076@gmail.com?subject=${form.get('nombre')}&{form.get('email')}&body=${form.get('mensaje')}`)
            $mail.click()
        }
