<template>
  <ion-page>
    <!-- 🔹 Header con fondo GIF -->
    <ion-header>
      <ion-toolbar class="custom-toolbar">
        <ion-title class="ion-text-center large-title">CONTACT AREA</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="back-container">
        <button class="back-button" @click="goBack">
          <img src="/back_arrow.svg" alt="Volver" class="back-icon" />
        </button>
      </div>

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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonTextarea } from "@ionic/vue";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
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

.section-container {
  margin-bottom: 30px;
}

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

ion-textarea::part(placeholder) {
  color: #4b5563;
  opacity: 0.7;
}
</style>
