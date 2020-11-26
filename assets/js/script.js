// <!-- jQuery CDN - Slim version (=without AJAX) -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

/*
getElementByTagName()
getElementByTagName()
getElementsByClassName()
querySelector()

*/

/* index  */



/* contato */

let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.height = '20px';
email.style.height = '20px';

function validaNome() {
    let txtName = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtName.innerHTML = 'Nome completo pf!'
        txtName.style.color = 'red'
    } else{
        nome.style.cssText = 'border-color: green;'
        txtNome.innerHTML = ""
        nomeOk = true
    }

}
    function validaEmail() {
        let txtEmail = document.querySelector("#txtEmail")
        if(email.value.indexOf('.') == -1){
            txtEmail.innerHTML = 'E-mail inválido, deve conter: @'
            txtEmail.style.color = 'red'
        } else{
            email.style.cssText = 'border-color: green;'
            txtEmail.innerHTML = ""
            emailOk = true
        }

    }

    function validaAssunto() {
        let txtAssunto = document.querySelector('#txtAssunto')
        if (assunto.value.length > 100) {
            assunto.style.cssText = 'border-color: red;'
        } else {
            assunto.style.cssText = 'border-color: green;'
            txtAssunto.style.display = 'none'
            assuntoOk = true
        }
    }


    function enviar() {
        if (nomeOk == true && emailOk == true && assuntoOk ==true){
            alert("Formulário enviado")
        } else {
            alert('Verificar campos formulário')
        }
    }

    // function abrirSidebar () {
    //     let menu = document.querySelector('#sidebarCollapse')
    // }

    $(document).ready(function () {

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    
    });