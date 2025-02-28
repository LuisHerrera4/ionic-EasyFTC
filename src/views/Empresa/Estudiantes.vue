<template>
  <ion-page>
    <ion-content>
      <div class="students-container">
        <!-- Header con GIF de fondo -->
        <div class="students-header">
          <h1>STUDENTS</h1>
        </div>

        <!-- Navigation Tabs -->
        <div class="nav-tabs">
          <router-link to="/empresa/inicio" class="tab-button" active-class="active">
            <img src="/paper.png" alt="Offers" class="tab-icon" />
            <span>Offers</span>
          </router-link>

          <router-link to="/empresa/Estudiantes" class="tab-button" active-class="active">
            <img src="/users.png" alt="Students" class="tab-icon" />
            <span>Students</span>
          </router-link>

          <router-link to="/empresa/Help" class="tab-button" active-class="active">
            <img src="/question.png" alt="Help" class="tab-icon" />
            <span>Help</span>
          </router-link>
        </div>

        <!-- Students Grid -->
        <ion-grid class="students-grid">
          <ion-row>
            <ion-col size="6" v-for="(student, index) in students" :key="index">
              <div 
                class="student-card"
                :class="{ 'selected': student.selected }"
                @click="selectStudent(index)"
              >
                <div class="student-avatar">
                  <img :src="student.avatar" alt="Student avatar">
                </div>
                <div class="student-info">
                  <h3>{{ student.name }}</h3>
                  <p>{{ student.time }}</p>
                </div>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';

const students = ref([
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario1.jpg', selected: false },
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario2.jpg', selected: false },
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario3.png', selected: true },
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario4.jpeg', selected: false },
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario2.jpg', selected: false },
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario3.png', selected: false },
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario1.jpg', selected: false },
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario2.jpg', selected: false },
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario3.png', selected: true },
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario4.jpeg', selected: false },
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario2.jpg', selected: false },
  { name: 'Michal Jack', time: '28 mins ago', avatar: '/usuario3.png', selected: false }
]);

const selectStudent = (index: number) => {
  students.value = students.value.map((student, i) => ({
    ...student,
    selected: i === index
  }));
};
</script>

<style scoped>
/* Importar Lexend */
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;700&display=swap');

* {
  font-family: 'Lexend', sans-serif;
}

.students-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
}

/* Encabezado con GIF de fondo */
.students-header {
  background-image: url('/nubes.gif'); /* Cambia esto por la ruta correcta de tu GIF */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.students-header h1 {
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

/* Navigation Tabs */
.nav-tabs {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e5e5e5;
  background-color: #ffffff;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  color: #666666;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.tab-button.active {
  background-color: #ebf2fe;
  color: #1d4ed8;
}

.tab-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

/* Students Grid */
.students-grid {
  padding: 1rem;
}

.student-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease;
}

.student-card.selected {
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1);
}

.student-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.student-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.student-info {
  flex: 1;
}

.student-info h3 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: #333333;
}

.student-info p {
  margin: 0;
  font-size: 0.75rem;
  color: #666666;
  margin-top: 0.25rem;
}

/* Ajustes para el grid de Ionic */
ion-grid {
  --ion-grid-padding: 0;
}

ion-col {
  --ion-grid-column-padding: 0.5rem;
}
</style>
