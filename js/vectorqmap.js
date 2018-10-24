$(document).ready(function(){
                
                var pins = {
		          eg: escapeXml('<div class="map-pin white"><span>EGYPT</span></div>'),
		          fr: escapeXml('<div class="map-pin white"><span>FRANE</span></div>'),
		          us: escapeXml('<div class="map-pin white"><span>USA</span></div>')
		        };
		                

                jQuery('#vmap').vectorMap({
			          map: 'world_en',
			          backgroundColor: 'transparent',
			          color: 'rgba(102,102,102,0.5)',
			          pins: pins,
			          pinMode: 'content',
			          enableZoom: false,
			          hoverOpacity: 0.5,
			          normalizeFunction: 'linear',
			          selectedColor: '#666666',
			          showTooltip: true,
			          selectedRegions: ['EG', 'FR', 'USA'],
			          onRegionClick: function (element, code, region) {
			            var message = 'You clicked "'
			              + region
			              + '" which has the code: '
			              + code.toUpperCase();

			            alert(message);
			          }
			        });

            });


function escapeXml(string) {
                return string.replace(/[<>]/g, function (c) {
                  switch (c) {
                    case '<': return '\u003c';
                    case '>': return '\u003e';
                  }
                });
              }
