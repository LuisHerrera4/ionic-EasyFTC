<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="main-title">Manage Company</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Contenedor del botón de Back y subtítulo -->
      <div class="header-container">
        <ion-button fill="clear" class="custom-back-button" @click="goBack">
          <img src="/back_arrow.svg" alt="Back" class="back-arrow" />
        </ion-button>
        <h2 class="sub-title">Manage offers of company</h2>
      </div>

      <!-- Lista de ofertas -->
      <div class="offers-list">
        <ion-list>
          <ion-item v-for="(offer, index) in offers" :key="index" class="offer-item">
            <!-- Contenido de la oferta -->
            <div class="offer-content">
              <div>
                <h2 class="offer-title">{{ offer.title }}</h2>
                <p class="offer-subtitle">{{ offer.forStudents }}</p>
              </div>
              <ion-button fill="clear" class="menu-button" @click="toggleMenu(index)">
                <ion-icon :icon="ellipsisVertical"></ion-icon>
              </ion-button>
            </div>

            <!-- Menú de opciones debajo de la oferta -->
            <div v-if="activeMenuIndex === index" class="offer-menu">
              <ion-button expand="full" class="edit-button" @click="editOffer(offer)">
                Edit
              </ion-button>
              <ion-button expand="full" class="delete-button" @click="deleteOffer(index)">
                Delete
              </ion-button>
            </div>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ellipsisVertical } from 'ionicons/icons';

const router = useRouter();
const activeMenuIndex = ref(null);

const goBack = () => {
  router.go(-1);
};

const offers = ref([
  { title: 'Programmer Database', forStudents: 'For students DAM' },
  { title: 'UI Design', forStudents: 'For students DAW' },
  { title: 'Interface Developer', forStudents: 'For students DAW' },
  { title: 'Java programmer', forStudents: 'For students DAM' },
  { title: 'Laptop Technician', forStudents: 'For students ASIX' },
  { title: 'Programmer Python', forStudents: 'For students DAM' }
]);

const toggleMenu = (index) => {
  activeMenuIndex.value = activeMenuIndex.value === index ? null : index;
};

const editOffer = (offer) => {
  router.push({ path: '/admin/manejoEmpresaOfertas', query: { title: offer.title, forStudents: offer.forStudents } });
};

const deleteOffer = (index) => {
  offers.value.splice(index, 1);
  activeMenuIndex.value = null;
};
</script>

<style scoped>
/* Header styles */
ion-toolbar {
  --background: #f4f4f4;
}

.main-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

/* Contenedor del botón y subtítulo */
.header-container {
  display: flex;
  align-items: center;
  padding: 16px;
}

/* Botón de Back */
.custom-back-button {
  margin-right: 10px;
}

.back-arrow {
  width: 28px;
  height: 28px;
}

/* Subtítulo */
.sub-title {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
}

/* Lista de ofertas */
.offers-list {
  padding: 16px;
}

ion-list {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.offer-item {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

/* Contenido de cada oferta */
.offer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

/* Título y subtítulo */
.offer-title {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #000;
}

.offer-subtitle {
  margin: 4px 0 0;
  font-size: 14px;
  color: #666;
}

/* Menú desplegable debajo de la oferta */
.offer-menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
  padding: 8px;
  background: #f9f9f9;
  border-radius: 8px;
}

/* Botones de edición y eliminación */
.edit-button {
  --background: #3880ff;
  color: white;
}

.delete-button {
  --background: #ff3b30;
  color: white;
}

/* Botón de los tres puntos */
.menu-button {
  --padding-start: 8px;
  --padding-end: 8px;
  margin: 0;
  height: 36px;
}

.menu-button ion-icon {
  font-size: 20px;
  color: #666;
}

/* Fondo del contenido */
ion-content {
  --background: #ffffff;
}
</style>
