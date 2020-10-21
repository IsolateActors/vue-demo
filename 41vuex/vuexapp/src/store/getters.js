export default {
    reverseMsg: function (state) {
        return state.msg.split('').reverse().join('');
    },
    mixinMsg: function (state) {
        return function (val) {
            return val + state.msg;
        }
    }
}