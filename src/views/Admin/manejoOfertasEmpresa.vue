<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-background">
        <ion-title class="main-title">Manage Company</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Back Navigation -->
      <div class="header-container">
        <ion-button fill="clear" class="custom-back-button" @click="goBack">
          <img src="/back_arrow.svg" alt="Back" class="back-arrow" />
        </ion-button>
        <h2 class="sub-title">Manage offers of company</h2>
      </div>

      <div class="form-container">
        <!-- Title Input -->
        <div class="form-group">
          <ion-input v-model="offerTitle" placeholder="Title of offer" class="custom-input"></ion-input>
          <ion-checkbox v-model="deleteFlags.title"></ion-checkbox>
        </div>

        <!-- Description Textarea -->
        <div class="form-group">
          <div class="textarea-container">
            <ion-label>Description</ion-label>
            <ion-textarea v-model="offerDescription" placeholder="Description" class="custom-textarea"></ion-textarea>
          </div>
          <ion-checkbox v-model="deleteFlags.description"></ion-checkbox>
        </div>

        <!-- Skills Required -->
        <div class="form-group">
          <ion-input v-model="skillsRequired" placeholder="Skills Required" class="custom-input"></ion-input>
          <ion-checkbox v-model="deleteFlags.skills"></ion-checkbox>
        </div>

        <!-- Direction -->
        <div class="form-group">
          <ion-input v-model="direction" placeholder="Direction" class="custom-input"></ion-input>
          <ion-checkbox v-model="deleteFlags.direction"></ion-checkbox>
        </div>

        <!-- Vacancies -->
        <div class="form-group">
          <ion-input v-model="vacancies" placeholder="Vacancies" class="custom-input"></ion-input>
          <ion-checkbox v-model="deleteFlags.vacancies"></ion-checkbox>
        </div>

        <!-- Dynamic Year Parameter -->
        <div v-if="yearParameter !== null" class="form-group">
          <ion-datetime v-model="yearParameter" display-format="YYYY" placeholder="Select Year"></ion-datetime>
          <ion-checkbox v-model="deleteFlags.year"></ion-checkbox>
        </div>
      </div>

      <!-- Add Parameter Button -->
      <div class="add-param-container">
        <ion-button @click="addParameter" :disabled="yearParameter !== null" class="add-btn">
          Add Parameter
        </ion-button>
      </div>

      <!-- Delete Button -->
      <div class="delete-container">
        <ion-button @click="deleteSelectedFields" class="delete-btn">Delete</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};

const offerTitle = ref("");
const offerDescription = ref("");
const skillsRequired = ref("");
const direction = ref("");
const vacancies = ref("");
const yearParameter = ref(null);

const deleteFlags = ref({
  title: false,
  description: false,
  skills: false,
  direction: false,
  vacancies: false,
  year: false,
});

const addParameter = () => {
  if (yearParameter.value === null) {
    yearParameter.value = "";
  }
};

const deleteSelectedFields = () => {
  if (deleteFlags.value.title) offerTitle.value = "";
  if (deleteFlags.value.description) offerDescription.value = "";
  if (deleteFlags.value.skills) skillsRequired.value = "";
  if (deleteFlags.value.direction) direction.value = "";
  if (deleteFlags.value.vacancies) vacancies.value = "";
  if (deleteFlags.value.year) {
    yearParameter.value = null;
    deleteFlags.value.year = false;
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700&display=swap");

* {
  font-family: "Lexend", sans-serif;
}

/* Hacer que el GIF sea el fondo del toolbar */
.toolbar-background {
  background: url('/cieloAdmin.gif') no-repeat center center / cover;
  height: 180px;
  --background: transparent ;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-title {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Back Navigation */
.header-container {
  display: flex;
  align-items: center;
  padding: 16px;
}

.custom-back-button {
  margin-right: 10px;
}

.back-arrow {
  width: 28px;
  height: 28px;
}

.sub-title {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
}

/* Form styles */
.form-container {
  padding: 16px;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.custom-input {
  flex: 1;
  --background: #ffffff;
  --border-color: #d1d1d1;
  --border-radius: 4px;
  --border-width: 1px;
  --padding-start: 12px;
  --padding-end: 12px;
  --placeholder-color: #666;
}

.textarea-container {
  flex: 1;
  border: 2px solid #8c6ff7;
  border-radius: 4px;
  padding: 8px;
}

.textarea-container ion-label {
  color: #8c6ff7;
  font-size: 14px;
  margin-bottom: 4px;
  display: block;
}

.custom-textarea {
  --background: #ffffff;
  --border-width: 0;
  --padding-start: 0;
  --padding-end: 0;
  min-height: 100px;
}

ion-checkbox {
  --size: 20px;
  --checkbox-background: #ffffff;
  --checkbox-background-checked: #3880ff;
  --border-color: #d1d1d1;
  --border-radius: 4px;
}

/* Botones */
.add-param-container,
.delete-container {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

.add-btn {
  --background: #2dd36f;
  width: 50%;
  text-align: center;
}

.delete-btn {
  --background: #ff4961;
  width: 50%;
  text-align: center;
}

ion-button {
  text-transform: none;
  --border-radius: 4px;
  font-size: 14px;
}

/* Fondo del contenido */
ion-content {
  --background: #ffffff;
}
</style>
