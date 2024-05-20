window.addEventListener('DOMContentLoaded', async () => {
    // Extrai os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
  
    // Exibe os parâmetros nas divs correspondentes
    document.getElementById('coluna1').textContent = params.get('id_moeda');
    document.getElementById('coluna2').textContent = params.get('moeda');
    document.getElementById('coluna3').textContent = params.get('data_1');
    document.getElementById('coluna4').textContent = params.get('valor_cota');
    document.getElementById('coluna5').textContent = params.get('valor_orig');
    document.getElementById('coluna6').textContent = params.get('convertido');
  });
  