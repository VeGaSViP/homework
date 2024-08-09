(function () {
	document.addEventListener('click', burgerInit)

	function burgerInit(e) {
		const burgerIcon = e.target.closest('.burger-icon')
		const burgerNavLink = e.target.closest('.header__list-link')

		if (!burgerIcon && !burgerNavLink) return
		if (document.documentElement.clientWidth > 900) return

		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else {
			document.body.classList.remove('body--opened-menu')
		}
	}

	document.addEventListener('click', modalInit)

	function modalInit(e) {
		const modalButton = e.target.closest('.about__img-button')
		const modalCancel = e.target.closest('.modal__cancel')
		const modalSubmit = e.target.closest('.modal__btn')
		const modal = document.querySelector('.modal')

		if (modalButton || modalCancel || modalSubmit) {
			e.preventDefault()
		}

		if (e.target.contains(modal)) {
			document.body.classList.remove('body--opened-modal')
		}

		if (!modalButton && !modalCancel) return

		if (!document.body.classList.contains('body--opened-modal')) {
			document.body.classList.add('body--opened-modal')
		} else {
			document.body.classList.remove('body--opened-modal')
		}
	}
})()