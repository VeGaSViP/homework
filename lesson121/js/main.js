(function () {
	// Бургер

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

	// Модалка

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

	// Табы

	const tabControls = document.querySelector('.tab-controls')

	tabControls.addEventListener('click', toggleTab)

	function toggleTab(e) {

		const tabControl = e.target.closest('.tab-controls__link')
		const tabID = tabControl.getAttribute('href')
		const tabContent = document.querySelector(tabID)
		const activeControl = document.querySelector('.tab-controls__link--active')
		const activeContent = document.querySelector('.tab-content--show')

		if (!tabControl) return
		e.preventDefault()
		if (tabControl.classList.contains('tab-controls__link--active')) return

		if (activeControl) {
			activeControl.classList.remove('tab-controls__link--active')
		}
		if (activeContent) {
			activeContent.classList.remove('tab-content--show')
		}

		tabControl.classList.add('tab-controls__link--active')
		tabContent.classList.add('tab-content--show')
	}

	// Аккордеон

	const accordionLists = document.querySelectorAll('.accordion-list')

	accordionLists.forEach(el => {

		el.addEventListener('click', (e) => {

			const accordionList = e.currentTarget
			const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
			const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
			const accordionControl = e.target.closest('.accordion-list__control')
			if (!accordionControl) return
			const accordionItem = accordionControl.parentElement
			const accordionContent = accordionControl.nextElementSibling

			if (accordionOpenedItem && accordionOpenedItem != accordionItem) {
				accordionOpenedItem.classList.remove('accordion-list__item--opened')
				accordionOpenedContent.style.maxHeight = null
			}
			accordionItem.classList.toggle('accordion-list__item--opened')

			if (accordionItem.classList.contains('accordion-list__item--opened')) {
				accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
			} else {
				accordionContent.style.maxHeight = null
			}
		})
	})

	// Слайдер-галерея

	const swiper = new Swiper('.gallery__slider', {

		spaceBetween: 15,
		slidesPerView: 1.5,

		pagination: {
			el: '.gallery__pagination',
			type: 'fraction'
		},

		navigation: {
			nextEl: '.gallery__next',
			prevEl: '.gallery__prev',
		},

		breakpoints: {
			451: {
				slidesPerView: 2,
			},
			601: {
				slidesPerView: 3,
			},
			801: {
				spaceBetween: 32
			},
			1101: {
				slidesPerView: 4,
			}
		}
	});

	// Слайдер-отзывы

	new Swiper('.testimonials__slider', {

		spaceBetween: 5,
		slidesPerView: 1,
		centeredSlides: true,

		navigation: {
			nextEl: '.testimonials__next',
			prevEl: '.testimonials__prev',
		},

		scrollbar: {
			el: '.testimonials__scrollbar',
		},

		breakpoints: {
			901: {
				slidesPerView: 1.5,
			},
			1201: {
				slidesPerView: 2,
			}
		}

	});

})()