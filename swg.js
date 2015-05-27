				$(document).ready(function() {
					$('.tile1').on('mouseover', function() {
						var panelId = $(this).attr('data-panel');
						$('.tile1').css({opacity:'1'});
						$('.tile2').css({opacity:'0.5'});
						$('.tile3').css({opacity:'0.5'});
						$('.tile4').css({opacity:'0.5'});
						$('.tile5').css({opacity:'0.5'});
					});
					$('.tile2').on('mouseover', function() {
						$('.tile1').css({opacity:'0.5'});
						$('.tile2').css({opacity:'1'});
						$('.tile3').css({opacity:'0.5'});
						$('.tile4').css({opacity:'0.5'});
						$('.tile5').css({opacity:'0.5'});
					});
					$('.tile3').on('mouseover', function() {
						$('.tile1').css({opacity:'0.5'});
						$('.tile2').css({opacity:'0.5'});
						$('.tile3').css({opacity:'1'});
						$('.tile4').css({opacity:'0.5'});
						$('.tile5').css({opacity:'0.5'});
					});
					$('.tile4').on('mouseover', function() {
						$('.tile1').css({opacity:'0.5'});
						$('.tile2').css({opacity:'0.5'});
						$('.tile3').css({opacity:'0.5'});
						$('.tile4').css({opacity:'1'});
						$('.tile5').css({opacity:'0.5'});
					});
					$('.tile5').on('mouseover', function() {
						$('.tile1').css({opacity:'0.5'});
						$('.tile2').css({opacity:'0.5'});
						$('.tile3').css({opacity:'0.5'});
						$('.tile4').css({opacity:'0.5'});
						$('.tile5').css({opacity:'1'});
					});
					$('.container').on('mouseover', function() {
						$('.tile1').css({opacity:'1'});
						$('.tile2').css({opacity:'1'});
						$('.tile3').css({opacity:'1'});
						$('.tile4').css({opacity:'1'});
						$('.tile5').css({opacity:'1'});
					});
					$('footer').on('mouseover', function() {
						$('.tile1').css({opacity:'1'});
						$('.tile2').css({opacity:'1'});
						$('.tile3').css({opacity:'1'});
						$('.tile4').css({opacity:'1'});
						$('.tile5').css({opacity:'1'});
					});
				});