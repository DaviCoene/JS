var titulo = document.querySelector('.titulo');
titulo.textContent = "NutriCida";

document.title = "NUTRICIDA";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura =tdAltura.textContent;

    var calcularIMC = peso / (altura**2);

    var tdImc = paciente.querySelector('.info-imc') ;

    tdImc.textContent = calcularIMC.toFixed(2);
}

var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener("click", function name(e) {
    e.preventDefault()
    var form = document.querySelector('#form-adiciona')

    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value
    var imc = form.imc.value


    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura
    imcTd.textContent = calcularImc(altura,peso);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)

    console.log(nome, peso, altura, gordura)
    console.log("clicou aqui")})

    function calcularImc(altura, peso) {
        var imc = peso / altura**2
        return imc.toFixed(2)
    }