export default {
    props: ['currentuser'],

    template: `
    <div class="container">
        <h2 v-if="currentuser">{{message}} {{currentuser.username}}</h2>
    </div>
    `,

    data() {
        return {
            message: "Welcome"
        }
    },

    created: function() {
        console.log('params:', this.$route.params);
        if (this.currentuser.admin == 1){
            this.$parent.admin = true;
        }else{
            this.$parent.admin = false;
        }

        this.$parent.currentuser = this.currentuser;
    },

    methods: {
        logClicked(e) {
            console.log("trying shorthand click");
            this.vidActive = !this.vidActive;

            let vid = document.querySelector('video');
            vid.muted = !vid.muted;
        }
    }
}