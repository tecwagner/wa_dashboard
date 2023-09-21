import React from 'react';

interface TitlePageProps {
	mainTitle: string;
	icone?: any;
	subTitle?: string;
	className?: string;
}

export default function TitlePage(props: TitlePageProps) {
	return (
		<div className={`flex items-center gap-2 ${props.className ?? ''}`}>
			{props.icone && (
				<div
					className={`
                    text-zinc-500
                `}
				>
					{React.cloneElement(props.icone, {
						stroke: 1,
						size: props.subTitle ? 50 : 24,
					})}
				</div>
			)}
			<div className="flex flex-col text-zinc-500">
				<h1 className="text-2xl font-black">{props.mainTitle}</h1>
				{props.subTitle && (
					<h2 className="text-sm font-thin -mt-1">{props.subTitle}</h2>
				)}
			</div>
		</div>
	);
}
