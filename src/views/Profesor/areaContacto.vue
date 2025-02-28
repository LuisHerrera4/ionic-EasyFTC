<template>
  <ion-page>
    <!-- Header con título "CONTACT AREA" -->
    <div class="header">
      <h1>CONTACT AREA</h1>
    </div>

    <ion-content class="ion-padding">
      <!-- Botón de retroceso -->
      <div class="back-container">
        <button class="back-button" @click="goBack">
          <img src="/back_arrow.svg" alt="Volver" class="back-icon" />
        </button>
      </div>

      <!-- Sección de Queries -->
      <div class="section-container">
        <div class="section-title">
          <h2>Queries</h2>
        </div>

        <ion-card class="feedback-card">
          <ion-textarea
            placeholder="Any feedback you would like to give your account manager..."
            rows="6"
          ></ion-textarea>
        </ion-card>
      </div>

      <!-- Sección de Reports -->
      <div class="section-container">
        <div class="section-title">
          <h2>Reports</h2>
        </div>

        <ion-card class="feedback-card">
          <ion-textarea
            placeholder="Any feedback you would like to give your account manager..."
            rows="6"
          ></ion-textarea>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { useRouter } from "vue-router";
import { IonPage, IonContent, IonCard, IonTextarea } from "@ionic/vue";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
/* Encabezado */
.header {
  background-color: #a9a9a9;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 32px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

/* Botón de retroceso */
.back-container {
  display: flex;
  justify-content: flex-start;
  padding: 12px 16px;
}

.back-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;
}

.back-button:hover {
  transform: scale(1.1);
}

.back-icon {
  width: 24px;
  height: 24px;
}

/* Sección general */
.section-container {
  margin-bottom: 30px;
}

/* Título de sección */
.section-title {
  background-color: #f2f2f2;
  border-radius: 30px;
  padding: 15px 30px;
  display: inline-block;
  margin-bottom: 20px;
}

.section-title h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #454545;
}

/* Caja de texto */
.feedback-card {
  margin: 0;
  border-radius: 12px;
  box-shadow: none;
  border: 1px solid #d1d5db;
}

ion-textarea {
  --padding-start: 16px;
  --padding-end: 16px;
  --padding-top: 16px;
  --padding-bottom: 16px;
  font-size: 16px;
  color: #4b5563;
}

/* Placeholder */
ion-textarea::part(placeholder) {
  color: #4b5563;
  opacity: 0.7;
}
</style>
