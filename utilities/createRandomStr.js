export default function () {
	const length = 8
	const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
	let result = ''
	for (let i = 0; i < length; i++) {
		result += characters[Math.floor(Math.random() * characters.length)]
	}
	return result
}

// https://qiita.com/ryounagaoka/items/4736c225bdd86a74d59c
