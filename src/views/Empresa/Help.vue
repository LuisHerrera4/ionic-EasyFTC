<template>
  <ion-page>
    <ion-content>
      <div class="help-container">
        <!-- Header con navegación -->
        <div class="help-header">
          <h1>HELP</h1>
        </div>

        <!-- Navigation Tabs -->
        <div class="nav-tabs">
          <router-link to="/empresa/Inicio" class="tab-button" active-class="active">
            <img src="/paper.png" alt="Offers" class="tab-icon" />
            <span>Offers</span>
          </router-link>

          <router-link to="/empresa/Estudiantes" class="tab-button" active-class="active">
            <img src="/users.png" alt="Students" class="tab-icon" />
            <span>Students</span>
          </router-link>

          <router-link to="/empresa/Help" class="tab-button active" active-class="active">
            <img src="/question.png" alt="Help" class="tab-icon" />
            <span>Help</span>
          </router-link>
        </div>

        <swiper
          :slides-per-view="1"
          :space-between="0"
          @swiper="setSwiperRef"
          @slideChange="handleSlideChange"
        >
          <!-- Help Section (Frequently Asked Questions) -->
          <swiper-slide>
            <div class="slide-content">
              <h2 class="section-title">Help - Frequently Asked Questions</h2>
              <ion-list lines="full">
                <ion-item v-for="(question, index) in frequentQuestions" :key="index">
                  <ion-label>{{ question }}</ion-label>
                </ion-item>
              </ion-list>
            </div>
          </swiper-slide>

          <!-- Support Hours -->
          <swiper-slide>
            <div class="slide-content">
              <h2 class="section-title">Support Hours</h2>
              <ion-list lines="full">
                <ion-item>
                  <ion-label>
                    <h2>9:00 AM - 1:00 PM</h2>
                    <p>Tickets Assistance</p>
                  </ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>
                    <h2>10:00 AM - 11:00 AM</h2>
                    <p>Schedule Updates</p>
                  </ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>
                    <h2>8:00 AM - 2:00 PM</h2>
                    <p>Practice Support</p>
                  </ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>
                    <h2>7:00 PM - 8:30 PM</h2>
                    <p>Professor Calls</p>
                  </ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>
                    <h2>8:00 AM - 2:00 PM</h2>
                    <p>Company Calls</p>
                  </ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>
                    <h2>4:00 PM - 7:00 PM</h2>
                    <p>Live Chat with an Agent</p>
                  </ion-label>
                </ion-item>
              </ion-list>
            </div>
          </swiper-slide>

          <!-- Chat with an Agent -->
          <swiper-slide>
            <div class="slide-content">
              <h2 class="section-title">Chat with an Agent</h2>
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
                    <p>Hi, Tiana I have a big! problem, I don't know how to create a variant. Can you help me?</p>
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
                    <p>Hi, in the variant section you have an option to create the component and then add a new variant.</p>
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
                    <p>Oh true, thank you very much. Now I can continue with my project.</p>
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
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IonPage, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

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
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700&display=swap');

* {
  font-family: 'Lexend', sans-serif;
}

.help-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9fafb;
  touch-action: pan-y; /* Permite el swipe horizontal */
  overflow: hidden; /* Evita scroll conflicts */
}

.help-header {
  background: url('/nubes.gif') center/cover no-repeat; 
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.help-header h1 {
  color: white;
  font-size: 2.2rem;
  font-weight: bold;
}

/* Navigation Tabs */
.nav-tabs {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.25rem;
  font-weight: 500;
  color: #666;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 0.375rem;
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

/* Content */
.slide-content {
  padding: 1.5rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
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

/* Purple border at the top of each slide */
.swiper {
  border-top: 2px solid #8c6ff7;
  touch-action: pan-x; /* Permite swipe horizontal específicamente */
  width: 100%;
  height: auto;
}
</style>