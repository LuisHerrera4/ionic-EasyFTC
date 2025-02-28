<template>
  <ion-page>
    <ion-content>
      <div v-if="isLoading" class="loading-screen">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Publicando . . .</p>
      </div>
      <div v-else class="offers-container">
        <!-- Header con navegación -->
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

        <!-- Form Content (AHORA MÁS ARRIBA) -->
        <div class="form-content">
          <div class="form-card">
            <h2 class="form-title">Create New Offer</h2>
            
            <div class="form-group">
              <ion-input 
                label="Title of Offer" 
                label-placement="floating" 
                fill="outline" 
                class="custom-input"
                placeholder="Enter the title of your offer"
              ></ion-input>
            </div>
            
            <div class="form-group">
              <ion-label class="custom-label">Description</ion-label>
              <ion-item class="custom-textarea">
                <ion-textarea 
                  placeholder="Describe the offer in detail" 
                  rows="4"
                ></ion-textarea>
              </ion-item>
            </div>
            
            <div class="form-group">
              <ion-input 
                label="Skills Required" 
                label-placement="floating" 
                fill="outline" 
                class="custom-input"
                placeholder="e.g. JavaScript, Vue, CSS"
              ></ion-input>
            </div>
            
            <div class="form-group">
              <ion-input 
                label="Direction" 
                label-placement="floating" 
                fill="outline" 
                class="custom-input"
                placeholder="Enter the work location"
              ></ion-input>
            </div>
            
            <div class="form-group vacancy-group">
              <ion-label class="vacancy-label">Vacancies</ion-label>
              <ion-item class="custom-select">
                <ion-select interface="popover" class="vacancy-select">
                  <ion-select-option value="1">1</ion-select-option>
                  <ion-select-option value="2">2</ion-select-option>
                  <ion-select-option value="3">3+</ion-select-option>
                </ion-select>
              </ion-item>
            </div>

            <div class="button-container">
              <ion-button expand="block" class="publish-button" @click="publishOffer">
                Publish Offer
              </ion-button>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { 
  IonPage, 
  IonContent, 
  IonButton, 
  IonSpinner,
  IonInput, 
  IonTextarea, 
  IonItem, 
  IonLabel, 
  IonSelect, 
  IonSelectOption
} from '@ionic/vue';

const activeTab = ref('offers');
const router = useRouter();
const isLoading = ref(false);

const navigateTo = (route: string) => {
  router.push(`/${route}`);
};

const publishOffer = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    router.push('/empresa/ofertase');
  }, 1500);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700&display=swap');

* {
  font-family: 'Lexend', sans-serif;
}

.loading-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.offers-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9fafb;
}

.offers-header {
  background: url('/nubes.gif') center/cover no-repeat; 
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.offers-header h1 {
  color: white;
  font-size: 2.2rem;
  font-weight: bold;
}

/* Navigation Tabs */
.nav-tabs {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.25rem;
  font-weight: 500;
  color: #666;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.tab-button.active {
  background-color: #ebf2fe;
  color: #1d4ed8;
}

/* FORM CONTENT MÁS ARRIBA */
.form-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px; /* Eleva el formulario */
}

.form-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  width: 100%;
  max-width: 550px;
}

.form-group {
  margin-bottom: 0.8rem;
  width: 100%;
  text-align: left;
}

.custom-label {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  display: block;
  margin-bottom: 5px;
}

/* Alinear Vacancies */
.vacancy-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vacancy-label {
  font-weight: 500;
}

.vacancy-select {
  min-width: 120px;
}

.button-container {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}

.publish-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
