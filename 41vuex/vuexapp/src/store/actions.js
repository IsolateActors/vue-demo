export default {
    setDz: function (content) {
        let httpUrl = `https://api.apiopen.top/getJoke?page=1&count=10&type=text`;
        fetch(httpUrl).then(res => res.json()).then(res => {
            console.log(res);
            console.log(content)
            //通过mutation设置state
            content.commit('setDuanzi', res.result)
        });
    }
}