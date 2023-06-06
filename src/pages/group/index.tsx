import Groups from '@/components/Group/GroupList';
import useGroup from '@/data/hooks/useGroup';

const PageGroup = () => {
	const {process, groups} = useGroup();

	return (
		<div className="flex justify-center items-center h-screen relative">
			{process ? <div>Processando...</div> : <Groups groups={groups} />}
		</div>
	);
};

export default PageGroup;
