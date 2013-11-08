$(document).ready(function() {
	var mid_hill_district_name = new Array('Dandeldhura', 'Silgadhi', 'Dailekh', 'Baglung', 'Pokhara', 'Gorkha', 'Dhulikhel', 'Diklel', 'Phidim');
	var mid_hill_distances = [
		[0, 70, 422, 735, 662, 689, 797, 1060, 1223],
		[70, 0, 486, 796, 726, 753, 861, 1124, 1287],
		[422, 486, 0, 618, 545, 572, 681, 943, 1106],
		[735, 796, 618, 0, 73, 182, 306, 640, 802],
		[662, 726, 545, 73, 0, 109, 233, 567, 730],
		[689, 753, 572, 182, 109, 0, 173, 507, 670],
		[797, 861, 681, 306, 233, 173, 0, 475, 638],
		[1060, 1124, 943, 640, 567, 507, 475, 0, 480], 
		[1223, 1287, 1106, 802, 730, 670, 638, 480, 0]
 	];

 var east_west_district_name = new Array('Mahendranagar', 'Dhangadhi', 'Nepalgunj', 'Ghorahi', 'Butwal', 'Parasi', 'Hetaunda', 'Kalaiya', 'Jaleshwar', 'Siraha', 'Ineruwa', 'Chandragadhi');
	 var east_west_distances = [
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

	distance_cal(mid_hill_district_name, mid_hill_distances,east_west_district_name, east_west_distances);
});

function distance_cal(district_name, distances,district_name2, distances2){
	var count = 0;
	var click1;
	var highway1,highway2;

	function reset(){
		$('#distance').html('');
		$('.districtName').html('');
		
		$('#from_district').html('');
		$('#to_district').html('');
		count = 0;
		click1 = "";
		highway1="";
		highway2="";
	}

	$('.districtName').bind('click', function(e){


		var clicked_class = $(this).attr('class');
		
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
				//alert("1 click1: "+click1);
				if(click1==-1)
				{
					
					click1=district_name2.indexOf(clicked);
					highway1=2;
				}
				else highway1=1;
				
				/*	alert("1a click1: "+click1);
					alert("1 highway1 : "+highway1);*/
			}

			else if (count == 2){
				var clicked=$(this).attr('id');
				var click2=district_name.indexOf(clicked);
				//alert("1 click2: "+click2);
				if(click2==-1)
				{
					highway2=2;
					click2=district_name2.indexOf(clicked);
					
					/*alert("2 click2: "+click2);
					alert("2 highway2: "+highway2);
					*/
					if(click2==-1) reset();
					else if(highway2!=highway1) reset();
					else
					{ 
					 	$("#to_district").html(clicked);
						$("#distance").html(distances2[click1][click2]);
					}
					
					//alert("2a click2: "+click2);
				}
				else
				{
					highway2=1;		
					//alert("3 click1: "+click1+" click2:"+ click2+" highway1: "+highway1+" highway2: "+highway2);
					if(highway2!=highway1) reset();
					else
					{
						$("#to_district").html(clicked);
						$("#distance").html(distances[click1][click2]);
					}
				}
			}
		});

}

