export default {
	template: `
	<div class="comp-container">

			<p class="addNew" v-on:click="newUser()">New User</p>


			<div class="edit">
			<h3> Current Users </h3>
			<div class="users-container">
				<div class="user" v-for="user in userList">
					<img :src="'images/' + user.icon">
					<p>{{user.username}}</p>
					<div v-on:click="editUser(user.id)" title="edit user">
					<i class="far fa-edit"></i>
					</div>
					<div v-on:click="deleteUser(user.id)" title="delete user">
					<i class="fas fa-trash-alt"></i>
					</div>
				</div>     
			</div>
			</div>

	</div>
	`,

	created: function() {
		this.fetchAllUsers();
	},

	data() {
	  return {
		message: 'Which user would you like to edit?',

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
  	},
      
		editUser(id){
			this.$router.push({ name: "edit", params: { userID: id } });
		},

		newUser(){
			this.$router.push({ name: "new" });
		},

		deleteUser(id){
			let url =  `./admin/admin_deleteuser.php`;
				const formData = new FormData();

				formData.append("id", id);

				fetch(url, {
						method: 'POST',
						body: formData
				})
				.then(res=>res.json())
				.then(data =>{
						if ( data != "success"){
								console.warn(data);
								console.log('delete failed');
								return;
						}else{
							console.log('delete success');
							this.fetchAllUsers();
						}
				})
				.catch(function(error){
						console.log(error);
				});
		}

	}
}