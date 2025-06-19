<script type="module">
  import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  document.getElementById("formGlicemia").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const horario = document.getElementById("horario").value;
    const dextro = parseFloat(document.getElementById("dextro").value);
    const momentoSelecionado = Array.from(document.querySelectorAll('input[name="momento"]:checked')).map(cb => cb.value);

    if (!horario || isNaN(dextro) || momentoSelecionado.length === 0) {
      document.getElementById("mensagem").textContent = "Preencha todos os campos corretamente.";
      return;
    }

    try {
      await addDoc(collection(window.db, "glicemia"), {
        nome,
        horario_medicao: horario,
        valor_dextro: dextro,
        momento_refeicao: momentoSelecionado,
        timestamp: serverTimestamp()
      });
      document.getElementById("mensagem").textContent = "✅ Registro salvo com sucesso!";
      document.getElementById("formGlicemia").reset();
    } catch (error) {
      console.error("Erro ao salvar:", error);
      document.getElementById("mensagem").textContent = "❌ Erro ao salvar. Tente novamente.";
    }
  });
</script>
