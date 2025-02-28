<template>
    <ion-page>
      <ion-content class="ion-padding">
        <div class="login-container">
          <div class="logo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" class="apple-logo" />
          </div>
  
          <h1 class="login-title">Iniciar sesión con Apple</h1>
  
          <ion-item class="custom-input">
            <ion-input
              placeholder="Correo electrónico o número de teléfono"
              type="text"
              v-model="email"
            ></ion-input>
          </ion-item>
  
          <ion-item class="custom-input">
            <ion-input
              placeholder="Contraseña"
              type="password"
              v-model="password"
            ></ion-input>
          </ion-item>
  
          <ion-button expand="block" class="login-button" router-link="/profesor/ofertas">
            Iniciar sesión
          </ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { IonPage, IonContent, IonItem, IonInput, IonButton, alertController } from '@ionic/vue';
  
  const email = ref('');
  const password = ref('');
  
  const login = async () => {
    if (!email.value || !password.value) {
      const alert = await alertController.create({
        header: 'Error',
        message: 'Por favor, ingresa tu correo electrónico y contraseña.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
  
    console.log('Logging in with:', email.value, password.value);
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .logo-container {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .apple-logo {
    width: 100px;
    height: auto;
  }
  
  .login-title {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 20px;
    color: #1c1e21;
    text-align: center;
  }
  
  .custom-input {
    margin-bottom: 12px;
    width: 100%;
  }
  
  .login-button {
    --background: #000;
    --background-hover: #333;
    --color: white;
    --border-radius: 6px;
    margin-top: 6px;
    font-weight: bold;
    height: 48px;
    width: 100%;
  }
  </style>
  