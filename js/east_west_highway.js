$(document).ready(function() {
	
	var district_name = new Array('Mahendranagar', 'Dhangadhi', 'Nepalgunj', 'Ghorahi', 'Butwal', 'Parasi', 'Hetaunda', 'Kalaiya', 'Jaleshwar', 'Siraha', 'Ineruwa', 'Chandragadhi');
	var distances = [
		[0, 57, 209, 324, 434, 465, 625, 688, 796, 821, 911, 1015],
		[57, 0, 181, 296, 407, 437, 597, 660, 768, 793, 883, 987],
		[209, 181, 0, 141, 252, 282, 443, 505, 614, 639, 728, 833],
		[324, 296, 141, 0, 151, 181, 342, 404, 513, 538, 627, 732], 
		[434, 407, 252, 151, 0, 30, 191, 253, 362, 387, 476, 581],
		[465, 437, 282, 181, 30, 0, 178, 241, 349, 375, 464, 568],
		[625, 597, 443, 342, 191, 178, 0, 63, 171, 196, 286, 390],
		[688, 660, 505, 404, 253, 241, 63, 0, 175, 201, 290, 394],
		[796, 768, 614, 513, 362, 349, 171, 175, 0, 91, 180, 284],
		[821, 793, 639, 538, 387, 375, 196, 201, 91, 0, 125, 230],
		[911, 883, 728, 627, 476, 464, 286, 290, 180, 125, 0, 104],
		[1015, 987, 833, 732, 581, 568, 390, 394, 284, 230, 104, 0]
	]


	var count = 0;
	var click1;

	function reset(){
		$('#distance').html('');
		$('.districtName').html('');
		count = 0;
		click1 = "";
	}

	$('.districtName').bind('click', function(e){
		$('#distance').html("");

		if(count>=2){
			reset();
		}
		count++;

			if (count == 1) {
				var clicked=$(this).attr('id');
				$('#from_district').html(clicked);
				$('#to_district').html('');
				click1=district_name.indexOf(clicked); 
			}

			else if (count == 2){
				var clicked=$(this).attr('id');
				var click2=district_name.indexOf(clicked);
				$("#to_district").html(clicked);
				$("#distance").html(distances[click1][click2]);
			}
		});
	});




