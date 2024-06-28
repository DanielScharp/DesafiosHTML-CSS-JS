$(document).ready(function() {
    var availableTags = [ // Exemplo de sugestões
    "SSP/AC",
    "SSP/AL",
    "SSP/AP",
    "SSP/AM",
    "SSP/BA",
    "SSPDS/CE",
    "SSP/DF",
    "SESP/ES",
    "SSP/GO",
    "SSP/MA",
    "SSP/MT",
    "SSP/MS",
    "SSP/MG",
    "SSP/PA",
    "SSP/PB",
    "SSP/PR",
    "SSP/PE",
    "SSP/PI",
    "SSP/RJ",
    "SESED/RN",
    "SSP/RS",
    "SESDEC/RO",
    "SESP/RR",
    "SSP/SC",
    "SSP/SP",
    "SSP/SE",
    "SSP/TO",
];
    $("#autocomplete").autocomplete({
      source: availableTags, // Define a fonte das sugestões
      minLength: 0, // Permite mostrar sugestões quando o campo está vazio
      select: function(event, ui) {
        // Evento disparado quando uma sugestão é selecionada
        $("#autocomplete").val(ui.item.value); // Define o valor do campo como a sugestão selecionada
      }
    });
  
    $("#autocomplete").click(function() {
      $("#autocomplete").autocomplete("search", ""); // Exibe as sugestões
    });
  });
  