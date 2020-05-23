'use strict'

$(function () {
    console.log("pagina geladen");


    //-------------alles inladen via json file ----------   
    $.ajax({
        method: "GET",
        url: 'entries.json',
        dataType: "json",
        data: "data",

    }).done(function (data) {
        for (let videos of data.items) {
            console.log(videos);
            // console.log(videos["link-to-video"]);
            $('#listofvideos').append(`
            <div class="videogallery ${videos.category} ${videos["genre-v2"]}">
            <a href="${videos["link-to-video"].url}">
              <img src="${videos.thumbnail.url}" alt="${videos.thumbnail.fileid}" >
            
            <div class="desc"><h2>${videos.name}</h2>  <h3> ${videos.excerpt} </h3></div>
            </a>
            </div>
        `);
        }


    }).fail(function () {
        console.log("error");
    })

    //-------searchbar functie----------
    $("#searchBar").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#listofvideos .videogallery").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    //--------filters-----------

    $(document).on("click", "#showallbtn", function () {
        $('.videogallery').show();
        $('#genre').show();
        $('#doelgroep').hide();


    });

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