$(document).ready(function() {
    var $personagem = $('#personagem');
    var $mensagem = $('#mensagem');
    var encontrouDiv = false;
    
    // Posição inicial do personagem
    var posicaoX = 50;
    var posicaoY = 50;
    
    // Função para mover o personagem
    function moverPersonagem(event) {
      var tecla = event.which;
      
      if (tecla === 37) { // seta esquerda
        posicaoX -= 10;
      } else if (tecla === 38) { // seta cima
        posicaoY -= 10;
      } else if (tecla === 39) { // seta direita
        posicaoX += 10;
      } else if (tecla === 40) { // seta baixo
        posicaoY += 10;
      }
      
      $personagem.css({top: posicaoY, left: posicaoX});
      
      // Verificar se o personagem encontrou a div verde
      if (encontrouDiv) return;
      
      var personagemX = posicaoX + $personagem.width() / 2;
      var personagemY = posicaoY + $personagem.height() / 2;
      
      $('.verde').each(function() {
        var $divVerde = $(this);
        var divVerdeX = $divVerde.position().left + $divVerde.width() / 2;
        var divVerdeY = $divVerde.position().top + $divVerde.height() / 2;
        
        var distancia = Math.sqrt(Math.pow(personagemX - divVerdeX, 2) + Math.pow(personagemY - divVerdeY, 2));
        
        if (distancia < ($personagem.width() + $divVerde.width()) / 2) {
          encontrouDiv = true;
          $mensagem.text('Achou');
          $mensagem.fadeIn();
        }
      });
    }
    
    // Controlar o movimento do personagem com as setas do teclado
    $(document).keydown(moverPersonagem);
  });
  