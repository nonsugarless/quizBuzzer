import { db } from '@/plugins/firebase'

const respondentRef = db.ref('/quiz-state/respondent-id')

export function postQuiz(val) {
	return new Promise((resolve) => {
		respondentRef
			// eslint-disable-next-line consistent-return
			.transaction((post) => {
				if (!post) return val
			})
			.then(() => {
				resolve()
			})
			.catch(() => {
				resolve()
			})
	})
}

export function respondentObserver(callback) {
	respondentRef.on('value', (snapshot) => {
		callback(snapshot.val())
	})
}

export function resetBtn() {
	respondentRef.set('')
}

const currentQuizRef = db.ref('/quiz-state/current-quiz')

export function changeQuiz(val) {
	currentQuizRef.set(val)
}

export function currentQuizObserver(callback) {
	currentQuizRef.on('value', (snapshot) => {
		callback(snapshot.val() === null ? 0 : snapshot.val())
	})
}
