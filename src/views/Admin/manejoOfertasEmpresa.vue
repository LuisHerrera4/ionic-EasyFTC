<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="main-title">Manage Company</ion-title>
      </ion-toolbar>
      <ion-toolbar class="sub-header">
        <div class="back-navigation">
          <img src="/back_arrow.svg" alt="Back" class="back-arrow" />
          <span class="sub-title">Manage offerts of company</span>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="form-container">
        <!-- Title Input -->
        <div class="form-group">
          <ion-input
            placeholder="Title of offer"
            class="custom-input"
          ></ion-input>
          <ion-checkbox></ion-checkbox>
        </div>

        <!-- Description Textarea -->
        <div class="form-group">
          <div class="textarea-container">
            <ion-label>Description</ion-label>
            <ion-textarea
              placeholder="Description"
              class="custom-textarea"
            ></ion-textarea>
          </div>
          <ion-checkbox></ion-checkbox>
        </div>

        <!-- Skills Required -->
        <div class="form-group">
          <ion-input
            placeholder="Skills Required"
            class="custom-input"
          ></ion-input>
          <ion-checkbox></ion-checkbox>
        </div>

        <!-- Direction -->
        <div class="form-group">
          <ion-input
            placeholder="Direction"
            class="custom-input"
          ></ion-input>
          <ion-checkbox></ion-checkbox>
        </div>

        <!-- Vacancies -->
        <div class="form-group">
          <div class="vacancies-input">
            <ion-input
              placeholder="Vacancies"
              class="custom-input"
            ></ion-input>
            <ion-icon :icon="informationCircle" class="info-icon"></ion-icon>
          </div>
          <ion-checkbox></ion-checkbox>
        </div>

        <!-- Action Buttons -->
        <div class="button-group">
          <ion-button class="change-btn">Change</ion-button>
          <ion-button class="delete-btn">Delete</ion-button>
          <ion-button class="add-btn">Add parametre</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
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
  IonIcon,
  IonLabel
} from '@ionic/vue';
import { informationCircle } from 'ionicons/icons';
</script>

<style scoped>
/* Header styles */
ion-toolbar {
  --background: #f4f4f4;
}

.main-title {
  font-size: 24px;
  font-weight: bold;
  padding: 10px 16px;
}

.sub-header {
  padding: 0 16px;
}

.back-navigation {
  display: flex;
  align-items: center;
  gap: 12px;
}

.back-arrow {
  width: 24px;
  height: 24px;
  cursor: pointer;
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
  align-items: flex-start;
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

.vacancies-input {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-icon {
  font-size: 20px;
  color: #666;
}

/* Checkbox styles */
ion-checkbox {
  --size: 20px;
  --checkbox-background: #ffffff;
  --checkbox-background-checked: #3880ff;
  --border-color: #d1d1d1;
  --border-radius: 4px;
}

/* Button styles */
.button-group {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.change-btn {
  --background: #3880ff;
}

.delete-btn {
  --background: #ff4961;
}

.add-btn {
  --background: #2dd36f;
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