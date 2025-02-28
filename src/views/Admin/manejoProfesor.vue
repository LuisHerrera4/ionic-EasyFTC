<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-background">
        <ion-title class="main-title">Manage Professor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="header-container">
        <ion-button fill="clear" class="custom-back-button" @click="goBack">
          <img src="/back_arrow.svg" alt="Back" class="back-arrow" />
        </ion-button>
        <h2 class="sub-title">Manage professor and students</h2>
      </div>

      <div class="section professors-section">
        <ion-list>
          <ion-item v-for="professor in professors" :key="professor.id">
            <div class="professor-item" @click="goToStudentProfile(professor)">
              <ion-avatar>
                <img :src="professor.avatar" :alt="professor.name" />
              </ion-avatar>
              <ion-label>{{ professor.name }}</ion-label>
            </div>
            <ion-checkbox slot="end" v-model="professor.selected" @click.stop></ion-checkbox>
          </ion-item>
        </ion-list>
      </div>

      <div class="action-buttons">
        <ion-button color="danger" class="custom-button" @click="deleteSelectedProfessors">
          Delete Student
        </ion-button>
        <ion-button color="primary" class="custom-button" @click="addStudent">
          Add Student
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.go(-1);
};

const professors = ref([
  { id: 1, name: "Jayden Harville", avatar: "/usuario1.jpg", selected: false },
  { id: 2, name: "Tiana Harrell", avatar: "usuario2.jpg", selected: false },
  { id: 3, name: "Charlie Cabane", avatar: "/usuario3.png", selected: false },
  { id: 4, name: "Ruben Stanton", avatar: "usuario4.jpeg", selected: false },
  { id: 5, name: "Michael Jack", avatar: "/usuario1.jpg", selected: false },
  { id: 6, name: "Jon Alice", avatar: "/usuario3.png", selected: false },
]);

const goToStudentProfile = (student) => {
  router.push({
    path: "/admin/manejoProfesorAlumnos",
    query: {
      id: student.id,
      name: student.name,
      avatar: student.avatar,
    },
  });
};

const deleteSelectedProfessors = () => {
  professors.value = professors.value.filter((professor) => !professor.selected);
};

const addStudent = () => {
  router.push({ path: "/admin/manejoProfesorAlumnos", query: { newStudent: true } });
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700&display=swap");

* {
  font-family: "Lexend", sans-serif;
}

.toolbar-background {
  background: url("/cieloAdmin.gif") no-repeat center center / cover;
  height: 180px;
  --background: transparent;
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

.section {
  margin: 12px 16px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
  background: white;
  border-radius: 8px;
  overflow: hidden;
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

.action-buttons {
  display: flex;
  gap: 10px;
  padding: 16px;
  justify-content: center;
}

.custom-button {
  --border-radius: 20px;
  font-size: 14px;
  text-transform: none;
}
</style>
