const form = document.querySelector("#form");
const resp = document.querySelector("#registered");

function feedbackBody(error){
    const body = document.querySelector("body");
  
    if(error){
    body.style.backgroundColor = "red"
    resp.innerText = " ";
    }else{
        body.style.backgroundColor = "green"
        resp.innerText = "Registrado";
    }
}



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nome= form.name.value;
    const idade= form.age.value;
    const acompanhadoPelosPais = form.checkedParents.checked;
    const temIngresso = form.hasTickets.checked;
    const temCovid = form.hasCovid.checked;
    const password = form.password.value;

    const regexPassword = /^[\w&.\-]+$/

    console.info(nome,idade,acompanhadoPelosPais,temIngresso,temCovid);

    if(regexPassword.test(password)){
        alert("Senha Inválida");
        feedbackBody(true);
        return
    }

    const listaDeNomes = nome.split(" ")

    if(listaDeNomes.length < 2){
        alert("Por favor, digite seu nome sobrenome");
        feedbackBody(true);
        return
    }

    if(idade < 18){

        if(!acompanhadoPelosPais){
            alert("Você é menor de idade, e não esta acompanhado(a),não pode entrar")
            feedbackBody(true);
            return
        }
        return
    }

    if(!temIngresso){
        alert("Você está sem ingresso,não pode entrar");
        feedbackBody(true);
        return
    }

    if(temCovid){
        alert("Você testou positivo para covid, não pode entrar");
        feedbackBody(true);
        return
    }

    feedbackBody(false);

})


// if((idade >= 18 || acompanhadoPelosPais) && temIngresso && !testouPositivoPraCovid){
//     console.info("Pode entrar");
// } else {
//     console.info("Não pode entrar");
// }

