$(function() {
	$(".btn1").click(function() {
		$(".ul1").toggle();
	})
	$(".ul1 li").click(function() {
		$(this).parent().css("display", "none");
		var msg = $(this).html();
		str1 = msg.replace(/[^0-9]/ig, "");
		$(".num").html(str1);
	})

	$(".xia").click(function() {
		$(".ul2").toggle();
	})
	$(".ul2 li").click(function() {
		$(this).parent().css("display", "none");
		var str = $(this).html();
		var arr = new Array();
		var i = 0;
		while(i < str.length) {
			var s = "";
			while(str.charCodeAt(i) < 256) {
				s = s + str.charAt(i);
				i++;
			}
			arr.push(s);
			var s = "";
			while(str.charCodeAt(i) > 256) {
				s = s + str.charAt(i);
				i++;
			}
			arr.push(s);
		}
		$('.time').html(arr[0]);
		$('.time1').html(arr[1]);
	})
})