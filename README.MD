# Development 4: Opdracht Werkstuk Arno Gorissen

De belangrijkste functies die de webpagina moet hebben zijn
1) het inladen van de content
2) de zoekfunctie
3) het filteren van de content op genre en doelgroep



voor het inladen van de content heb ik de json file gebruikt. Ik append elke element aan een div die ik in mijn html heb gezet.
vanaf dat de content is ingeladen ga ik hier zelf niets meer aan veranderen. 
ik ga enkel de display css property van elk element veranderen door middel van jquerry 
(dit doe ik door de elementen met de juiste class die ik in mijn ajax call heb gegeven te hiden of te showen).
Hierdoor moet ik geen dingen gaan veranderen vanaf dat deze is ingeladen en blijft dit altijd hetzelfde.


de zoekfunctie gaat elk element binnen de div met id listofvideos vergelijken met de value die we intypen in de searchbar. 
Als deze niet overeenkomen gaat deze hidden worden door de css property display te veranderen naar hidden (dit gebeurt ook met jquerry)


de filterknoppen werken door de elementen te hiden via jquerry door middel van de classes van de elementen.
Ik heb gekozen om zo te werken omdat de content op de pagina altijd dezelfde blijft, we zien ze gewoon niet meer.







 
