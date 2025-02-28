<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="custom-toolbar">
        <ion-title class="ion-text-center large-title">STUDENTS</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button fill="clear" class="custom-back-button" @click="goBack">
        <img src="/back_arrow.svg" alt="back_arrow" class="back-arrow" />
      </ion-button>

      <ion-list>
        <ion-item
          v-for="student in students"
          :key="student.id"
          button
          lines="none"
          class="custom-item"
          @click="goToStudent(student)"
        >
          <div class="student-info">
            <ion-avatar class="student-avatar">
              <img :src="student.image" alt="Student Image" class="avatar-img" />
            </ion-avatar>
            <div class="student-details">
              <h2>{{ student.name }}</h2>
              <p>{{ student.school }}</p>
            </div>
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem, IonAvatar } from "@ionic/vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const students = ref([
  {
    id: 1,
    name: "Jaydon Herwitz",
    school: "Ins Puig Castellar",
    age: 17,
    education: "High School",
    competencies: "Problem Solving",
    occupation: "Student",
    location: "Barcelona",
    techLiterate: "High",
    image: "/usuario1.jpg",
  },
  {
    id: 2,
    name: "Giana Herwitz",
    school: "Ins Puig Castellar",
    age: 18,
    education: "High School",
    competencies: "Creativity, Teamwork",
    occupation: "Student",
    location: "Barcelona",
    techLiterate: "Medium",
    image: "/usuario2.jpg",
  },
  {
    id: 3,
    name: "Messi",
    school: "Ins Puig Castellar",
    age: 17,
    education: "High School",
    competencies: "Critical Thinking, Leadership",
    occupation: "Student",
    location: "Barcelona",
    techLiterate: "High",
    image: "/usuario3.png",
  },
]);

const goBack = () => {
  router.go(-1);
};

const goToStudent = (student: any) => {
  router.push({
    path: "/profesor/datosEstudiantes",
    query: { ...student },
  });
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700&display=swap');

* {
  font-family: 'Lexend', sans-serif;
}

.custom-toolbar {
  --min-height: 150px;
  background: url('/cielo.gif') no-repeat center center;
  background-size: cover;
  --background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.large-title {
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
  padding: 20px 0;
}

.custom-back-button {
  margin-bottom: 2rem;
  height: 44px;
}

.back-arrow {
  width: 24px;
  height: 24px;
}

.custom-item {
  margin-bottom: 24px;
}

.student-info {
  display: flex;
  align-items: center;
}

.student-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.student-details {
  margin-left: 16px;
}
</style>
