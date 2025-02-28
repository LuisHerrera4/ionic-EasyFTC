<template>
  <ion-page>
    <!-- Encabezado -->
    <ion-header>
      <ion-toolbar color="light" class="custom-toolbar">
        <ion-title class="ion-text-center large-title">VIEW OFFERS</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenedor del Botón de Retroceso -->
    <div class="back-container">
      <button class="back-button" @click="goBack">
        <img src="/back_arrow.svg" alt="Volver" class="back-icon" />
      </button>
    </div>

    <!-- Contenido Principal -->
    <ion-content class="ion-padding">
      <div class="offer-container">
        <!-- Title Section -->
        <div class="offer-section">
          <ion-label class="section-label">Title of offer</ion-label>
          <div class="section-content">
            <ion-input placeholder="Enter title"></ion-input>
          </div>
        </div>

        <!-- Description Section -->
        <div class="offer-section">
          <ion-label class="section-label">Description</ion-label>
          <div class="section-content">
            <ion-textarea placeholder="Enter description" rows="3"></ion-textarea>
          </div>
        </div>

        <!-- Schedule Section -->
        <div class="offer-section">
          <ion-label class="section-label">Schedule</ion-label>
          <div class="section-content">
            <ion-textarea placeholder="Enter schedule" rows="3"></ion-textarea>
          </div>
        </div>

        <!-- Skills Required Section -->
        <div class="offer-section">
          <ion-label class="section-label">Skills required</ion-label>
          <div class="section-content">
            <ion-textarea placeholder="Enter skills required" rows="3"></ion-textarea>
          </div>
        </div>

        <!-- Assign Student Button -->
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
import { useRouter } from "vue-router";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonInput, IonTextarea } from "@ionic/vue";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};

const goToContact = () => {
  router.push("/profesor/areaContacto");
};
</script>

<style scoped>
/* Estilizar el encabezado */
.custom-toolbar {
  --min-height: 130px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
}

/* Contenedor del botón de retroceso */
.back-container {
  display: flex;
  justify-content: flex-start;
  padding: 12px 16px;
  background: white;
}

/* Botón de retroceso */
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

/* Estilizar título */
.large-title {
  font-size: 28px;
  font-weight: bold;
}

/* Contenedor general */
.offer-container {
  max-width: 600px;
  margin: 0 auto;
}

/* Secciones del formulario */
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
  background-color: #f0f7ff;
  border-radius: 8px;
  padding: 12px;
}

ion-input, ion-textarea {
  --padding-start: 0;
  --padding-end: 0;
  --background: transparent;
}

/* Botón principal */
.assign-button {
  border-radius: 6px;
  border: 1px solid #059669;
}

/* Botón de contacto con fondo transparente */
.contact-btn {
  color: #818181;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 13.2px */
  display: block;
  width: 100%;
}

.contact-link:hover {
  text-decoration: underline;
}
</style>
