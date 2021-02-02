import data from '../json/data.json';

const imgUrl = 'data:image/jpeg;base64,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';


const docDefinition = {
	content: [
		// HEADER
		{	text: 'Nombre de factura', style: ['header'], bold: true, fontSize: 18 , lineHeight: 1.2},
		{	text: 'Versión 1', fontSize: 16 , lineHeight: 1.5},
		{
			style: 'myTable',
			table: {
				widths: [300, 300],
				body: [
					[
						{
							table: {
								widths: [150, 150],
								body: [
									['Número de facturación:', '353735673568',],
									['Fecha de facturación:', '12/09/1993',],
									['ID de cliente:', '9829939A',],
									['ID de producto', 'AAH-23883994',],
									['ID de empresa', '000293622',],
									['' , '']
								]
							},
							layout: 'noBorders',
							lineHeight: 1.1,
						},
						// LOGO - RIGHT TOP
						{
							image: imgUrl,
							width: 200,
							absolutePosition: { x: 370, y: 20 }
						}
					],
				],
			},
			layout: 'noBorders',
			lineHeight: 1.1,
		},
		{text: 'SEMA AG - Dirección ficticia, 00000 Celle', fontSize: 10, lineHeight: 1.5 },
		{
			style: 'myTable',
			table: {
				widths: [300, 300],
				body: [
					[
					
					{text: 'Dirección de facturación: ', style: 'header'},
					
					{text: 'Dirección de entrega: ', style: 'header'},
						
					],
					[
						// AFTER DIVIDER - LEFT COLUMN
						{
							table: {
								body: [
									['Dirección 1'],
									['Dirección 2'],
									['Población'],
									['País'],
								]
							},
							layout: 'noBorders',
						},
						// AFTER DIVIDER - RIGHT COLUMN
						{
							table: {
								body: [
									['Dirección 1',],
									['Dirección 2',],
									['Población',],

								]
							},
							layout: 'noBorders',
						},
					],
				],
			},
			layout: 'noBorders',
			lineHeight: 0.8,
		},
		{text: '\n'},
		// DIVIDER

		// Al usar este método con canvas, cuando descargas el documento se ve bien, pero si se vuelve a descargar, se genera espacio por encima de la línea cada vez hasta 2 o 3 veces.
		
		// {canvas: [ { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, } ]},

		// En stack overflow comentan que esta es una posible solución: 
		{
			table : {
				headerRows : 1,
				widths: [515],
				body : [
						[''],
						['']
						]
			},
			layout : 'headerLineOnly'
	  },
		{text: '\n'},
		// TABLE AFTER DIVIDER
		{			
			style: 'tableExample',
				table: {
					widths: [150, 150],
					headerRows: 1,
					body: [
						['Dato número 1:', '38593 49959 29944 -433',],
						['Dato número 2:', '25622456',],
						['Dato número 3:', 'HU G6.034',],
					]
				},
				layout: 'noBorders',
				lineHeight: 1.2,
		},
		{text: '\n'},
		// TEXT BEFORE TABLE
		{text: 'Wir danken Ihnen für Ihre Anfrage und erstellen Ihnen folgendes Angebot: ', fontSize: 14, lineHeight: 2},
		// MAIN TABLE
		{
			style: 'myTable',
			table: {
				widths: [40, 55, 110, 'auto', 'auto', 55, 'auto'],
				heights: 20,
				headerRows: 1,

				body: [
					// TABLE HEADER
					[
						{text: 'ID', style: 'tableHeader', fillColor: '#C9C9C9', fontSize: 11,},
						{text: 'Version', style: 'tableHeader', fillColor: '#C9C9C9', fontSize: 11,},
						{text: 'App name', style: 'tableHeader', fillColor: '#C9C9C9', fontSize: 11,},
						{text: 'Country', style: 'tableHeader', fillColor: '#C9C9C9', fontSize: 11,},
						{text: 'Dev. first name', style: 'tableHeader', fillColor: '#C9C9C9', fontSize: 11,},
						{text: 'Dev. last name', style: 'tableHeader', fillColor: '#C9C9C9', fontSize: 11,},
						{text: 'IP', style: 'tableHeader', fillColor: '#C9C9C9', fontSize: 11,},
					],
					// TABLE ROWS
					[
							data[0].id, data[0].version, data[0].company, data[0].company_country, data[0].first_name, data[0].last_name, data[0].ip_address, 
					],
					[
							data[1].id, data[1].version, data[1].company, data[1].company_country, data[1].first_name, data[1].last_name, data[1].ip_address, 
					],
					[
							data[2].id, data[2].version, data[2].company, data[2].company_country, data[2].first_name, data[2].last_name, data[2].ip_address, 
					],
					[
							data[3].id, data[3].version, data[3].company, data[3].company_country, data[3].first_name, data[3].last_name, data[3].ip_address, 
					],
					[
							data[4].id, data[4].version, data[4].company, data[4].company_country, data[4].first_name, data[4].last_name, data[4].ip_address, 
					],
					[
							data[5].id, data[5].version, data[5].company, data[5].company_country, data[5].first_name, data[5].last_name, data[5].ip_address, 
					],
					[
							data[6].id, data[6].version, data[6].company, data[6].company_country, data[6].first_name, data[6].last_name, data[6].ip_address, 
					],
					[
							data[7].id, data[7].version, data[7].company, data[7].company_country, data[7].first_name, data[7].last_name, data[7].ip_address, 
					],
					[
							data[8].id, data[8].version, data[8].company, data[8].company_country, data[8].first_name, data[8].last_name, data[8].ip_address, 
					],
					[
							data[9].id, data[9].version, data[9].company, data[9].company_country, data[9].first_name, data[9].last_name, data[9].ip_address, 
					],
					[
							data[10].id, data[10].version, data[10].company, data[10].company_country, data[10].first_name, data[10].last_name, data[10].ip_address, 
					],
					[
							data[11].id, data[11].version, data[11].company, data[11].company_country, data[11].first_name, data[11].last_name, data[11].ip_address, 
					],
					[
							data[12].id, data[12].version, data[12].company, data[12].company_country, data[12].first_name, data[12].last_name, data[12].ip_address, 
					],
					[
							data[13].id, data[13].version, data[13].company, data[13].company_country, data[13].first_name, data[13].last_name, data[13].ip_address, 
					],
					[
							data[14].id, data[14].version, data[14].company, data[14].company_country, data[14].first_name, data[14].last_name, data[14].ip_address, 
					],
					[
							data[15].id, data[15].version, data[15].company, data[15].company_country, data[15].first_name, data[15].last_name, data[15].ip_address, 
					],
					[
							data[16].id, data[16].version, data[16].company, data[16].company_country, data[16].first_name, data[16].last_name, data[16].ip_address, 
					],
					[
							data[17].id, data[17].version, data[17].company, data[17].company_country, data[17].first_name, data[17].last_name, data[17].ip_address, 
					],
					[
							data[18].id, data[18].version, data[18].company, data[18].company_country, data[18].first_name, data[18].last_name, data[18].ip_address, 
					],
					[
							data[19].id, data[19].version, data[19].company, data[19].company_country, data[19].first_name, data[19].last_name, data[19].ip_address, 
					],
					[
							data[20].id, data[20].version, data[20].company, data[20].company_country, data[20].first_name, data[20].last_name, data[20].ip_address, 
					],
				],
			},
			layout: 'noBorders'
		},

	],
	styles: {
		header: {
			fontSize: 16,
			bold: true,
		},
		myTable: {
			fontSize: 10,
		}
	}

};

export default docDefinition;