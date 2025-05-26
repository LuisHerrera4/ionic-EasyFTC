<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-background">
        <ion-title class="main-title">Manage Company</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="header-container">
        <ion-button fill="clear" class="custom-back-button" @click="goBack">
          <img src="/back_arrow.svg" alt="Back" class="back-arrow" />
        </ion-button>
        <h2 class="sub-title">Manage offers of company</h2>
      </div>

      <div class="offers-list">
        <ion-list>
          <ion-item v-for="(offer, index) in offers" :key="index" class="offer-item">
            <div class="offer-content">
              <div>
                <h2 class="offer-title">{{ offer.title }}</h2>
                <p class="offer-subtitle">{{ offer.forStudents }}</p>
              </div>
              <ion-button fill="clear" class="menu-button" @click="toggleMenu(index)">
                <ion-icon :icon="ellipsisVertical"></ion-icon>
              </ion-button>
            </div>

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
  router.push('/admin/AdministrarCuentas');
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
  router.push(`/admin/manejoEmpresaOfertas?title=${encodeURIComponent(offer.title)}&forStudents=${encodeURIComponent(offer.forStudents)}`);
};
const deleteOffer = (index) => {
  offers.value.splice(index, 1);
  activeMenuIndex.value = null;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700&display=swap");

* {
  font-family: "Lexend", sans-serif;
}

.toolbar-background {
  background: url('/cieloAdmin.gif') no-repeat center center / cover;
  height: 180px;
  --background: transparent ;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-title {
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

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

.sub-title {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
}

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

.offer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

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

.edit-button {
  --background: #3880ff;
  color: white;
}

.delete-button {
  --background: #ff3b30;
  color: white;
}

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

ion-content {
  --background: #ffffff;
}
</style>