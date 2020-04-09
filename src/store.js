import Vue from "vue";
import Vuex from "vuex";

const state = {
    specials : [
        {
            image: "/img/special-1.jpg",
            text: "เทศกาล Work from home สั่งกลับบ้านลด 50%"
        },
        {
            image: "/img/special-2.jpg",
            text: "เทศกาล Work from home สั่งกลับบ้านลด 50%"
        },
        {
            image: "/img/special-3.jpg",
            text: "เทศกาล Work from home สั่งกลับบ้านลด 50%"
        }
    ],
    menus: [
        {
            image: "/img/menu-1.jpg",
            text: "คาปูชิโนร้อน",
            price: 45,
            love: false
        },
        {
            image: "/img/menu-2.jpg",
            text: "ลาเต้ร้อน",
            price: 45,
            love: true
        },
        {
            image: "/img/menu-3.jpg",
            text: "เอเพรซโซ",
            price: 40,
            love: false
        },
        {
            image: "/img/menu-4.jpg",
            text: "ชาร้อน",
            price: 35,
            love: false
        },
        {
            image: "/img/menu-5.jpg",
            text: "นมเย็น",
            price: 40,
            love: false
        },
        {
            image: "/img/menu-6.jpg",
            text: "ชาเขียวเย็น",
            price: 40,
            love: false
        }
    ]
};

const getters = {
    specials(state) {
        return state.specials;
    },
    menus(state) {
        return state.menus;
    }
}

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters
});

export default store;