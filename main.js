// JavaScript source code
$(document).ready(function(){
	let $btns= $('#course .btn-grp button');

	$btns.click(function(e){
		$('#course .btn-grp button').removeClass('active');
		e.target.classList.add('active');

		let selector= $(e.target).attr("data-filter");
		$('#course .grid').isotope({
			filter:selector
		});
		return false;
	})


	let nav_offset_top= $('.header').height() + 50;

		function navbarFixed(){
			if($('.header').length){
				$(window).scroll(function(){
					let scroll=$(window).scrollTop();
					if(scroll>=nav_offset_top){
						$('.header .mainmenu').addClass('navbar_fixed');
					}
					else{
						$('.header .mainmenu').removeClass('navbar_fixed');
					}
				})
			}
		}

		navbarFixed();
});