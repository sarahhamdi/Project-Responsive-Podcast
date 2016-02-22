$(function() { 

// AUDIO PLAYER

	$('audio').audioPlayer({

	}); 


// LOAD MORE CONTENT (Section 1)

	// first click
	$('a.load-more').on('click', function(){

		// prevent browser from refreshing
		event.preventDefault();
		// check to see if our event is firing or on fire
		console.log('hey!');
		// to load more content
		$('.episodes-group-2').slideToggle();
		// to reset link to 'off' position (stop the link from appearing as 'on' and firing 100x next time you click on it)
		$('a.load-more').off('click');

		// second click
		$('a.load-more').on('click', function(){
			event.preventDefault();
			// to load more content
			$('.episodes-group-3').slideToggle();
			// to let people know there's nothing else left to load
			$( 'a.load-more' ).replaceWith( '<p class="load-more">No More Episodes</p>' );
			$('p.load-more').addClass('nomore');
			console.log('hey!');
			// $('a.load-more').off('click');

		});

	});


// SORT & FILTER EPISODES (Section 1)
	
	// to show all episodes on click
	$(".btn1").on('click', function(){
		// to show all the children of the ul so I don't have to write separate lines for them
       $("ul.episodes").children().fadeIn();
       $(".section1__load-more").hide();
       event.preventDefault();
   });

	// to show all season 1 episodes on click
   $(".btn2").on('click', function(){
       $("ul.episodes").children().hide();
       $(".season-1").fadeIn();
       $(".section1__load-more").hide();
        event.preventDefault();
   });

   // to show all season 2 episodes on click
   $(".btn3").on('click', function(){
   	   $("ul.episodes").children().hide();
       $(".season-2").fadeIn();
       event.preventDefault();
   });

   // to show all season 3 episodes on click
    $(".btn4").on('click', function(){
       $("ul.episodes").children().hide();
       $(".season-3").fadeIn();
       event.preventDefault();
   });


// HAMBURGER MENU
	
	// to show the menu when people click on the hamburger
	$('.hamburger p').on('click', function(){
		$('nav ul').fadeIn();
	});

	// to hude the menu when people click on 'close x'
	$('.close').on('click', function(){
		$('nav ul').fadeOut();
	});

});