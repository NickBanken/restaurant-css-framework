$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});

var dataReload = document.querySelectorAll('[data-reload]');

var language = {
	eng: {
		deliverytime: "Most delicious pizza's &lt;br /> Hot delivery within 30mins!";
	},
	fr: {
		deliverytime: 'GetRekt'
	}
};

if (window.location.hash) {
	if (window.location.hash === '#fr') {
		deliverytime.textContent = language.fr.deliverytime;
	} else {
		deliverytime.textContent = language.eng.deliverytime;
	}
}

for (i = 0; i <= dataReload.length; i++) {
	dataReload[i].onclick = function() {
		location.reload(true);
	};
}
