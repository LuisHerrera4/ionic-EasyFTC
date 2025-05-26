import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';

// Importar las vistas correspondientes
import EmpresaInicio from '../views/Login/Empresa/Inicio.vue';
import ProfesorInicio from '../views/Login/Profesor/Inicio.vue';
import AdminLogin from '../views/Login/Admin/Login.vue';

// Importar las vistas de Login y Register


import EmpresaLogin from '../views/Login/Empresa/Login.vue';
import EmpresaRegister from '../views/Login/Empresa/Register.vue';

import ProfesorLogin from '../views/Login/Profesor/Login.vue';
import ProfesorRegister from '../views/Login/Profesor/Register.vue';

//Imports Inicio Sesion Facebook,Google y Apple
import FacebookLogin from '../views/Login/Empresa/Facebook.vue'
import GoogleLogin from '../views/Login/Empresa/Google.vue'
import AppleLogin from '../views/Login/Empresa/Apple.vue'

import FacebookLoginProfesor from '../views/Login/Profesor/Facebook.vue'
import GoogleLoginProfesor from '../views/Login/Profesor/Google.vue'
import AppleLoginProfesor from '../views/Login/Profesor/Apple.vue'



//Imports Pantallas Empresa
import InicioEmpresa from '../views/Empresa/Inicio.vue'
import pantallaEstudiantes from '../views/Empresa/Estudiantes.vue'
import pantallaHelp from '../views/Empresa/Help.vue'

//Imports Pantallas Profesor
import pantallaOfertas from '../views/Profesor/Ofertas.vue'
import pantallaDetalles from '../views/Profesor/detallesOfertas.vue'
import pantallaAreaContacto from '../views/Profesor/areaContacto.vue'
import pantallaEstudiantesP from '../views/Profesor/Estudiantes.vue'
import pantallaDatosEstudiantes from '../views/Profesor/datosAlumno.vue'


//imports Pantallas Admin
import pantallaAdministrarCuentas from '../views/Admin/AdministrarCuentas.vue'
import pantallaManejoEmpresa from '../views/Admin/manejoEmpresa.vue'
import pantallaManejoEmpresaOfertas from '../views/Admin/manejoOfertasEmpresa.vue'
import pantallaManejoProfesor from '../views/Admin/manejoProfesor.vue'
import manejoProfesorAlumnos from '../views/Admin/manejoProfesorAlumnos.vue'
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import Ofertas from '../views/Profesor/Ofertas.vue';
import OfertasE from '../views/Empresa/OfertasE.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login/empresa/inicio',
    name: 'EmpresaInicio',
    component: EmpresaInicio
  },
  {
    path: '/login/profesor/inicio',
    name: 'ProfesorInicio',
    component: ProfesorInicio
  },

  {
    path: '/login/admin/inicio',
    name: 'AdminLogin',
    component: AdminLogin
  },
  //Rutas Facebook, Google y Apple

  //Empresa
  {
    path: '/login/empresa/Facebook',
    name: 'FacebookLogin',
    component: FacebookLogin
  },
  {
    path: '/login/empresa/Google',
    name: 'GoogleLogin',
    component: GoogleLogin
  },
  {
    path: '/login/empresa/Apple',
    name: 'AppleLogin',
    component: AppleLogin 
  },
  //Profesor
  {
    path: '/login/profesor/Facebook',
    name: 'FacebookLoginProfesor',
    component: FacebookLoginProfesor
  },
  {
    path: '/login/profesor/Google',
    name: 'GoogleLoginProfesor',
    component: GoogleLoginProfesor
  },
  {
    path: '/login/profesor/Apple',
    name: 'AppleLoginProfesor',
    component: AppleLoginProfesor
  },

  // Rutas para Empresas
  {
    path: '/login/empresa/login',
    name: 'EmpresaLogin',
    component: EmpresaLogin
  },
  {
    path: '/login/empresa/register',
    name: 'EmpresaRegister',
    component: EmpresaRegister
  },

  // Rutas para Profesores
  {
    path: '/login/profesor/login',
    name: 'ProfesorLogin',
    component: ProfesorLogin
  },
  {
    path: '/login/profesor/register',
    name: 'ProfesorRegister',
    component: ProfesorRegister
  },

  //Rutas empresa
  {
    path: '/empresa/Inicio',
    name: 'InicioEmpresa',
    component: InicioEmpresa
  },

  {
    path: '/empresa/Estudiantes',
    name: 'pantallaEstudiantes',
    component: pantallaEstudiantes
  },

  {
    path: '/empresa/Help',
    name: 'pantallaHelp',
    component: pantallaHelp
  },

  //Rutas profesor

  {
    path: '/profesor/ofertas',
    name: 'pantallaOfertas',
    component: pantallaOfertas
  },
  {
    path: '/profesor/detalles',
    name: 'pantallaDetalles',
    component: pantallaDetalles
  },
  {
    path: '/profesor/areaContacto',
    name: 'pantallaAreaContacto',
    component: pantallaAreaContacto
  },
  {
    path: '/profesor/estudiantes',
    name: 'pantallaEstudiantesP',
    component: pantallaEstudiantesP

  },
  {
    path: '/profesor/datosEstudiantes',
    name: 'pantallaDatosEstudiantes',
    component: pantallaDatosEstudiantes
  },

  //Rutas Amdin
  {
    path: '/admin/administrarCuentas',
    name: 'pantallaAdministrarCuentas',
    component: pantallaAdministrarCuentas
  },
  {
    path: '/admin/manejoEmpresa',
    name: 'pantallaManejoEmpresa',
    component: pantallaManejoEmpresa
  },
  {
    path: '/admin/manejoEmpresaOfertas',
    name: 'pantallaManejoEmpresaOfertas',
    component: pantallaManejoEmpresaOfertas
  },  
  {
    path: '/admin/manejoProfesor',
    name: 'pantallaManejoProfesor',
    component: pantallaManejoProfesor
  },  
  {
    path: '/admin/manejoProfesorAlumnos',
    name: 'manejoProfesorAlumnos',
    component: manejoProfesorAlumnos
  },
  {
    path: '/empresa/OfertasE',
    name: 'ofertase',
    component: OfertasE
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
