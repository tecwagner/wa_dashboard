interface BodyProps {
	children: any;
	className?: string;
}

export default function Body(props: BodyProps) {
	return (
		<div className={`flex flex-col p-7 ${props.className ?? ''}`}>
			{props.children}
		</div>
	);
}
