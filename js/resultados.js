<script type="module">
  import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  async function carregarResultados() {
    const tabela = document.querySelector("#tabela tbody");
    const graficoCanvas = document.getElementById("grafico");

    const q = query(collection(window.db, "glicemia"), orderBy("horario_medicao"));
    const snapshot = await getDocs(q);

    const dados = [];

    snapshot.forEach((doc) => {
      const d = doc.data();
      const linha = document.createElement("tr");

      linha.innerHTML = `
        <td>${d.nome}</td>
        <td>${new Date(d.horario_medicao).toLocaleString("pt-BR")}</td>
        <td>${d.valor_dextro}</td>
        <td>${(d.momento_refeicao || []).join(", ")}</td>
      `;
      tabela.appendChild(linha);

      dados.push({
        x: new Date(d.horario_medicao),
        y: d.valor_dextro
      });
    });

    // Gráfico
    new Chart(graficoCanvas, {
      type: "line",
      data: {
        datasets: [{
          label: "Glicemia (mg/dL)",
          data: dados,
          borderWidth: 2,
          tension: 0.2
        }]
      },
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              tooltipFormat: "dd/MM HH:mm",
              unit: "day"
            },
            title: { display: true, text: "Data" }
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: "mg/dL" }
          }
        }
      }
    });
  }

  carregarResultados();
</script>
