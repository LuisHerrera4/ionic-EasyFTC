<template>
  <ion-page>
    <ion-content>
      <div class="offers-container">
        <!-- Header -->
        <div class="offers-header">
          <h1>OFFERS</h1>
        </div>

        <!-- Navigation Tabs -->
        <div class="nav-tabs">
          <button 
            :class="['tab-button', { active: activeTab === 'offers' }]"
            @click="activeTab = 'offers'"
          >
            <img src="/paper.png" alt="Offers" class="tab-icon"/>
            Offers
          </button>
          <button 
            :class="['tab-button', { active: activeTab === 'students' }]"
            @click="navigateTo('empresa/Estudiantes')"
          >
            <img src="/users.png" alt="Students" class="tab-icon"/>
            Students
          </button>
          <button 
            :class="['tab-button', { active: activeTab === 'help' }]"
            @click="navigateTo('empresa/Help')"
          >
            <img src="/question.png" alt="Help" class="tab-icon"/>
            Help
          </button>
        </div>

        <!-- Form Content -->
        <div class="form-content">
          <ion-input label="Title of offer" label-placement="floating" fill="outline" class="custom-input"></ion-input>
          
          <ion-item class="custom-textarea">
            <ion-label position="stacked">Label</ion-label>
            <ion-textarea placeholder="Value" rows="4"></ion-textarea>
          </ion-item>
          
          <ion-input label="Skills Required" label-placement="floating" fill="outline" class="custom-input"></ion-input>
          
          <ion-input label="Direction" label-placement="floating" fill="outline" class="custom-input"></ion-input>
          
          <ion-item class="custom-select">
            <ion-select label="Vacancies" label-placement="floating" interface="popover">
              <ion-select-option value="1">1</ion-select-option>
              <ion-select-option value="2">2</ion-select-option>
              <ion-select-option value="3">3+</ion-select-option>
            </ion-select>
          </ion-item>

          <div class="button-container">
            <ion-button expand="block" class="publish-button">Published</ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage, IonContent, IonInput, IonTextarea, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton } from '@ionic/vue';

const activeTab = ref('offers');
const router = useRouter();

const navigateTo = (route: string) => {
  router.push(`/${route}`);
};
</script>

<style scoped>
.offers-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9fafb; /* Mismo color de fondo del segundo código */
}

.offers-header {
  background: url('/nubes.gif') center/cover no-repeat; 
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.offers-header h1 {
  color: #000000;
  font-size: 2rem;
  font-weight: bold;
}

/* Navigation Tabs */
.nav-tabs {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  color: #666666;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.tab-button.active {
  background-color: #ebf2fe;
  color: #1d4ed8;
}

.tab-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

/* Form Content */
.form-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.custom-input,
.custom-textarea,
.custom-select {
  --border-color: #a1a1a1;
  --border-radius: 0.375rem;
  --padding-start: 1rem;
  --padding-end: 1rem;
  --padding-top: 1rem;
  --padding-bottom: 1rem;
}

.custom-textarea {
  --min-height: 120px;
}

.button-container {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
}

.publish-button {
  --background: #3c58e7;
  --background-hover: #1d4ed8;
  --color: #ffffff;
  --border-radius: 0.375rem;
  --padding-start: 3rem;
  --padding-end: 3rem;
  font-weight: 500;
  font-size: 1.125rem;
}
</style>
