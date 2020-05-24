'use strict'
$(function () {

    console.log("pagina geladen");


    //-------------hier laden we alles dat we nodig hebben in via de json file ----------   

    $.ajax({
        method: "GET",
        url: 'entries.json',
        dataType: "json",
        data: "data",

    }).done(function (data) {
        /*met de for of loop gaan we voor elk element dat we binnenkrijgen de code uitvoeren die in de loop staat */
        for (let videos of data.items) {
            console.log(videos);              
            /*we zetten de content op de pagina met de link naar de video en de juiste namen. 
            Ook geef ik het genre en de category mee aan elke div als klasse om deze later te gebruiken*/
            $('#listofvideos').append(`
            <div class="videogallery ${videos.category} ${videos["genre-v2"]}">
             <a href="${videos["link-to-video"].url}">
               <img src="${videos.thumbnail.url}" alt="${videos.thumbnail.fileid}" >
            
               <div class="desc">
                 <h2>${videos.name}</h2> 
                 <h3> ${videos.excerpt} </h3>
               </div>
             </a>
            </div>`);
        }
    }).fail(function () {
        console.log("error");
    })


    //-------searchbar functie----------

    /*de searchbar functie zoekt enkel in de klassen videogallery,
     hierdoor zoekt deze in de volledige lijst ookal is er een filter geselecteerd, deze side effect heb ik niet kunnen oplossen.*/
    $("#searchBar").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $("#listofvideos .videogallery").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


    //--------filters-----------

    /* de manier waarop de knoppen werken is dat ze alleen de div elementen laten zien die overeenkomen met de class die ik heb opgegeven in de functie van die knop
    de classes hebben ik meegegeven aan deze div elementen in mijn ajax call functie wanneer ik ze inlaadt op de pagina
    dit werkt met de jquerry hide en show funties*/

    /*de show all knop laat de volledige videogallery zien, ook laat deze de genre knoppen zien en verbergt deze de doelgroep knoppen
    ik heb dit zo gedaan omdat de juiste content niet getoond werd op de pagina wanneer de doelgroep eerst geselecteerd werd 
    (deze logica van knoppen verbergen heb ik ook toegepast bij de andere types knoppen) */
    $(document).on("click", "#showallbtn", function () {
        $('.videogallery').show();
        $('#genre').show();
        $('#doelgroep').hide();
    });


    /*de doelgroep knoppen hiden de elementen met de class van de andere doelgroep. (bv de knop van volwassenen hide alle elementen met de class familie)
    ook hiden deze knoppen de andere knoppen behalve de show all knop zodat alleen de juiste content weergegeven wordt. */
    $(document).on("click", "#volwassenbtn", function () {
        $('.familie').hide();
        $('#genre').hide();
        $('#doelgroep').hide();

    });

    $(document).on("click", "#familiebtn", function () {
        $('.volwassenen').hide();
        $('#genre').hide();
        $('#doelgroep').hide();

    });

    
    /*de genre knoppen hiden eerst de volledige videogallery en showen dan de elementen met de geselecteerde class 
    dit heeft wel als nadeel dat doordat we de volledige videogallery laten zien dat de filter van doelgroep zijn effect niet meer heeft
    dit heb ik opgelost door de gebruiker eerst het genre te laten kiezen en pas daarna de doelgroep*/
    $(document).on("click", "#theaterbtn", function () {
        $('.videogallery').hide();
        $('.theater').show();
        $('#doelgroep').show();
    });

    $(document).on("click", "#dansbtn", function () {
        $('.videogallery').hide();
        $('.dans').show();
        $('#doelgroep').show();
    });

    $(document).on("click", "#muziektheaterbtn", function () {
        $('.videogallery').hide();
        $('.muziektheater').show();
        $('#doelgroep').show();
    });

    $(document).on("click", "#multidisciplinairbtn", function () {
        $('.videogallery').hide();
        $('.multidisciplinair').show();
        $('#doelgroep').show();
    });

    $(document).on("click", "#literatuurbtn", function () {
        $('.videogallery').hide();
        $('.literatuur').show();
        $('#doelgroep').hide();
    });

    $(document).on("click", "#comedybtn", function () {
        $('.videogallery').hide();
        $('.comedy').show();
        $('#doelgroep').hide();
    });

    $(document).on("click", "#figurentheaterbtn", function () {
        $('.videogallery').hide();
        $('.figurentheater').show();
        $('#doelgroep').hide();
    });

    $(document).on("click", "#operabtn", function () {
        $('.videogallery').hide();
        $('.opera').show();
        $('#doelgroep').hide();
    });

    $(document).on("click", "#concertbtn", function () {
        $('.videogallery').hide();
        $('.concert').show();
        $('#doelgroep').hide();
    });

    $(document).on("click", "#circusbtn", function () {
        $('.videogallery').hide();
        $('.circus').show();
        $('#doelgroep').show();
    });


})