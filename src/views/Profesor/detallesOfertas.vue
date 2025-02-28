<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="custom-toolbar">
        <ion-title class="ion-text-center large-title">VIEW OFFERS</ion-title>
      </ion-toolbar>
    </ion-header>

    <div class="back-container">
      <button class="back-button" @click="goBack">
        <img src="/back_arrow.svg" alt="Volver" class="back-icon" />
      </button>
    </div>

    <ion-content class="ion-padding">
      <div class="offer-container">
        <div class="offer-section">
          <ion-label class="section-label">Title of offer</ion-label>
          <div class="section-content">
            <ion-input placeholder="Enter title"></ion-input>
          </div>
        </div>

        <div class="offer-section">
          <ion-label class="section-label">Description</ion-label>
          <div class="section-content">
            <ion-textarea placeholder="Enter description" rows="3"></ion-textarea>
          </div>
        </div>

        <div class="offer-section">
          <ion-label class="section-label">Schedule</ion-label>
          <div class="section-content">
            <VueTailwindDatepicker v-model="schedule" as-single />
          </div>
        </div>

        <div class="offer-section">
          <ion-label class="section-label">Skills required</ion-label>
          <div class="section-content">
            <ion-textarea placeholder="Enter skills required" rows="3"></ion-textarea>
          </div>
        </div>

        <ion-button expand="block" class="assign-button" router-link="/profesor/estudiantes">
          Assign student
        </ion-button>

        <ion-button fill="clear" class="contact-btn" @click="goToContact">
          Go contact area
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import VueTailwindDatepicker from "vue3-tailwind-datepicker";
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonLabel, 
  IonInput, 
  IonTextarea 
} from "@ionic/vue";

const router = useRouter();
const schedule = ref(""); 

const goBack = () => {
  router.go(-1);
};

const goToContact = () => {
  router.push("/profesor/areaContacto");
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700&display=swap');

* {
  font-family: 'Lexend', sans-serif;
}

.custom-toolbar {
  --min-height: 130px;
  background: url('/cielo.gif') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  --background: transparent !important;
}

.back-container {
  display: flex;
  justify-content: flex-start;
  padding: 12px 16px;
  background: white;
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

.large-title {
  font-size: 28px;
  font-weight: bold;
  color: white;
}

.offer-container {
  max-width: 600px;
  margin: 0 auto;
}

.offer-section {
  margin-bottom: 20px;
}

.section-label {
  display: block;
  color: #3880ff;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
}

.section-content {
  @apply bg-gray-100 p-3 rounded-lg;
}

.assign-button {
  border-radius: 6px;
  border: 1px solid #059669;
}

.contact-btn {
  color: #818181;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 120%;
  display: block;
  width: 100%;
}

.contact-btn:hover {
  text-decoration: underline;
}
</style>
