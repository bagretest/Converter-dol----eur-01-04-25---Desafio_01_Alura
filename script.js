function converter() {
    valor_dol = prompt("$ Digite um valor em Dolar $");
    um_dol = 0.93;
  
    if (!isNaN(valor_dol)) {
      let valor_convertido = valor_dol * um_dol;
      let valor_formatado = valor_convertido.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
      });
      alert("€" + valor_dol * um_dol);
    } else {
      alert("Por favor, insira um valor numerico válido!");
    }
  }
  