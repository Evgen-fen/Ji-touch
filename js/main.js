let position = 0;
let slidesToShow = 1;
let slidesToScroll = 1;

let container = document.querySelector('.slider');
let track = document.querySelector('.track');
let items = document.querySelectorAll('.slider-item');
let btnNext = document.querySelector('.btn_next');
let btnPrev = document.querySelector('.btn_prev');
let itemWidth = track.clientWidth / slidesToShow;
let itemsCount = items.length;
let movePosition = slidesToScroll * itemWidth;

items.forEach((el) => {
	el.style.minWidth = `${itemWidth}px`;
});


let setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
};

let checkBtns = () => {
	btnNext.disabled = position === -((itemsCount * itemWidth) - (itemWidth * slidesToShow));
	btnPrev.disabled = position === 0;
}


btnPrev.addEventListener('click', () => {
	position += movePosition;

	setPosition();
	checkBtns();
});

btnNext.addEventListener('click', () => {
	 position -= movePosition;
	
	setPosition();
	checkBtns();
});
checkBtns();







