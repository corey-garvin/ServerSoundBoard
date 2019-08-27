Vue.component('sound', {
    props: ['image'],
    template:  '<img class="play-button" :id="image.idTag" :src="image.img" />'
});

var app = new Vue({
    el: '#app',
    data: {
        imgList: [
            {id: 0, idTag: "peon", img: "img/peon.png"},
            {id: 1, idTag: "peasent", img: "img/peasant.png"}
        ],
        info: []
    },

    mounted() {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                console.log(response);
                for(var item in response) {
                    this.info.push(item);
                }
                console.log(this.info);
            });
    }
})
