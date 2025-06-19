// Lógica de salvamento no Firestore será adicionada<script type="module">
  import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  document.getElementById("formGlicemia").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const horario = document.getElementById("horario").value;
    const dextro = parseFloat(document.getElementById("dextro").value);
    const refeicao = document.getElementById("refeicao").value;

    if (!horario || isNaN(dextro) || !refeicao) {
      document.getElementById("mensagem").textContent = "Preencha todos os campos corretamente.";
      return;
    }

    try {
      await addDoc(collection(window.db, "glicemia"), {
        nome: nome,
        horario_medicao: horario,
        valor
