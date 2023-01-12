window.onload = function(){ 
  const usuario = document.querySelector('#usu');
  const senha = document.querySelector('#sen');
  const btn = document.querySelector('#btn');
  let validacao = false;
  const dadosUser = async function(){
    let dadosFetch = await fetch(`./usuario.json`);
    let dadosJSON = await dadosFetch.json();
    
    btn.addEventListener('click', function () {
      let usuarioInput = usuario.value;
      let senhaInput = senha.value;

      validacao = false;

      for (let item of dadosJSON.users) {
        if (item["user"] == usuarioInput.trim() && item["pws"] == senhaInput.trim()) {
          validacao = true;
          alert(`Seja bem vindo ${item["user"]}!!!`);
          window.location.href = './panel.html';
        }
      }
      if (validacao === false) {
        alert("Usuario não encontrado!");
      }
    });
  }
  dadosUser();
}