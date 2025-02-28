<template>
  <ion-page>
    <ion-content>
      <div v-if="isLoading" class="loading-screen">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Publicando . . .</p>
      </div>
      <div v-else class="offers-container">
        <!-- Header con navegaciones del Código 1 -->
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
              <ion-item class="custom-textarea">
                <ion-label position="floating">Description</ion-label>
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
            
            <div class="form-group">
              <ion-item class="custom-select">
                <ion-label position="floating">Vacancies</ion-label>
                <ion-select interface="popover">
                  <ion-select-option value="1">1</ion-select-option>
                  <ion-select-option value="2">2</ion-select-option>
                  <ion-select-option value="3">3+</ion-select-option>
                </ion-select>
              </ion-item>
            </div>

            <div class="button-container">
              <ion-button expand="block" class="publish-button" @click="publishOffer">
                <ion-icon name="paper-plane-outline" slot="start"></ion-icon>
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
  IonSpinner 
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

import { 
  IonInput, 
  IonTextarea, 
  IonItem, 
  IonLabel, 
  IonSelect, 
  IonSelectOption, 
  IonIcon
} from '@ionic/vue';
</script>

<style scoped>
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

.botonn {
  margin-top: 10%;
}

.offers-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9fafb;
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
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Navigation Tabs */
.nav-tabs {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 500;
  color: #666666;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-button:hover {
  background-color: #f3f4f6;
}

.tab-button.active {
  background-color: #ebf2fe;
  color: #1d4ed8;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.tab-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

/* Form Content */
.form-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-card {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
}

@media (max-width: 640px) {
  .form-card {
    padding: 1.5rem;
  }
  
  .nav-tabs {
    padding: 0.75rem;
  }
  
  .tab-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
  

  .tab-icon {
    width: 18px;
    height: 18px;
  }
}

.loading-screen p {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #333;
}

.offers-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9fafb;
}

.offers-header {
  background: url('/nubes.gif') center/cover no-repeat; 
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.offers-header h1 {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button-container {
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
}
</style>
