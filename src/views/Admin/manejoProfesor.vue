<template>
  <ion-page>
    <div class="header">
      <h1>Manage Professor</h1>
    </div>

    <ion-content class="ion-padding">
      <div class="back-button-container">
        <ion-button fill="clear" class="back-button">
          <ion-icon :icon="chevronBack"></ion-icon>
        </ion-button>
      </div>

      <!-- Botones de acción para estudiantes -->
      <div class="action-buttons">
        <ion-button class="delete-button" @click="deleteSelectedStudents">
          Delete student
        </ion-button>
        <router-link to="/admin/manejoProfesorAlumnos">
          <ion-button class="add-button">Add student</ion-button>
        </router-link>
      </div>

      <!-- Checkbox para seleccionar todos -->
      <div class="select-all">
        <ion-checkbox v-model="selectAllStudents" @ionChange="toggleAllStudents"></ion-checkbox>
        <span>Select all</span>
      </div>

      <!-- Lista de estudiantes -->
      <div class="students-list">
        <div
          v-for="(student, index) in students"
          :key="index"
          class="student-item"
          @click="viewStudent(student)"
        >
          <div class="student-info">
            <ion-avatar>
              <img :src="student.image" :alt="student.name" />
            </ion-avatar>
            <div class="student-details">
              <h3>{{ student.name }}</h3>
              <p>{{ student.school }}</p>
            </div>
          </div>
          <ion-checkbox v-model="student.selected" @click.stop></ion-checkbox>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { 
  IonPage, IonContent, IonButton, IonIcon, IonCheckbox, IonAvatar
} from '@ionic/vue';
import { chevronBack } from 'ionicons/icons';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Estado para seleccionar todos los estudiantes
const selectAllStudents = ref(false);

// Lista de estudiantes (inicial)
const students = ref([
  { name: 'Jaydon Herwitz', school: 'Ins Puig Castellar', image: '/placeholder.svg', selected: false },
  { name: 'Giana Herwitz', school: 'Ins Puig Castellar', image: '/placeholder.svg', selected: false }
]);

// Función para seleccionar/deseleccionar todos los estudiantes
const toggleAllStudents = () => {
  students.value.forEach(student => {
    student.selected = selectAllStudents.value;
  });
};

// Eliminar estudiantes seleccionados
const deleteSelectedStudents = () => {
  students.value = students.value.filter(student => !student.selected);
  selectAllStudents.value = false;
};

// Navegar a la vista de un estudiante
const viewStudent = (student) => {
  router.push({ path: "/admin/manejoProfesorAlumnos", query: student });
};
</script>

<style scoped>
  .header {
    background-color: #a9a9a9;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 30px 30px;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  .header h1 {
    font-size: 32px;
    font-weight: 600;
    color: #000;
    margin: 0;
  }
  
  .back-button-container {
    margin-bottom: 15px;
  }
  
  .back-button {
    --padding-start: 8px;
    --padding-end: 8px;
    --padding-top: 8px;
    --padding-bottom: 8px;
    height: 50px;
    width: 50px;
    --border-radius: 50%;
    border: 1px solid #d1d5db;
  }
  
  .back-button ion-icon {
    font-size: 24px;
    color: #000;
  }
  
  .action-buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  .delete-button {
    --background: transparent;
    --background-hover: #ff4a4a10;
    --color: #ff4a4a;
    --border-color: #ff4a4a;
    --border-style: solid;
    --border-width: 1px;
    --border-radius: 8px;
    --box-shadow: none;
    flex: 1;
  }
  
  .add-button {
    --background: transparent;
    --background-hover: #4a7bff10;
    --color: #4a7bff;
    --border-color: #4a7bff;
    --border-style: solid;
    --border-width: 1px;
    --border-radius: 8px;
    --box-shadow: none;
    flex: 1;
  }
  
  .select-all {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  .select-all span {
    font-size: 16px;
    color: #4a7bff;
  }
  
  .students-list, .offers-list {
    margin-bottom: 20px;
  }
  
  .student-item, .offer-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .student-item:last-child, .offer-item:last-child {
    border-bottom: none;
  }
  
  .student-info {
    display: flex;
    align-items: center;
  }
  
  ion-avatar {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  
  .student-details h3, .offer-info h3 {
    font-size: 16px;
    font-weight: 500;
    color: #000;
    margin: 0 0 5px 0;
  }
  
  .student-details p, .offer-info p {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
  
  ion-checkbox {
    --size: 24px;
    --checkbox-background-checked: #4a7bff;
    --border-color: #d1d5db;
    --border-radius: 4px;
  }
  </style>