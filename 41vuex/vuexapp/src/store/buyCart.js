export default {
    namespaced: true,
    state: {
        productNum: 10,
    },
    getters: {
        brief: function (state) {
            return state.productNum + '件衣服';
        }
    },
    mutations: {
        addProNum(state) {
            state.productNum++;
        }
    },
    actions: {
        changeProNum(content) {
            setTimeout(() => {
                content.commit('addProNum');
            }, 1000);
        }

    }
}