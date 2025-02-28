<template>
  <ion-page>
    <ion-header>
     

      <!-- Nuevo fondo animado (GIF) debajo del título HELP -->
      <div class="gif-background">        <ion-title class="tituloh">HELP</ion-title>
      </div>

      <!-- Tabs Navigation -->
      <div class="nav-tabs">
        <router-link to="/empresa/Inicio" class="tab-button" active-class="active">
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
    </ion-header>

    <ion-content>
      <swiper
        :slides-per-view="1"
        :space-between="0"
        @swiper="setSwiperRef"
        @slideChange="handleSlideChange"
      >
        <!-- Frequent Questions -->
        <swiper-slide>
          <div class="slide-content">
            <h2 class="section-title">Frequent questions</h2>
            <ion-list lines="full">
              <ion-item v-for="(question, index) in frequentQuestions" :key="index">
                <ion-label>{{ question }}</ion-label>
              </ion-item>
            </ion-list>
          </div>
        </swiper-slide>

        <!-- Opening Hours -->
        <swiper-slide>
          <div class="slide-content">
            <h2 class="section-title">Opening hours</h2>
            <ion-list lines="full">
              <ion-item>
                <ion-label>
                  <h2>9:00 AM - 13:00 PM</h2>
                  <p>Tickets</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-label>
                  <h2>10:00 AM - 11:00 AM</h2>
                  <p>Update schedule</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-label>
                  <h2>8:00 AM - 14:00 PM</h2>
                  <p>Practices</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-label>
                  <h2>19:00 AM - 20:30 PM</h2>
                  <p>Schedule call professor</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-label>
                  <h2>8:00 AM - 14:00 PM</h2>
                  <p>Schedule call company</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-label>
                  <h2>16:00 PM - 19:00 PM</h2>
                  <p>Chat with an agent</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-label>
                  <h2>Never</h2>
                  <p>Cheater</p>
                </ion-label>
              </ion-item>
            </ion-list>
          </div>
        </swiper-slide>

        <!-- Chat with an agent -->
        <swiper-slide>
          <div class="slide-content">
            <h2 class="section-title">Chat with an agent</h2>
            <div class="chat-container">
              <div class="chat-message">
                <div class="avatar">
                  <img src="https://i.pravatar.cc/40?img=26" alt="Tiana Saris" />
                </div>
                <div class="message-content">
                  <div class="message-header">
                    <span class="sender-name">Tiana Saris</span>
                    <span class="message-time">28 mins ago</span>
                  </div>
                  <p>Hi, Allison hope you're doing well, I would like to consult you about your previous visit.</p>
                </div>
              </div>

              <div class="chat-message">
                <div class="avatar">
                  <img src="https://i.pravatar.cc/40?img=44" alt="Allison Seris" />
                </div>
                <div class="message-content">
                  <div class="message-header">
                    <span class="sender-name">Allison Seris</span>
                    <span class="message-time">25 mins ago</span>
                  </div>
                  <p>Hi, Tiana I have a big! problem, I don't how create a variant. Can u help me.</p>
                </div>
              </div>

              <div class="chat-message">
                <div class="avatar">
                  <img src="https://i.pravatar.cc/40?img=26" alt="Tiana Saris" />
                </div>
                <div class="message-content">
                  <div class="message-header">
                    <span class="sender-name">Tiana Saris</span>
                    <span class="message-time">18 mins ago</span>
                  </div>
                  <p>Hi, in variant section you have an option to create the component and when you have the option to give new variant</p>
                </div>
              </div>

              <div class="chat-message">
                <div class="avatar">
                  <img src="https://i.pravatar.cc/40?img=44" alt="Allison Seris" />
                </div>
                <div class="message-content">
                  <div class="message-header">
                    <span class="sender-name">Allison Seris</span>
                    <span class="message-time">17 mins ago</span>
                  </div>
                  <p>A lo true, thank you very much. Now I can continue with my project</p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- Pagination indicator -->
      <div class="pagination-indicator">
        <div 
          v-for="i in 3" 
          :key="i" 
          :class="['indicator', { active: activeIndex === i - 1 }]"
          @click="goToSlide(i - 1)"
        ></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

// Data
const activeIndex = ref(0);
const swiperInstance = ref(null);

const frequentQuestions = ref([
  'How to modify schedules?',
  'Can a student have two agreements?',
  'How to modify the daily activities?',
  'How to modify the company data?',
  'How do I assign a student to a company?',
  'How to change the student\'s personal data?',
  'How to create a tutor?',
  'How to access the company\'s data?'
]);

// Methods
const setSwiperRef = (swiper) => {
  swiperInstance.value = swiper;
};

const handleSlideChange = () => {
  if (swiperInstance.value) {
    activeIndex.value = swiperInstance.value.activeIndex;
  }
};

const goToSlide = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(index);
  }
};

onMounted(() => {});
</script>

<style scoped>
/* Tabs Navigation */

.tituloh {
  text-align: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
}
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

/* Chat styles */
.chat-container {
  padding: 10px 15px;
}

.chat-message {
  display: flex;
  margin-bottom: 20px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  flex-shrink: 0;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.message-content {
  flex: 1;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 10px 15px;
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.sender-name {
  font-weight: 600;
  font-size: 14px;
}

.message-time {
  color: #888;
  font-size: 12px;
}

/* Pagination Indicator */
.pagination-indicator {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  width: 100%;
  z-index: 100;
}

.indicator {
  width: 30px;
  height: 4px;
  background-color: #ccc;
  margin: 0 5px;
  border-radius: 2px;
  cursor: pointer;
}

.indicator.active {
  background-color: #8c6ff7;
}

.custom-toolbar {
  --min-height: 80px; /* Ajusta la altura */
}

/* Nuevo fondo animado debajo del título HELP */
.gif-background {
  width: 100%;
  height: 200px; /* Ajusta la altura según necesidad */
  background-image: url('/nubes.gif'); /* Asegúrate de que la ruta sea correcta */
  background-size: cover;
  background-position: center;
  margin-bottom: 1rem;
}

.section-title {
  text-align: absolute;
  margin-left: 10px; /* Ajusta este valor para moverlo más o menos a la derecha */
  font-size: 20px;
  font-weight: bold;
}

/* Purple border at the top of each slide */
.swiper {
  border-top: 2px solid #8c6ff7;
}
</style>
