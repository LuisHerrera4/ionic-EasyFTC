<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="login-container">
        <!-- Back button -->
        <div class="back-button-container">
          <ion-button fill="clear" class="back-button">
            <ion-icon :icon="chevronBackOutline"></ion-icon>
          </ion-button>
        </div>

        <!-- Logo and title -->
        <div class="logo-container">
          <img src="/logo.gif" alt="EasyFCT Logo" class="logo-image" />
          <h1 class="app-title">EasyFCT</h1>
        </div>

        <!-- Form -->
        <div class="form-container">
          <!-- Email input -->
          <ion-item class="custom-input">
            <ion-input
              type="email"
              placeholder="Email"
              v-model="email"
            ></ion-input>
          </ion-item>

          <!-- Password input -->
          <ion-item class="custom-input">
            <ion-input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              v-model="password"
            ></ion-input>
            <div class="eye-icon" @click="togglePasswordVisibility">
              <img 
                v-if="showPassword" 
                src="/eye_close.png" 
                alt="Hide Password" 
                class="eye-image"
              />
              <img 
                v-else 
                src="/eye_close.png" 
                alt="Show Password" 
                class="eye-image"
              />
            </div>
          </ion-item>

          <!-- Login button -->
          <ion-button expand="block" class="login-button" router-link="/admin/administrarCuentas">
            Login
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { 
  IonPage, 
  IonContent, 
  IonButton, 
  IonItem, 
  IonInput, 
  IonIcon 
} from '@ionic/vue';
import { chevronBackOutline } from 'ionicons/icons';

// Estado
const email = ref('');
const password = ref('');
const showPassword = ref(false);

// Métodos
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const login = () => {
  // Implementar lógica de login aquí
  console.log('Login con:', email.value, password.value);
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  height: 100%;
  background-color: #ffffff;
}

.back-button-container {
  align-self: flex-start;
  margin-bottom: 3rem;
}

.back-button {
  width: 3rem;
  height: 3rem;
  --border-radius: 50%;
  --background: #f7f8f9;
  --color: #1e232c;
  --box-shadow: none;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
}

.logo-image {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  margin-bottom: 1.25rem;
  object-fit: contain;
}

.app-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e232c;
  margin: 0;
}

.form-container {
  width: 100%;
  max-width: 28rem;
}

.custom-input {
  --background: #f7f8f9;
  --border-radius: 0.75rem;
  --padding-start: 1rem;
  --padding-end: 1rem;
  --highlight-height: 0;
  margin-bottom: 1rem;
  --border-width: 0;
  --inner-padding-end: 0;
  height: 3.5rem;
}

.eye-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
}

.eye-image {
  width: 1.5rem;
  height: 1.5rem;
}

.login-button {
  --background: #1e232c;
  --border-radius: 0.75rem;
  --color: white;
  height: 3.5rem;
  margin-top: 1rem;
  font-weight: 500;
  --box-shadow: none;
}

/* Eliminar líneas de los ion-item */
::v-deep(.item-inner) {
  border-bottom: none !important;
}

::v-deep(.input-clear-icon) {
  display: none !important;
}
</style>