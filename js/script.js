
$(document).ready(function(){
	/*For panel collapse.*/
	$('.panel-heading span.clickable').on("click", function (e) {
		if ($(this).hasClass('panel-collapsed')) {
			// expand the panel
			$(this).parents('.panel').find('.panel-body').slideDown();
			$(this).removeClass('panel-collapsed');
			$(this).find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		}
		else {
			// collapse the panel
			$(this).parents('.panel').find('.panel-body').slideUp();
			$(this).addClass('panel-collapsed');
			$(this).find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		}
	});

	
    $(".btn-modify-node").click(function(){
	
		var modify = 'Modify';
		var save = 'Save';
		var string = $.trim($(this).text());

		if(string == modify)
		{          
			$(this).text('Save');
			
			$(".sel-battery-number").removeAttr('disabled');
			$(".sel-room-number").removeAttr('disabled');
			$(".txt-top").removeAttr('disabled');
			$(".txt-left").removeAttr('disabled');
			$(".txt-right").removeAttr('disabled');
		}
		else if(string == save)
		{
			$(this).text('Modify');
			
			$(".sel-battery-number").attr('disabled','disabled');
			$(".sel-room-number").attr('disabled','disabled');
			$(".txt-top").attr('disabled','disabled');
			$(".txt-left").attr('disabled','disabled');
			$(".txt-right").attr('disabled','disabled');
		}
		

    });
});