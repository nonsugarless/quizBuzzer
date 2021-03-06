import firebase from 'firebase/app'
import 'firebase/database'

const config = {
	apiKey: process.env.FB_API_KEY,
	authDomain: process.env.FB_AUTH_DOMAIN,
	databaseURL: process.env.FB_DATABASE_URL,
	projectId: process.env.FB_PROJECTID,
	storageBucket: process.env.FB_STORAGE_BUCKET,
	messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
	appId: process.env.FB_APP_ID,
}

export const firebaseApp = !firebase.apps.length
	? firebase.initializeApp(config)
	: firebase.app()
export const db = firebaseApp.database()
