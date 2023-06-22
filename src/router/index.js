import {createRouter,createWebHistory} from 'vue-router'
import homeView from '../views/homeView.vue'
import question from '../views/QuestionView.vue'

const route = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            component:homeView

        },
        {
            path:"/questions/:id",
            component:question
        }
    ]
})


export default route;