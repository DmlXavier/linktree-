// Dark/light mode
const body = document.querySelector('body')
const button = document.querySelector('#toggle-button')
const img = document.querySelector('#profile-picture')

function toggleMode() {
	// Switches from light to dark
	if (body.classList.contains('dark')) {
		body.classList.remove('dark')
		localStorage.setItem('theme', 'light')
	} else {
		body.classList.add('dark')
		localStorage.setItem('theme', 'dark')
	}

	// Changes the profile picture
	if (body.classList.contains('dark')) {
		img.setAttribute('src', './assets/profile-darkmode.jpg')
	} else {
		img.setAttribute('src', './assets/profile-lightmode.jpg')
	}
}

// Prevents theme switching after refresh
if (localStorage.getItem('theme') === 'dark') {
	body.classList.add('dark')
	img.setAttribute('src', './assets/profile-darkmode.jpg')
}