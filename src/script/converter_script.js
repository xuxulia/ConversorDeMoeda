document.getElementById("conversionForm").addEventListener("submit", async function(event) { 
  event.preventDefault();
  
  let id_moeda = document.getElementById('moeda').value
  let data_1 = document.getElementById('data').value
  let valor_cota = document.getElementById('valor_hoje').value
  let valor_orig = document.getElementById('valor_conv').value
  let convertido = valor_cota * valor_orig;
  document.getElementById("convertido").textContent = convertido;

  const response = await fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id_moeda, data_1, valor_cota, valor_orig, convertido }),
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);

    // Redireciona para historico.html com os parâmetros da URL
    const queryParams = new URLSearchParams(result).toString();
    window.location.href = `/historico.html?${queryParams}`;
  } else {
    console.error('Error:', response.statusText);
  }
});
