Vue.component('sound', {
    props: ['image'],
    template:  '<img class="play-button" :id="image.idTag" :src="image.img" />'
});

var app = new Vue({
    el: '#container',
    data: {
        imgList: [
            {id: 0, idTag: "peon", img: "img/peon.png", file: "/sounds/acknowledge1.wav"},
            {id: 1, idTag: "peasent", img: "img/peasant.png"}
        ],
        info: []
    },
    methods: {
        playSound: function() {
            axios.post('/play', {
                body: this.imgList[0],
                headers:{'Content-Type': 'application/json'}
            });
        }
    },
    mounted() {
        const instance = axios.create({
            baseURL: "http://localhost:3000",
            headers:{'Content-Type': 'application/json'}
        });

        instance.post('/import', {
            url: "http://www.thanatosrealms.com/war2/sounds/orcs/basic-orc-voices/acknowledge1.wav",
            path: "/sounds"
        });
    }
})
