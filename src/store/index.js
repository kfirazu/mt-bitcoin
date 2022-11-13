import { createStore } from "vuex";
import contact from './modules/contact.js'
import user from './modules/user.js'


const storeOptions = {
    strict: true,
    state() {
        return {

        }
    },
    modules: {
        contact,
        user,
    }
}

const store = createStore(storeOptions)
export default store