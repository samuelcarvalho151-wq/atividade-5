// ============================================
// ATIVIDADE 5 - Faca o Cartao funcionar com JS!
// ============================================
//
// Dicas do que voce deve fazer:
//
// 1. BOTAO MODO ESCURO (#btn-tema)
//    - Pegue o botao com document.getElementById()
//    - Adicione um addEventListener('click', function() { })
//    - Dentro da funcao, use document.body.classList.toggle('modo-escuro')
//    - Mude o texto do botao: se tem a classe, "Modo Claro", senao "Modo Escuro"
//    - Dica: use document.body.classList.contains('modo-escuro') para verificar
      document.getElementById('btn-tema').addEventListener('click', function() {
        document.body.classList.toggle('modo-escuro');
        if (document.body.classList.contains('modo-escuro')) {
          document.getElementById('btn-tema').textContent = 'Modo Claro';
        } else {
          document.getElementById('btn-tema').textContent = 'Modo Escuro';
        }
      });

//
// 2. CONTADOR DE VISITAS (#btn-visita e #numero-visitas)
//    - Crie uma variavel: let visitas = 0;
//    - Pegue o botao e o span com getElementById()
//    - No clique do botao, incremente a variavel (visitas++)
//    - Atualize o texto do span: span.textContent = visitas
//

      let visitas = 0;
      const btnvisita = document.getElementById('btn-visita');
      const spanvisitas = document.getElementById('numero-visitas')
      
      btnvisita.addEventListener('click', function() {
        visitas++;
        spanvisitas.textContent = visitas;
      });


// 3. BARRAS DE PROGRESSO (.progresso)
//    - Pegue todos os elementos com document.querySelectorAll('.progresso')
//    - Use um for ou forEach para percorrer cada um
//    - Leia o valor: elemento.getAttribute('data-valor')
//    - Aplique a largura: elemento.style.width = valor + '%'

      const barrasProgresso = document.querySelectorAll('.progresso');

      barrasProgresso.forEach(function(barra) {
        const valor = barra.getAttribute('data-valor');
        barra.style.width = valor + '%';
      });


//
// 4. FORMULARIO (#form-contato)
//    - Pegue o formulario com getElementById()
//    - Adicione addEventListener('submit', function(evento) { })
//    - Use evento.preventDefault() para nao recarregar a pagina
//    - Pegue os valores dos campos: document.getElementById('nome').value
//    - Se algum campo estiver vazio, use alert('Preencha todos os campos!')
//    - Se tudo preenchido, mostre uma mensagem no #resposta-form:
//      "Obrigado, [nome]! Sua mensagem foi enviada."
//    - Limpe os campos depois: campo.value = ''
//
// Comece pelo exercicio 1 e va ate o 4. Boa sorte!
