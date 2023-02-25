export type TransactionProps = {
	id: string;
	category_id: string;
	title: string;
	description?: string;
	value: number;
	type: "IN" | "OUT";
	attached_photo?: string;
};

export type Transaction = {
	id: string;
	category_id: string;
	title: string;
	description?: string;
	value: number;
	type: "IN" | "OUT";
	attached_photo?: string;
	date: Date;
};

export const create = (props: TransactionProps): Transaction => {
	return {
		id: props.id,
		category_id: props.category_id,
		title: props.title,
		description: props.description,
		value: props.value,
		type: props.type,
		attached_photo: props.attached_photo,
		date: new Date(),
	};
};

export type TransactionCollection = Transaction[];
