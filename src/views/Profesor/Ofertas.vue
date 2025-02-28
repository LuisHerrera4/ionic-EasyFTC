<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="light" class="custom-toolbar">
          <ion-title class="ion-text-center font-bold large-title">OFFERS</ion-title>
        </ion-toolbar>


      </ion-header>
      
      <ion-content>
        <div class="offers-container">
          <div v-for="(offer, index) in offers" :key="index" class="offer-item">
            <div class="offer-info">
              <h2 class="offer-title">{{ offer.title }}</h2>
              <p class="offer-subtitle">{{ offer.subtitle }}</p>
            </div>
            <ion-button class="view-button" fill="outline" color="primary" router-link="/profesor/detalles">View Offer</ion-button>
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
    IonButton
  } from '@ionic/vue';
  import { ref } from 'vue';
  
  const offers = ref([
    {
      title: 'Programmer Database',
      subtitle: 'For students DAM'
    },
    {
      title: 'UI Design',
      subtitle: 'For students DAW'
    },
    {
      title: 'Interface Developer',
      subtitle: 'For students DAW'
    },
    {
      title: 'Java programmer',
      subtitle: 'For students DAM'
    },
    {
      title: 'Laptop Technician',
      subtitle: 'For students ASIX'
    },
    {
      title: 'Programmer Python',
      subtitle: 'For students DAM'
    }
  ]);
  </script>
  
  <style scoped>
  .offers-container {
    padding: 16px;
  }
  
  .offer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid #eee;
  }
  
  .offer-info {
    display: flex;
    flex-direction: column;
  }
  
  .offer-title {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
  
  .offer-subtitle {
    margin: 4px 0 0;
    font-size: 14px;
    color: #666;
  }
  
  .view-button {
    --border-radius: 4px;
    font-size: 14px;
    height: 36px;
  }
  
  .font-bold {
    font-weight: 600;
  }

  .custom-toolbar {
  --min-height: 150px; /* Ajusta la altura del toolbar */
  background-color: #f8f9fa; /* Cambia el fondo si quieres */
  display: flex;
  align-items: center; /* Asegura que el texto esté centrado verticalmente */
}

.large-title {
  font-size: 28px; /* Aumenta el tamaño del texto */
  font-weight: bold;
}


  </style>