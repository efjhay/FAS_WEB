fetch('OpenItems.json')
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					appendData(data);
				})
				.catch(function (err) {
					console.log('error: ' + err);
				});

			function appendData(data) {
				var mainContainer = document.getElementById("FAS-openitems");
				for (var i = 0; i < data.length; i++) {
					var tr = document.createElement("tr");
					tr.innerHTML = '<td>'+
							'<p style="font-size:15px">' + data[i].RegNo + '</p>' + 
							'</td>' +
									'<td style="text-align:center">'+
										'<p style="font-size:15px">' + data[i].dateencountered_web + '</p>' + 
									'</td>'+
									'<td style="text-align:center">'+
										'<p style="font-size:15px">' + data[i].Details + '</p>' + 
									'</td>'+
									'<td style="text-align:center">'+
										'<p style="font-size:15px">' + data[i].LineNo + '</p>' + 
									'</td>'+
									'<td style="text-align:center">'+
										'<p style="font-size:15px">' + data[i].InCharge + '</p>' + 
									'</td>'+
									'<td style="text-align:center">'+
										'<p style="font-size:15px">'+ data[i].ElapsedDays + '</p>'+
									'</td>';
					mainContainer.appendChild(tr);
				}
			}