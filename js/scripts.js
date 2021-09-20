axios.defaults.baseURL = 'http://localhost:8080';

function AbrirModal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function FecharModal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

async function cadastrar(event){
    event.preventDefault();

    const nome=document.getElementById("nome");
    const cpf=document.getElementById("cpf");
    const email=document.getElementById("email");
    const senha=document.getElementById("senha");
    const confirmasenha=document.getElementById("confirmasenha");

    if(senha.value==confirmasenha.value){
      const user={
        nome:nome.value,
        cpf:cpf.value,
        email:email.value,
        senha:senha.value
      };
      const {data} = await axios.post('/formulario', user);
      alert('Cadastro realizado com sucesso!');

      console.log(data);
    }

}

function NovaAba(url) {
  const win = window.open(url, "_blank");
  win.focus();
}