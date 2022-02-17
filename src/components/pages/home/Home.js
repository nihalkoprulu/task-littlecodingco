import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Header } from "components/organisms/header/Header";
import { UserList } from "components/organisms/userList/UserList";
import { SearchBar } from "components/molecules/searchBar/SearchBar";

import { getRandomUser } from "api/user";

function Home() {
	const [users, setUsers] = useState([]);
	const [rawUsers, setRawUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(0);

	/* Fetch From Api */
	useEffect(() => {
		fetchData({ page, results: 10 });
	}, []);

	function fetchData({ page, results = 10 }) {
		getRandomUser({ page, results })
			.then((response) => {
				if(page === 0){
					setUsers(response.results);
					setRawUsers(response.results);
				}else{
					setUsers([ ...users, ...response.results ]);
					setRawUsers([ ...users, ...response.results ]);
				}
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}

	/* Search */
	function onSearch(searchTerm) {
		const keyword = searchTerm.toLowerCase();

		let result = users.filter((user) => {
			const {
				name: { first, last },
				dob: { age },
			} = user;
			return (
				age.toString().includes(keyword) ||
				first.toLowerCase().includes(keyword) ||
				last.toLowerCase().includes(keyword)
			);
		});

		if (searchTerm.length > 1) {
			return setUsers(result);
		} else {
			return setUsers(rawUsers);
		}
	}

	/* Remove user by id */
	function onRemove(id) {
		var c = window.confirm("Are you sure");
		if (c) {
			setUsers(users.filter((user) => user.id.value !== id));
		}
	}

	function onLoadMore() {
		setPage(page + 1);
		fetchData({ page: page + 1 });
	}

	return (
		<section className="Home">
			<Header />
			{!loading && <SearchBar onSearch={onSearch} />}
			<UserList
				users={users}
				loading={loading}
				onRemove={onRemove}
				onLoadMore={onLoadMore}
			/>
		</section>
	);
}

export default Home;
