<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar class="header-toolbar">
        <!-- Botón de Back -->
        <ion-button fill="clear" class="custom-back-button" @click="goBack">
          <img src="/back_arrow.svg" alt="Back" class="back-arrow" />
        </ion-button>
        <ion-title>Manage Professor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="profile-container">
        <div class="student-header">
          <h2 class="student-name">{{ studentName }}</h2>
        </div>

        <div class="avatar-container">
          <ion-avatar class="profile-avatar">
            <img :src="studentAvatar" alt="Profile Image" class="avatar-img" />
          </ion-avatar>
        </div>

        <div class="profile-details">
          <ion-list lines="full">
            <ion-item>
              <ion-label position="fixed" class="detail-label">NAME</ion-label>
              <ion-input v-if="isEditing" v-model="editableStudentName"></ion-input>
              <ion-text v-else class="detail-value">{{ studentName }}</ion-text>
            </ion-item>

            <ion-item>
              <ion-label position="fixed" class="detail-label">EDUCATION</ion-label>
              <ion-input v-if="isEditing" v-model="editableStudentEducation"></ion-input>
              <ion-text v-else class="detail-value">{{ studentEducation }}</ion-text>
            </ion-item>

            <ion-item>
              <ion-label position="fixed" class="detail-label">STATUS</ion-label>
              <ion-input v-if="isEditing" v-model="editableStudentStatus"></ion-input>
              <ion-text v-else class="detail-value">{{ studentStatus }}</ion-text>
            </ion-item>

            <ion-item>
              <ion-label position="fixed" class="detail-label">OCCUPATION</ion-label>
              <ion-input v-if="isEditing" v-model="editableStudentOccupation"></ion-input>
              <ion-text v-else class="detail-value">{{ studentOccupation }}</ion-text>
            </ion-item>

            <ion-item>
              <ion-label position="fixed" class="detail-label">LOCATION</ion-label>
              <ion-input v-if="isEditing" v-model="editableStudentLocation"></ion-input>
              <ion-text v-else class="detail-value">{{ studentLocation }}</ion-text>
            </ion-item>

            <ion-item>
              <ion-label position="fixed" class="detail-label">TECH. LIFESTYLE</ion-label>
              <ion-input v-if="isEditing" v-model="editableStudentTechLifestyle"></ion-input>
              <ion-text v-else class="detail-value">{{ studentTechLifestyle }}</ion-text>
            </ion-item>
          </ion-list>

          <div class="action-button-container">
            <ion-button size="small" class="edit-button" @click="toggleEdit">
              {{ isEditing ? 'Save' : 'Edit' }}
            </ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Obtener la ruta y el router
const route = useRoute();
const router = useRouter();

// Variables reactivas
const isEditing = ref(false);

const studentName = ref(route.query.name || 'Student X');
const studentAvatar = route.query.avatar || '/default-avatar.png';
const studentEducation = ref(route.query.education || 'Unknown');
const studentStatus = ref(route.query.status || 'Active');
const studentOccupation = ref(route.query.occupation || 'Unemployed');
const studentLocation = ref(route.query.location || 'Not specified');
const studentTechLifestyle = ref(route.query.techLifestyle || 'Not specified');

// Variables editables
const editableStudentName = ref(studentName.value);
const editableStudentEducation = ref(studentEducation.value);
const editableStudentStatus = ref(studentStatus.value);
const editableStudentOccupation = ref(studentOccupation.value);
const editableStudentLocation = ref(studentLocation.value);
const editableStudentTechLifestyle = ref(studentTechLifestyle.value);

// Función para alternar edición
const toggleEdit = () => {
  if (isEditing.value) {
    // Guardar cambios
    studentName.value = editableStudentName.value;
    studentEducation.value = editableStudentEducation.value;
    studentStatus.value = editableStudentStatus.value;
    studentOccupation.value = editableStudentOccupation.value;
    studentLocation.value = editableStudentLocation.value;
    studentTechLifestyle.value = editableStudentTechLifestyle.value;
  }
  isEditing.value = !isEditing.value;
};

// Función para volver a "/admin/manejoProfesor"
const goBack = () => {
  router.push('/admin/manejoProfesor');
};
</script>

<style scoped>
/* Header styles */
.header-toolbar {
  --background: #f2f2f2;
  --color: #333333;
  --border-style: none;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

ion-title {
  font-size: 18px;
  font-weight: 600;
  flex: 1;
  text-align: center;
}

/* Estilo del botón de back */
.custom-back-button {
  margin-right: 10px;
}

.back-arrow {
  width: 28px;
  height: 28px;
}

/* Content styles */
ion-content {
  --background: #ffffff;
}

.profile-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.student-header {
  padding: 15px 20px 5px;
  border-bottom: 1px solid #f2f2f2;
}

.student-name {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #666666;
}

.avatar-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.profile-avatar {
  width: 80px;
  height: 80px;
  --border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-details {
  flex: 1;
}

ion-list {
  background: transparent;
  padding: 0;
}

ion-item {
  --padding-start: 20px;
  --padding-end: 20px;
  --inner-padding-end: 0;
  --background: transparent;
  --border-color: #f2f2f2;
}

.detail-label {
  font-size: 14px;
  color: #666666;
  font-weight: 500;
  letter-spacing: 0.5px;
  min-width: 140px;
  max-width: 140px;
}

.detail-value {
  font-size: 14px;
  color: #333333;
  text-align: right;
}

.action-button-container {
  display: flex;
  justify-content: flex-end;
  padding: 15px 20px;
}

.edit-button {
  --background: #ffffff;
  --color: #3880ff;
  --border-color: #3880ff;
  --border-style: solid;
  --border-width: 1px;
  --border-radius: 4px;
  --box-shadow: none;
  --padding-start: 15px;
  --padding-end: 15px;
  font-size: 13px;
  font-weight: 500;
  height: 30px;
  text-transform: none;
}
</style>
