import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);
	// usersList = [
	// 	{ username: 'Vlad', age: 26 },
	// 	{ username: 'Nastassia', age: 24 },
	// ];
	const addUserHandler = (uName, uAge) => {
		setUsersList(() => [
			...usersList,
			{ username: uName, age: uAge, id: Math.random().toString() },
		]);
	};

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
