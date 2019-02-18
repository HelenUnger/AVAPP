
    //import components
    //exaclty like php include

    import LoginComponent from '../js/modules/LoginComponent.js';
    import UsersComponent from '../js/modules/UsersComponent.js';

    const routes = [
        {path: '/', redirect: {name: 'login'} },
        {path: '/login', name: 'login', component: LoginComponent },
        {path: '/users', name: 'users', component: UsersComponent }
    ]

    const router = new VueRouter({
        routes
    });

    //then your vue instance
    const vm = new Vue({
        data: {
            testmessage: "sup",
            auth: false,
            fakeAccount: {
                username: "user",
                password: "pass"
            }
        },

        methods: {
            calledOnParent(){
                console.log("this method lives in the main VM and was called from a component");
            },

            setAuth(status){
                this.auth = status;
            },

            logOut() {
                this.$router.push({ path: '/login' });
                this.auth = false;
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