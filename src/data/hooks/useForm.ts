import {useCallback, useState} from 'react';

// A utilização do Tipo <T> é uma opção generica, para ser aplicada na tipagem
// Essa função permite criar um estado de formulário com um valor inicial opcional
export default function useStateForm<T = any>(dataInitial?: T) {
	const [data, changeData] = useState<T>(dataInitial ?? ({} as T));

	// função reutilizável, changeAttributes, que gera manipuladores de eventos para atualizar atributos específicos do objeto data no estado do seu componente.
	const changeAttributes = useCallback(
		(attribute: string, fn?: Function) => {
			return (valueOrEvent: any) => {
				const v = valueOrEvent?.target?.value ?? valueOrEvent;
				changeData({...data, [attribute]: fn?.(v) ?? v});
			};
		},
		[data]
	);

	return {
		data,
		changeAttributes,
	};
}
