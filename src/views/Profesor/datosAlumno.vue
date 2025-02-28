<template>
  <ion-page>
    <!-- 🔹 Header con fondo GIF -->
    <ion-header>
      <ion-toolbar class="custom-toolbar">
        <ion-title class="ion-text-center large-title">STUDENT</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- 🔹 Botón de retroceso -->
      <ion-button fill="clear" class="custom-back-button" @click="goBack">
        <img src="/back_arrow.svg" alt="back_arrow" class="back-arrow" />
      </ion-button>

      <!-- 🔹 Imagen del estudiante con Zoom -->
      <div class="student-image-container" v-if="student.image">
        <img ref="zoomableImage" :src="student.image" alt="Student Image" class="student-image" />
      </div>

      <!-- 🔹 Nombre del estudiante -->
      <h2 class="student-name">{{ student.name }}</h2>

      <!-- 🔹 Información del estudiante -->
      <div class="info-container">
        <div class="info-row">
          <div class="info-label">AGE</div>
          <div class="info-value">{{ student.age }}</div>
        </div>

        <div class="info-row">
          <div class="info-label">EDUCATION</div>
          <div class="info-value">{{ student.education }}</div>
        </div>

        <div class="info-row">
          <div class="info-label">COMPETENCIES</div>
          <div class="info-value">{{ student.competencies }}</div>
        </div>

        <div class="info-row">
          <div class="info-label">OCCUPATION</div>
          <div class="info-value">{{ student.occupation }}</div>
        </div>

        <div class="info-row">
          <div class="info-label">LOCATION</div>
          <div class="info-value">{{ student.location }}</div>
        </div>

        <div class="info-row">
          <div class="info-label">TECH LITERATE</div>
          <div class="info-value">{{ student.techLiterate }}</div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import mediumZoom from "medium-zoom"; // 📌 Importamos la librería de zoom

const router = useRouter();
const route = useRoute();
const zoomableImage = ref(null);

const goBack = () => {
  router.go(-1);
};

const student = { ...route.query };

onMounted(() => {
  if (zoomableImage.value) {
    mediumZoom(zoomableImage.value, { margin: 20, background: "rgba(0, 0, 0, 0.8)" });
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700&display=swap');

* {
  font-family: 'Lexend', sans-serif;
}

.custom-toolbar {
  --min-height: 150px;
  background: url('/cielo.gif') no-repeat center center;
  background-size: cover;
  --background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.large-title {
  font-size: 40px;
  font-weight: bold;
  color: white;
  padding: 20px 0;
}

/* 🔹 Botón de retroceso */
.custom-back-button {
  margin-bottom: 2rem;
  height: 44px;
}

.back-arrow {
  width: 24px;
  height: 24px;
}

.student-image-container {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.student-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  cursor: zoom-in; 
}

.student-name {
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  color: #a9a9a9;
  margin: 20px 0;
}

.info-container {
  padding: 20px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.info-label {
  font-weight: bold;
  color: #555;
}

.info-value {
  color: #333;
}
</style>
