<template>
    <ion-page>
      <!-- Header con título "Manage accounts" -->
      <div class="header">
        <h1>Manage accounts</h1>
      </div>
      
      <ion-content class="ion-padding">
        <!-- Contenedor de la imagen del laptop -->
        <div class="laptop-container">
          <!-- Aquí puedes importar tu imagen -->
          <img :src="laptopImage" alt="Laptop" class="laptop-image" />
        </div>
        
        <!-- Contenedor de botones -->
        <div class="buttons-container">
          <ion-button class="custom-button" expand="block" router-link="/admin/manejoEmpresa">
            Manage Company
          </ion-button>
          
          <ion-button class="custom-button" expand="block" router-link="/admin/manejoProfesor">
            Manage Professor
          </ion-button>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { 
    IonPage, 
    IonContent, 
    IonButton
  } from '@ionic/vue';
  import { ref } from 'vue';
  
  // Referencia a la imagen del laptop que importarás
  // Cambia esta ruta por la ubicación real de tu imagen
  const laptopImage = ref('/path-to-your-laptop-image.jpg');
  </script>
  
  <style scoped>
  .header {
    background-color: #a9a9a9;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .header h1 {
    font-size: 32px;
    font-weight: 600;
    color: #000;
    margin: 0;
  }
  
  .laptop-container {
    display: flex;
    justify-content: center;
    margin: 40px 0;
  }
  
  .laptop-image {
    max-width: 80%;
    height: auto;
  }
  
  .buttons-container {
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 30px;
    margin: 20px auto;
    max-width: 450px;
  }
  
  .custom-button {
    --background: transparent;
    --background-hover: #4a7bff10;
    --color: #4a7bff;
    --border-color: #4a7bff;
    --border-style: solid;
    --border-width: 2px;
    --border-radius: 25px;
    --box-shadow: none;
    --padding-top: 20px;
    --padding-bottom: 20px;
    margin-bottom: 20px;
    height: 60px;
    font-size: 18px;
    font-weight: 500;
  }
  
  .custom-button:last-child {
    margin-bottom: 0;
  }
  </style>