//nav btn

const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-ico");
const nav = document.querySelector(".header_nav");
const navLinks = document.querySelectorAll(".header_nav_link");

navBtn.onclick = function () {
	navIcon.classList.toggle("nav-ico-active"); /* on click change nav button on cancel button X */
	nav.classList.toggle("header_nav-mobile"); /* on click add mobile navigation */
	document.body.classList.toggle("no-scroll"); /* on click add class no scroll */
};

navLinks.forEach((link) => {
	link.addEventListener("click", function (event) {
		// Отменяем стандартное поведение ссылки
		event.preventDefault();

		navIcon.classList.remove("nav-ico-active");
		nav.classList.remove("header_nav-mobile");
		document.body.classList.remove("no-scroll");

		// Получаем href атрибут ссылки и переходим по нему через некоторую задержку (например, 500 миллисекунд)
		const href = link.getAttribute("href");
		setTimeout(() => {
			window.location.href = href;
		}, 500);
	});
});

//map - ТЕСТИРУЮ ИЗМЕНЕНИЯ

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);


function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [59.943543, 30.338928],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 18,
	});

	//map mark
	var myPlacemark = new ymaps.Placemark(
		[59.943543, 30.338928],
		{
			/* balloncontent */
			balloonContent: `
                <div class="balloon">
                        <div class="baloon_adres">Наб. реки Фонтанки 10-15</div>
                        <div class="baloon_contacts">
                            <a href="tel:+78121234567">8 (812) 123-45-67</a>
                        </div>
                </div>
                `,
		},
		{
			iconLayout: "default#image",
			iconImageHref: "./img/map/map-mark.svg",
			icon_imagesize: [40, 40],
			iconImageOffset: [-20, -40],
		}
	);
	//add custon mark
	myMap.geoObjects.add(myPlacemark);
	myPlacemark.balloon.open();
}

//smooth links

var smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < smoothScrollLinks.length; i++) {
	smoothScrollLinks[i].addEventListener("click", function (e) {
		e.preventDefault();

		var target = this.getAttribute("href");
		var targetElement = document.querySelector(target);

		targetElement.scrollIntoView({
			behavior: "smooth",
		});
	});
}

//В данном примере, мы используем JavaScript для привязки обработчика событий click к каждой ссылке, начинающейся с символа #. Внутри обработчика, мы предотвращаем действие по умолчанию при клике на ссылку (переход по якорной ссылке) с помощью e.preventDefault(). Затем мы получаем цель ссылки с помощью this.getAttribute(), и затем используем document.querySelector() для получения элемента
