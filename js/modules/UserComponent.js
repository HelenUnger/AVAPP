export default {
    props: ['liveuser'],

    template: `
    <div class="user">
        <div class="user-box" @click="navToUserHome()">
            <img :src="'images/' + liveuser.icon">
            <p>{{ liveuser.username }}</p>
        </div>
    </div>`,

    created: function() {
        if (this.liveuser.icon == null) {
            this.liveuser.icon = "blue.jpg";
        }
    },

    methods: {
        navToUserHome() {            
            this.$router.push({ name: "home", params: { currentuser: this.liveuser } });
            // set a localstorage session object so that we don't have to log back in on page refresh or after our initial login
            //localStorage.setItem("cachedUser", JSON.stringify(this.liveuser)); 
        }
    }
}