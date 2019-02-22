
    //import components
    //exaclty like php include

    import LoginComponent from './modules/LoginComponent.js';
    import UsersComponent from './modules/UsersComponent.js';
    import UserHomeComponent from './modules/UserHomeComponent';
    import UserMovieComponent from './modules/UserMovieComponent';
    import WatchComponent from './modules/WatchComponent';

    const routes = [
        {path: '/', redirect: {name: 'login'} },
        {path: '/login', name: 'login', component: LoginComponent },
        {path: '/users', name: 'users', component: UsersComponent },
        {path: '/home', name: "home", component: UserHomeComponent, props: true },
        {path: '/movies', name: "movies", component: UserMovieComponent, props: true },
        {path: '/watch', name: "watch", component: WatchComponent, props: true}
    ]

    const router = new VueRouter({
        routes
    });

    //then your vue instance
    const vm = new Vue({
        data: {
            testmessage: "sup",
            navTrue: false,
            auth: false,
            admin: false,
            currentuser: []
        },

        created: function(){
            //  // do a session check and set authenticated to true if the session still exists
            // // if the cached user exists, then just navigate to their user home page

            // // the localstorage session will persist until logout

            // if (localStorage.getItem("cachedUser")) {
            //     let user = JSON.parse(localStorage.getItem("cachedUser"));
            //     this.auth = true;
        
            //     this.$router.push({ name: "home", params: { currentuser: user }});
            // }
        
            // // NOTE -> change this on login to localstorate session instead
        },

        methods: {
            setAuth(status){
                this.auth = status;
            },

            logOut() {
                this.$router.push({ path: '/login' });
                this.auth = false;
            },

            toggleNav(){
                this.navTrue = (!this.navTrue) ? true : false;
            }
        },

        
        created: function(){
            console.log('vm says hi');
        },

        // components: {
        //     'logincomponent' : LoginComponent,
        // },

        router: router

    }).$mount("#app");

router.beforeEach((to, from, next)=> {
    console.log('router guard fired!' , vm.auth);

    if(vm.auth == false){
        next("/login");
    }else{
        next();
    }
});