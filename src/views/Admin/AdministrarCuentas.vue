<template>
  <ion-page>
    <!-- 🔹 Toolbar con GIF -->
    <ion-header>
      <ion-toolbar class="custom-toolbar">
        <ion-title class="ion-text-center large-title">Manage Accounts</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- 🔹 Contenedor de la imagen del laptop -->
      <div class="laptop-container">
        <img src="/ordenador.gif" alt="Laptop" class="laptop-image" />
      </div>

      <!-- 🔹 Contenedor de botones -->
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/vue";
</script>

<style scoped>
/* 🔹 Fuente Lexend */
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700&display=swap");

* {
  font-family: "Lexend", sans-serif;
}

/* 🔹 Toolbar con GIF */
.custom-toolbar {
  --min-height: 150px;
  background: url("/cieloAdmin.gif") no-repeat center center;
  background-size: cover;
  --background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.large-title {
  font-size: 36px;
  font-weight: bold;
  color: white;
  padding: 20px 0;
}

/* 🔹 Contenedor de la imagen */
.laptop-container {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}

.laptop-image {
  max-width: 80%;
  height: auto;
}

/* 🔹 Contenedor de botones */
.buttons-container {
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 30px;
  margin: 20px auto;
  max-width: 450px;
}

/* 🔹 Botones personalizados */
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
