<template>
  <ion-page>
    <div class="header">
      <h1>STUDENT</h1>
    </div>

    <ion-content class="ion-padding">
      <ion-button fill="clear" class="custom-back-button" @click="goBack">
        <img src="/back_arrow.svg" alt="back_arrow" class="back-arrow" />
      </ion-button>

      <!-- Imagen del estudiante -->
      <div class="student-image-container">
        <img :src="student.image" alt="Student Image" class="student-image" />
      </div>

      <!-- Nombre del estudiante -->
      <h2 class="student-name">{{ student.name }}</h2>

      <!-- Información del estudiante -->
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
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute(); 

const goBack = () => {
  router.go(-1);
};

const student = { ...route.query };
</script>

<style scoped>
.header {
  background-color: #a9a9a9;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.student-image-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.student-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
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

.custom-back-button {
  margin-bottom: 2rem;
  height: 44px;
}

.back-arrow {
  width: 24px;
  height: 24px;
}

.info-value {
  color: #333;
}
</style>
