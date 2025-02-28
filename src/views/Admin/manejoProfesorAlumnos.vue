<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button fill="clear" class="custom-back-button" @click="goBack">
            <img src="/back_arrow.svg" alt="Back" class="back-arrow" />
          </ion-button>
        </ion-buttons>
        <ion-title>Manage Professor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="content-container">
        <!-- Professors Section -->
        <div class="section professors-section">
          <div class="action-buttons">
            <ion-button color="danger" class="custom-button" @click="deleteSelectedProfessors">
              Delete student
            </ion-button>
            <ion-button color="primary" class="custom-button">
              Add student
            </ion-button>
          </div>

          <div class="select-all">
            <span>Select all</span>
            <ion-checkbox v-model="selectAllProfessors" @ionChange="toggleSelectAllProfessors"></ion-checkbox>
          </div>

          <ion-list>
            <ion-item v-for="professor in professors" :key="professor.id">
              <div class="professor-item">
                <div class="professor-info">
                  <ion-avatar>
                    <img :src="professor.avatar" :alt="professor.name" />
                  </ion-avatar>
                  <ion-label>{{ professor.name }}</ion-label>
                </div>
                <ion-checkbox v-model="professor.selected" class="right-checkbox"></ion-checkbox>
              </div>
            </ion-item>
          </ion-list>
        </div>

        <!-- Positions Section -->
        <div class="section positions-section">
          <ion-list>
            <ion-item v-for="position in positions" :key="position.id">
              <div class="position-item">
                <div class="position-info">
                  <h3>{{ position.title }}</h3>
                  <p>{{ position.forStudents }}</p>
                </div>
                <ion-checkbox v-model="position.selected" class="right-checkbox"></ion-checkbox>
              </div>
            </ion-item>
          </ion-list>

          <div class="action-buttons">
            <ion-button color="danger" class="custom-button" @click="deleteSelectedOffers">
              Delete offer
            </ion-button>
            <ion-button color="primary" class="custom-button">
              Add offer
            </ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
  router.go(-1);
};

const selectAllProfessors = ref(false);
const professors = ref([
  { id: 1, name: 'Jayden Harville', avatar: 'path/to/jayden.jpg', selected: false },
  { id: 2, name: 'Tiana Harrell', avatar: 'path/to/tiana.jpg', selected: false },
  { id: 3, name: 'Charlie Cabane', avatar: 'path/to/charlie.jpg', selected: false },
  { id: 4, name: 'Ruben Stanton', avatar: 'path/to/ruben.jpg', selected: false },
  { id: 5, name: 'Michael Jack', avatar: 'path/to/michael.jpg', selected: false },
  { id: 6, name: 'Jon Alice', avatar: 'path/to/jon.jpg', selected: false }
]);

const toggleSelectAllProfessors = () => {
  professors.value.forEach(professor => professor.selected = selectAllProfessors.value);
};

const deleteSelectedProfessors = () => {
  professors.value = professors.value.filter(professor => !professor.selected);
  selectAllProfessors.value = false;
};

watch(professors, () => {
  selectAllProfessors.value = professors.value.length > 0 && professors.value.every(p => p.selected);
}, { deep: true });

const positions = ref([
  { id: 1, title: 'Programmer Database', forStudents: 'For students DAM', selected: false },
  { id: 2, title: 'UI Design', forStudents: 'For students DAM', selected: false },
  { id: 3, title: 'Interface Developer', forStudents: 'For students DAM', selected: false },
  { id: 4, title: 'Java programmer', forStudents: 'For students DAM', selected: false },
  { id: 5, title: 'Laptop Technician', forStudents: 'For students ASIX', selected: false },
  { id: 6, title: 'Programmer Python', forStudents: 'For students DAM', selected: false }
]);

const deleteSelectedOffers = () => {
  positions.value = positions.value.filter(position => !position.selected);
};
</script>

<style scoped>
.content-container {
  padding: 16px;
}

/* Header styles */
ion-toolbar {
  --background: #f4f4f4;
}

.custom-back-button {
  margin-right: 10px;
}

.back-arrow {
  width: 28px;
  height: 28px;
}

/* Section styles */
.section {
  margin-bottom: 24px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

/* Action buttons */
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

/* Select all checkbox */
.select-all {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}

/* Professor item styles */
.professor-item, .position-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
}

.professor-info, .position-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Avatar */
ion-avatar {
  width: 40px;
  height: 40px;
}

/* Position item styles */
.position-info h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.position-info p {
  margin: 4px 0 0;
  font-size: 14px;
  color: #666;
}

/* List styles */
ion-list {
  background: transparent;
}

ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --background: transparent;
}

/* Checkbox styles */
ion-checkbox {
  --size: 20px;
  --checkbox-background-checked: #3880ff;
  --border-color: #ddd;
  --border-radius: 4px;
}

/* Right-aligned checkboxes */
.right-checkbox {
  margin-left: auto;
}

/* Content background */
ion-content {
  --background: #f4f4f4;
}

/* Ensure proper scrolling */
ion-content::part(scroll) {
  padding-bottom: 24px;
}
</style>
