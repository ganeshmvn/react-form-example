import React from "react";

export default class Form extends React.Component {
	state = {
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
	};

	change = (e) => {
		const { name, value } = e.target;
		this.props.onChange({ [name]: value });
		this.setState({
			[name]: value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.setState({
			firstName: "",
			lastName: "",
			username: "",
			email: "",
			password: "",
		});
		this.props.onChange({
			firstName: "",
			lastName: "",
			username: "",
			email: "",
			password: "",
		});
	};

	render() {
		return (
			<form>
				<h3>Regitration form</h3>
				<input
					name="firstName"
					placeholder="First name"
					value={this.state.firstName}
					onChange={(e) => this.change(e)}
				/>
				<br />
				<input
					name="lastName"
					placeholder="Last name"
					value={this.state.lastName}
					onChange={(e) => this.change(e)}
				/>
				<br />
				<input
					name="username"
					placeholder="Username"
					value={this.state.username}
					onChange={(e) => this.change(e)}
				/>
				<br />
				<input
					name="email"
					placeholder="Email"
					value={this.state.email}
					onChange={(e) => this.change(e)}
				/>
				<br />
				<input
					name="password"
					type="password"
					placeholder="Password"
					value={this.state.password}
					onChange={(e) => this.change(e)}
				/>
				<br />
				<br />
				<button onClick={(e) => this.onSubmit(e)}>Submit</button>
			</form>
		);
	}
}
