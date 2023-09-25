// import { Autocomplete } from '@mantine/core';
// import { IconSearch } from '@tabler/icons-react';
// import React, {useState} from 'react';

// export default function SearchBar({onSearch}) {
// 	const [searchTerm, setSearchTerm] = useState('');

// 	const handleSearchChange = (event) => {
// 		const newSearchTerm = event.target.value;
// 		setSearchTerm(newSearchTerm);
// 		// Realize a pesquisa aqui ou chame uma função de pesquisa
// 		// para obter os resultados e passe-os ao componente pai
// 		onSearch(newSearchTerm);
// 	};

// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				placeholder="Digite sua pesquisa..."
// 				value={searchTerm}
// 				onChange={handleSearchChange}
//             />
//             <div className={`flex justify-between gap-4 `}>
// 						<IconSearch size={35} />
// 						<Autocomplete
// 							placeholder="Digite sua pesquisa..."
// 							onChange={handleSearchChange}
// 							value={searchTerm}
// 							data={[]}
// 						/>
// 					</div>
// 		</div>
// 	);
// }
