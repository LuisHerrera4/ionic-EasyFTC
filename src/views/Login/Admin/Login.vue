<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="login-container">
        <div class="back-button-container">
          <ion-button fill="clear" class="back-button" @click="goBack">
            <img src="/back_arrow.svg" alt="Back" class="back-icon" />
          </ion-button>
        </div>

        <!-- Logo y título -->
        <div class="logo-container">
          <img src="/logo.gif" alt="EasyFCT Logo" class="logo-image" />
          <h1 class="app-title">EasyFCT</h1>
        </div>

        <!-- Formulario -->
        <div class="form-container">
          <!-- Campo de Email -->
          <ion-item class="custom-input">
            <ion-input type="email" placeholder="Email" v-model="email"></ion-input>
          </ion-item>

          <!-- Campo de Password -->
          <ion-item class="custom-input">
            <ion-input
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              v-model="password"
            ></ion-input>
            <div class="eye-icon" @click="togglePasswordVisibility">
              <img 
                v-if="showPassword" 
                src="/eye_open.png" 
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

          <!-- Botón de Login -->
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
import { useRouter } from 'vue-router';
import { IonPage, IonContent, IonButton, IonItem, IonInput } from '@ionic/vue';

// Estado
const email = ref('');
const password = ref('');
const showPassword = ref(false);

// Hook de navegación
const router = useRouter();

// Métodos
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const goBack = () => {
  router.back();
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

/* Estilo para la imagen del botón de regreso */
.back-icon {
  width: 24px;
  height: 24px;
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
