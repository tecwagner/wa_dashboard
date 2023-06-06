import {useCallback, useState} from 'react';

export default function useProcessing() {
	const [process, setProcess] = useState<boolean>(false);

	const initProcessing = useCallback(function () {
		setProcess(true);
	}, []);

	const finishProcessing = useCallback(function () {
		setProcess(false);
	}, []);

	return {
		process,
		initProcessing,
		finishProcessing,
	};
}
