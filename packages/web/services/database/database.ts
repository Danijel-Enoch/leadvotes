import { database } from "./setup";

export const getDBRootRef = () => database.root;

export const getDBRef = (path: string) => database.ref(path);

export async function readData(path: string) {
	const dbRef = getDBRef(path);
	return dbRef.get();
}

export async function writeData(path: string, data: {}) {
	const dbRef = getDBRef(path);
	return dbRef.set(data);
}

export async function updateData(updates: { string: {} }) {
	const update = [];
	for (const [path, value] of Object.entries(updates)) {
		update.push(getDBRef(path).set(value));
	}
	return Promise.all(update);
}

export async function increment(
	path: string,
	count: number,
	allowNegative = false
) {
	const ref = getDBRef(path);
	return ref.transaction((snapshot) => {
		if (!snapshot.exists()) return count;

		let currentVal = snapshot.val() | 0;
		currentVal += count;
		if (currentVal < 0 && !allowNegative) currentVal = 0;

		return currentVal;
	});
}

export async function deleteData(path: string) {
	return getDBRef(path).remove();
}

export async function createDataIfNotExists(
	path: string,
	object: {},
	cb: Function
) {
	const data = await readData(path);
	if (!data.exists()) {
		await writeData(path, object);
		await cb?.();
	} else {
		return data.val();
	}
}
