<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB70N-A-khTjspEq1pGv7E02uo19qdbppU",
    authDomain: "glicemia-tracker-660fa.firebaseapp.com",
    projectId: "glicemia-tracker-660fa",
    storageBucket: "glicemia-tracker-660fa.firebasestorage.app",
    messagingSenderId: "745044970805",
    appId: "1:745044970805:web:fc85e2485c7a98381a507c"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  window.db = db;
</script>
