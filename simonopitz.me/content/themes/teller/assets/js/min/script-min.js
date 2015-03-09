if (document.documentElement) {
    var cn = document.documentElement.className;
    document.documentElement.className = cn.replace(/no-js/,'');
}
var ql_niceSCrollPostList, ql_animateHeader, ql_animateMainPostList, ql_animateMainPost;
jQuery(document).ready(function($) {

		
			//Get post lists via AJAX
			if ($(".ql_post_list article").length == 0) {
				siteUrl = self.location.protocol.toString() + "//" + self.location.host.toString();
				$.get(siteUrl, function(data){
					$(".ql_post_list").replaceWith($(data).find(".ql_post_list"));
					highlight_post();
				});//get
			};
			





			if ('ontouchstart' in document) {
			    $('body').removeClass('no-touch');
			}

			//Higlight current post
			function highlight_post(){
				var current_id = $(".main_col .post").attr('id');
				$(".ql_post_list .post").removeClass('current_post_list');
				$("#list_"+ current_id).addClass('current_post_list');
			}
			highlight_post();

			
			//Make Columns equal height
			function equal_height(){
				var row_height = $(".main_col").parent(".row").height();
				var window_width = $(window).width();
				var window_height = $(window).height();
				
				if (window_width > 992 && row_height < window_height) {
					$(".main_col, #sidebar").css('height', window_height);
				}else{
					$(".main_col, #sidebar").css('height', 'auto');
				};

			}
			$(window).on("debouncedresize", function( event ) {
				equal_height();
			});
			equal_height();
			


			
			//Scroll for Blog items
			ql_niceSCrollPostList = function(){
				jQuery(function($){
					$(".ql_post_list").niceScroll({
						touchbehavior: true,
						//cursorwidth: "3",
						cursoropacitymax: 0,
						bouncescroll: true,
						cursorcolor:"#000",
						railpadding: {top:0,right:2,left:0,bottom:0},
						grabcursorenabled: false,
						autohidemode: true
					});
				});//jQuery(function($)
			}//ql_niceSCrollPostList

			

			//Scroll for Blog items
			$("#header_sidebar").niceScroll({
				touchbehavior: true,
				//cursorwidth: "3",
				cursoropacitymax: 0.2,
				bouncescroll: true,
				cursorcolor:"#000",
				railpadding: {top:0,right:2,left:0,bottom:0},
				bouncescroll: true,
				grabcursorenabled: false
			});





			/*Dropdown menu on hover */
			
			$("#jqueryslidemenu").on({
			  mouseenter: function(){
			    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown(400, function(){
									$(this).addClass('open');
								});
			  },
			  mouseleave: function(){
			    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp(400, function(){
									$(this).removeClass('open');
								});
			  }
			}, ".dropdown");  // descendant selector

			


			//Disqus

			$(document).on('click', '.main_col .meta_comments a', function(event) {
                event.preventDefault();
                /* Act on the event */
                var post_id = $(".main_col > .post").attr('id');

                disqus_identifier = post_id.replace('post-','');
                $.ajax({
                     type: "GET",
                     url: "http://" + disqus_shortname + ".disqus.com/embed.js",
                     dataType: "script",
                     cache: true
                 });
            });




			
			
			$(".collapse").collapse();
			$('.dropdown-toggle').dropdown();


			$('*[data-toggle="tooltip"]').tooltip();


			
			
								
							
														

});





jQuery(window).load(function($) {
(function( $ ) {
$(function() {

	ql_animateHeader = function(){
		jQuery(function($){
			$("#header_sidebar").animo( { animation: 'fadeIn', duration: 0.7, keep: true, timing: 'ease-in-out'  }, function(e) {
				ql_animateMainPostList();

				var mainpost_delay = 700;
				if ($("body").hasClass('author-template') || $("body").hasClass('page-template')) {mainpost_delay = 0};
				setTimeout(function(){
					ql_animateMainPost();
				}, mainpost_delay);
			} );
		});//jQuery(function($)
	}//ql_animateHeader
	ql_animateHeader();





	//Main Post
	ql_animateMainPost = function(){
		jQuery(function($){
			$("#container_post .post, #container_post .page, #container_post article").animo( { animation: 'fadeInUp', duration: 0.6, keep: true, timing: 'ease-in-out'  }, function(e) {
				$("<style type='text/css'> .main_col{ border-right-color:#eeeeee!important;} </style>").appendTo("head");
			} );
		});//jQuery(function($)
	}//ql_animateMainPost

	//Posts list
	ql_animateMainPostList = function(){
		jQuery(function($){
			$(".ql_post_list .post").each(function(index, el) {

				$(".ql_post_list").css("border-right-color", "#eeeeee");

				setTimeout(function(){
					$(el).animo( { animation: 'fadeInLeft', duration: 0.4, keep: true, timing: 'ease-in-out'  });
					if ($(".ql_post_list .post").length == index+1) {
						ql_niceSCrollPostList();
					};
				}, index * 200);
				
			});			
		});//jQuery(function($)
	}//ql_animateMainPostList




});// jQuery NoConflict
})(jQuery);
});// window load
function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = jQuery(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    jQuery('html, body').animate({
        scrollTop: offsetTop
    }, time);
}

