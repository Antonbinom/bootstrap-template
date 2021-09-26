$(function () {

	baguetteBox.run('.gallery');

	$(window).on('load', function () {
		$('.preloader').delay(500).fadeOut('slow');
	});

	$(window).scroll(function () { // При прокрутке страницы вниз
		if ($(this).scrollTop() > 300) { // высота отступа более 300px
			$('.scrollToTop').fadeIn(); // кнопка становится видна
		} else { // иначе
			$('.scrollToTop').fadeOut(); // скрыта
		}
	});

	$('.scrollToTop').click(function () { // при нажатии на кнопку
		$('html, body').animate({ // происходит анимация
			scrollTop: 0 // прокручивающая страницу на отметку 0
		}, 800); // в течении 800мс
		return false; // отмена стандартного поведения
	});
});