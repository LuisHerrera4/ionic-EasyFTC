<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="custom-toolbar">
        <ion-title class="center-title">Manage Professor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="content-container">
        <!-- Botón de Back -->
        <div class="back-button-container">
          <ion-button fill="clear" class="custom-back-button" @click="goBack">
            <img src="/back_arrow.svg" alt="Back" class="back-arrow" />
          </ion-button>
        </div>

        <!-- Professors Section -->
        <div class="section professors-section">
          <ion-list>
            <ion-item v-for="professor in professors" :key="professor.id">
              <div class="professor-item" @click="goToStudentProfile(professor)">
                <ion-avatar>
                  <img :src="professor.avatar" :alt="professor.name" />
                </ion-avatar>
                <ion-label>{{ professor.name }}</ion-label>
              </div>
              <!-- Checkbox alineado a la derecha -->
              <ion-checkbox slot="end" v-model="professor.selected" @click.stop></ion-checkbox>
            </ion-item>
          </ion-list>
        </div>

        <!-- Botones de acción -->
        <div class="action-buttons">
          <ion-button color="danger" class="custom-button" @click="deleteSelectedProfessors">
            Delete student
          </ion-button>
          <ion-button color="primary" class="custom-button" @click="addStudent">
            Add student
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};

const professors = ref([
  { id: 1, name: 'Jayden Harville', avatar: '/usuario1.jpg', selected: false },
  { id: 2, name: 'Tiana Harrell', avatar: 'usuario2.jpg', selected: false },
  { id: 3, name: 'Charlie Cabane', avatar: '/usuario3.png', selected: false },
  { id: 4, name: 'Ruben Stanton', avatar: 'usuario4.jpeg', selected: false },
  { id: 5, name: 'Michael Jack', avatar: '/usuario1.jpg', selected: false },
  { id: 6, name: 'Jon Alice', avatar: '/usuario3.png', selected: false }
]);

const goToStudentProfile = (student) => {
  router.push({
    path: '/admin/manejoProfesorAlumnos',
    query: { 
      id: student.id, 
      name: student.name, 
      avatar: student.avatar 
    }
  });
};

// Función para eliminar profesores seleccionados
const deleteSelectedProfessors = () => {
  professors.value = professors.value.filter(professor => !professor.selected);
};

// Función para agregar un nuevo estudiante
const addStudent = () => {
  router.push({ path: '/admin/manejoProfesorAlumnos', query: { newStudent: true } });
};
</script>

<style scoped>
.content-container {
  padding: 16px;
}

/* Estilos para el toolbar */
.custom-toolbar {
  --background: #f4f4f4;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-title {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}

.back-button-container {
  display: flex;
  justify-content: flex-start;
  padding: 10px 16px;
}

.custom-back-button {
  margin-right: 10px;
}

.back-arrow {
  width: 28px;
  height: 28px;
}

.section {
  margin-bottom: 24px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

.action-buttons {
  display: flex;
  gap: 8px;
  padding: 16px;
  justify-content: center;
}

.custom-button {
  --border-radius: 20px;
  font-size: 14px;
  text-transform: none;
}

.professor-item {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

ion-avatar {
  width: 40px;
  height: 40px;
}

ion-list {
  background: transparent;
}

ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ion-checkbox {
  --size: 20px;
  --checkbox-background-checked: #3880ff;
  --border-color: #ddd;
  --border-radius: 4px;
}
</style>
