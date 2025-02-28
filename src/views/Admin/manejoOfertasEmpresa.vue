<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="main-title">Manage Company</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Back Navigation -->
      <div class="back-navigation" @click="goBack">
        <img src="/back_arrow.svg" alt="Back" class="back-arrow" />
        <span class="sub-title">Manage offers of company</span>
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

        <!-- Dynamic Year Parameter (Solo uno) -->
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
import { useRouter } from "vue-router"; // 🚀 Importa Vue Router
import { 
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonTextarea,
  IonCheckbox,
  IonButton,
  IonLabel,
  IonDatetime
} from '@ionic/vue';

const router = useRouter(); // 📌 Instancia de Vue Router

// Función para volver atrás
const goBack = () => {
  router.back(); // 🔙 Retrocede a la página anterior
};

const offerTitle = ref("");
const offerDescription = ref("");
const skillsRequired = ref("");
const direction = ref("");
const vacancies = ref("");
const yearParameter = ref(null); // Solo se permite un año

const deleteFlags = ref({
  title: false,
  description: false,
  skills: false,
  direction: false,
  vacancies: false,
  year: false
});

const addParameter = () => {
  if (yearParameter.value === null) {
    yearParameter.value = ""; // Agrega un campo vacío para año
  }
};

const deleteSelectedFields = () => {
  if (deleteFlags.value.title) offerTitle.value = "";
  if (deleteFlags.value.description) offerDescription.value = "";
  if (deleteFlags.value.skills) skillsRequired.value = "";
  if (deleteFlags.value.direction) direction.value = "";
  if (deleteFlags.value.vacancies) vacancies.value = "";
  
  // Eliminar completamente el campo "Year" si su checkbox está marcado
  if (deleteFlags.value.year) {
    yearParameter.value = null;
    deleteFlags.value.year = false;
  }
};
</script>

<style scoped>
ion-toolbar {
  --background: #f4f4f4;
}

.main-title {
  font-size: 24px;
  font-weight: bold;
  padding: 10px 16px;
}

/* Back Navigation */
.back-navigation {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
  padding-left: 16px;
  cursor: pointer;
}

.back-arrow {
  width: 24px;
  height: 24px;
}

.sub-title {
  font-size: 16px;
}

/* Form styles */
.form-container {
  padding: 20px;
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

/* Button styles */
.add-param-container {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

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

/* Content background */
ion-content {
  --background: #ffffff;
}
</style>
