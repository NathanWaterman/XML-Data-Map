	//INITIALIZE 
	thisPageID = 4; // Id for page

	//RELATIVE PATH LOCATIONS 
	if(window.location.href.indexOf("9090") > -1){ //local
		var pageDataUrl = "/assets/js/workData/WorkpageDataUrl.xml";
	} else if (window.location.href.indexOf("ddhive") > -1){ //test 
		var pageDataUrl = "/assets/js/workData/WorkpageDataUrl.xml";	
	} else if (window.location.href.indexOf("tmsitedev") > -1){ //development
		var webUrl = "https://share.thissite.com/sites/TechM/tmsitedev";
	} else if (window.location.href.indexOf("tmsitev2") > -1){ //production
		var webUrl = "https://share.thissite.com/sites/TechM/tmsitev2";	
	}

$(document).ready(function() {
	$.get( pageDataUrl, function( data ) {
		var $entry = $(data).find('entry');
		$entry.each(function() { // one record expected
			Title = $(this).find('m\\:properties, properties').find('d\\:Title, Title').text();
			TitleDescription = $(this).find('m\\:properties, properties').find('d\\:TitleDescription, TitleDescription').text();
            SectionTitleB = $(this).find('m\\:properties, properties').find('d\\:SectionTitleB, SectionTitleB').text();
            SectionDescriptionB = $(this).find('m\\:properties, properties').find('d\\:SectionDescriptionB, SectionDescriptionB').text();  
             
			$(TitleDescription).appendTo("#titleDescription");
			$("#pagetitle").text(Title);
			
			$(SectionDescriptionB).appendTo("#SectionDescriptionB-portfolio");
			$("#SectionTitleB-portfolio").text(SectionTitleB);
				
            SectionTitleE = $(this).find('m\\:properties, properties').find('d\\:SectionTitleE, SectionTitleE').text();
            SectionDescriptionE = $(this).find('m\\:properties, properties').find('d\\:SectionDescriptionE, SectionDescriptionE').text();   
			SectionTitleF = $(this).find('m\\:properties, properties').find('d\\:SectionTitleF, SectionTitleF').text();
            SectionDescriptionF = $(this).find('m\\:properties, properties').find('d\\:SectionDescriptionF, SectionDescriptionF').text();  
		
			if ( SectionTitleE ) { //SECTION E aka RELATED INFORMATION
				$(SectionDescriptionE).appendTo(".tableContainer .sectionContainerE #titleDescriptionE");
		       	sectionE_template = '<h1>'+SectionTitleE+'</h1>'
				$(sectionE_template).prependTo(".tableContainer .sectionContainerE");
            } else {
	            $('.sectionContainerE').remove();
            }
			
            if ( SectionTitleF ) { //SECTION F
				$(SectionDescriptionF).appendTo(".tableContainer .sectionContainerF #titleDescriptionF");
		       	sectionF_template = '<h1>'+SectionTitleF+'</h1>'
				$(sectionF_template).prependTo(".tableContainer .sectionContainerF");
            } else {
	            $('.sectionContainerF').remove();
            }
		});		
	});
	// Display the most recent 'Status' item content to be shown under Headline section. Single item expected.
	// Dynamic load and display complete
	$(".tableContainer .yearSelection li:first-child, .downloadBtnContainer").hover(function() {
		$('.downloadBtnContainer').toggle();
	});
	$('.tableSelectors li:first-child').css({
		'background-color': '#3e76c0'
	});
	$('.tableSelectors li:first-child').find('p').css({
		'color': '#FFF'
	});
	$('.tableSelectors li:first-child').find('.arrow-up').show();
	$('.tableSelectors li:first-child').find('span').css({
		'background-color': '#555555'
	});
	$('.tableSelectors li:first-child').find('.tabHeader').css({
		'background-color': '#555555'
	});
});