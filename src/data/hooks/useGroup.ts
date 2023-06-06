import {useCallback, useEffect, useState} from 'react';
import useProcessing from './useProcessing';

const useGroup = () => {
	const {process, initProcessing, finishProcessing} = useProcessing();
	const [groups, setGroups] = useState<any[]>([]);

	const getGroups = useCallback(
		async function () {
			try {
				initProcessing();
				const resp = await fetch('/api/group/groups');
				const data = resp.json();
				setGroups(await data);
			} finally {
				finishProcessing();
			}
		},
		[initProcessing, finishProcessing]
	);

	useEffect(() => {
		getGroups();
	}, [getGroups]);

	return {
		process,
		groups,
	};
};

export default useGroup;
