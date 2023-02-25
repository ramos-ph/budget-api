export type CategoryProps = {
	id: string;
	name: string;
	description?: string;
	monthly_limit: number;
};

export type Category = {
	id: string;
	name: string;
	description?: string;
	monthly_limit: number;
	date: Date;
};

export const create = (props: CategoryProps): Category => {
	return {
		id: props.id,
		name: props.name,
		description: props.description,
		monthly_limit: props.monthly_limit,
		date: new Date(),
	};
};

export type CategoryCollection = Category[];
