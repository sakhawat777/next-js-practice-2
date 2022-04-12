import React from 'react';
// First load data then render html
// export async function getStaticProps() {
export const getStaticProps = async () => {
	const res = await fetch('https://restcountries.com/v3.1/all');
	const data = await res.json();
	return {
		props: { countryList: data },
	};
};

const index = ({ countryList }) => {
	return (
		<div>
			<h1>All Counties</h1>
			{countryList.map((countryList) => (
				<div>
					<a>
						<h3>{countryList.name.common}</h3>
					</a>
				</div>
			))}
		</div>
	);
};

export default index;
