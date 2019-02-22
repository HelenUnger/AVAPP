import UserComponent from './UserComponent.js';

export default {
	template: `
	<div class="comp-container">
			<h1>{{ message }}</h1>

			<div class="users-container">
			<user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>     
			</div>

	</div>
	`,

	created: function() {
	  this.fetchAllUsers();
	},

	data() {
	  return {
		message: `Who's Using Roku?`,

		userList: []
	  }
	},

	methods: {
	  fetchAllUsers() {
		let url = `./admin/scripts/users.php?allusers=true`;

		fetch(url)
		  .then(res => res.json())
		  .then(data => {this.userList = data})
		.catch(function(error) {
		  console.error(error);
		});
	  }
	},

	components: {
		user: UserComponent
	}
}