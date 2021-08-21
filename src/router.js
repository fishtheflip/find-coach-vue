import {createRouter, createWebHistory} from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/request/ContactCoach.vue'
import RequestCoach from './pages/request/RequestCoach.vue'
import NotFound from './pages/NotFound.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {path: '/coaches/:id', component: CoachDetail, 
            children: [ 
                {path: '/contact', component: ContactCoach}
            ] },
        {path: '/register', component:CoachRegistration},
        {path: '/request', component:RequestCoach},
        {path: '/:notFound(.*)', component:NotFound},
    ]
});

export default router;