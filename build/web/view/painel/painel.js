function showCadIngredienteDiv(){
    
    
    let tip = document.getElementById("Agrupado");
    let div = document.getElementById("CadIngredientes");
    let div2 = document.getElementById("CadIngredientes");
    
    if(div.style.display = 'none'){
        tip.style.display = 'none';
        div.style.display = 'block';
    }

}

function showCadBebidaDiv(){

    let tip = document.getElementById("Agrupado");
    let div = document.getElementById("CadBebidas");
    let div2 = document.getElementById("CadIngredientes");
    
    if(div.style.display = 'none'){
        tip.style.display = 'none';
        div.style.display = 'block';
    }
    
    

}

function showInicioDiv(){

    let tip = document.getElementById("Agrupado");
    
    let div = document.getElementById("CadIngredientes");
    
    if(div.style.display = 'block'){
        tip.style.display = 'block';
        div.style.display = 'none';
    }
    
    

}

function salvarIngrediente(){

    let form = document.getElementById("addIngrediente");
    let dados = {};

    if(validar(form)){
        dados = formularioParaObjeto(form);
        requisicao("../../salvarIngrediente", resolver, JSON.stringify(dados));
    }

}

function salvarBebida(){

    let form = document.getElementById("addBebida");
    let dados = {};

    if(validar(form)){
        dados = formularioParaObjeto(form);
        requisicao("../../salvarBebida", resolver, JSON.stringify(dados));
    }

}
function showCadLanches(){
    //CadLanches

    let tip = document.getElementById("Agrupado");
    let div = document.getElementById("CadLanches");
    //let divStatus = document.getElementById("statusId")
    //let divStatus2 = document.getElementById("statusId2")
    //let divcenter = document.getElementById("footerId");
  
    
    if(div.style.display = 'none'){
        tip.style.display = 'none';
        div.style.display = 'block';
        //divStatus.style.display = 'flex';
        //divStatus2.style.display = 'flex';
        //divcenter.style.justifyContent = 'space-around';

    }
    
    requisicao("../../getIngredientes", getIngredientes);

}

function resolver(resposta){
    if(resposta.srcElement.responseText.includes("erro")){
        window.location.replace("../login/login_Funcionario.html?Action=TokenError");
    } else {
        alert(resposta.srcElement.responseText);
    }
}

function logout(){
    requisicao("../../logout", deslogar)
    deleteAllCookies();
}

function deslogar(resposta){
    alert(resposta.srcElement.responseText);
    window.location.replace("../home/home.html");
}

function deleteAllCookies() {

    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++){
        console.log(cookies[i].split("=")[0].trim());
        document.cookie = cookies[i].split("=")[0].trim()+"=; expires=Thu, 01 jan 1970 00:00:01 GTM;";}
}

function formularioParaObjeto(formulario){
    let dados = Object.values(formulario).reduce(
        (obj, field) => {obj[field.name] = field.value; return obj}, {});
        return dados;
}

function validar(formulario){
    let sucesso = true;
    Object.values(formulario).reduce(
        (obj, field) => {
            if (field.value.toString().trim() === "" || field.value.toString().trim() === "Tipo") {
                alert("Você precisa preencher todos os campos para se Cadastrar! O Campo "+field.name+" Está Vazio!")
                sucesso = false;
                return;
            }
        }, {});
        return sucesso;
}

function getIngredientes(resposta){

    if(resposta.srcElement.responseText.includes("erro")){
        window.location.replace("../login/login_Funcionario.html?Action=TokenError");
    } 
    else {
        dados = JSON.parse(resposta.srcElement.responseText);
        console.log(dados);
    }

}