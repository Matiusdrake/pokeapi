$(document).ready(function () {
    consultaAPI("500")
    consultaAPI2("500")
    canvas()




})

$("button").click(function () {

    let pokemon = $("#input").val()
    $('#input').val('');
    $("#tipo2").html(null)
    $(".imgtipo2").attr('src', '');
    consultaAPI(pokemon)
    consultaAPI2(pokemon)


})


$("#random").click(function () {

    $('#input').val('');
    $(".imgtipo2").attr('src', '');
    $("#tipo2").html(null)

    var pokemon = Math.round(Math.random() * 721);




    consultaAPI(pokemon)
    consultaAPI2(pokemon)

})

function consultaAPI(Pokemon) {

    $.ajax({

        type: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${Pokemon}`,


        success: function (data) {

            console.log(data)

            $("#nombre").html(data.name)
            $("#numero").html(data.id)
            $("#habi1").html(data.abilities[0].ability.name)
            $("habi2").html(data.abilities[1].ability.name)
            $("#peso").html(data.weight / 10)
            $("#altura").html(data.height / 10)
            $(".oficial").attr('src', data.sprites.front_default);
            $(".oficial").attr('src', data.sprites.other["official-artwork"].front_default);
            $(".imagen1").attr('src', data.sprites.front_default);
            $(".imagen2").attr('src', data.sprites.front_shiny);
            $(".gif").attr('src', data.sprites.versions["generation-v"]["black-white"].animated.front_default);

            $("#tipo1").html(data.types[0].type.name)
            let tipo1 = data.types[0].type.name




            switch (tipo1) {

                case "bug":
                    $(".imgtipo1").attr('src', 'assets/image/bug.svg');
                    $(".formato1").css("background-color", "#A8B820");
                    $(".formato2").css("background-color", "#A8B820");

                    $(".debilidad1").attr('src', 'assets/image/flying.svg');
                    $(".debilidad2").attr('src', 'assets/image/fire.svg');
                    $(".debilidad3").attr('src', 'assets/image/rock.svg');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');




                    $(".debil1").html("flying")
                    $(".debil2").html("Fire")
                    $(".debil3").html("Rock")
                    $(".debil4").html("")
                    $(".debil5").html("")
                    break;

                case "dark":
                    $(".imgtipo1").attr('src', 'assets/image/dark.svg');
                    $(".formato1").css("background-color", "#7A5848");
                    $(".formato2").css("background-color", "#7A5848");

                    $(".debilidad1").attr('src', 'assets/image/fighting.svg');
                    $(".debilidad2").attr('src', 'assets/image/fairy.svg');
                    $(".debilidad3").attr('src', 'assets/image/bug.svg');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("fighting")
                    $(".debil2").html("fairy")
                    $(".debil3").html("bug")
                    $(".debil4").html("")
                    $(".debil5").html("")
                    break;

                case "dragon":
                    $(".imgtipo1").attr('src', 'assets/image/dragon.svg');
                    $(".formato1").css("background-color", "#7860E0");
                    $(".formato2").css("background-color", "#7860E0");

                    $(".debilidad1").attr('src', 'assets/image/dragon.svg');
                    $(".debilidad2").attr('src', 'assets/image/fairy.svg');
                    $(".debilidad3").attr('src', 'assets/image/ice.svg');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("dragon")
                    $(".debil2").html("fairy")
                    $(".debil3").html("ice")
                    $(".debil4").html("")
                    $(".debil5").html("")
                    break;

                case "electric":
                    $(".imgtipo1").attr('src', 'assets/image/electric.svg');
                    $(".formato1").css("background-color", "#F8D030");
                    $(".formato2").css("background-color", "#F8D030");

                    $(".debilidad1").attr('src', 'assets/image/ground.svg');
                    $(".debilidad2").attr('src', '');
                    $(".debilidad3").attr('src', '');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("ground")
                    $(".debil2").html("")
                    $(".debil3").html("")
                    $(".debil4").html("")
                    $(".debil5").html("")

                    break;

                case "fairy":
                    $(".imgtipo1").attr('src', 'assets/image/fairy.svg');
                    $(".formato1").css("background-color", "#E79FE7");
                    $(".formato2").css("background-color", "#E79FE7");

                    $(".debilidad1").attr('src', 'assets/image/poison.svg');
                    $(".debilidad2").attr('src', 'assets/image/steel.svg');
                    $(".debilidad3").attr('src', '');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("poison")
                    $(".debil2").html("steel")
                    $(".debil3").html("")
                    $(".debil4").html("")
                    $(".debil5").html("")

                    break;

                case "fighting":
                    $(".imgtipo1").attr('src', 'assets/image/fighting.svg');
                    $(".formato1").css("background-color", "#A05038");
                    $(".formato2").css("background-color", "#A05038");

                    $(".debilidad1").attr('src', 'assets/image/flying.svg');
                    $(".debilidad2").attr('src', 'assets/image/fairy.svg');
                    $(".debilidad3").attr('src', 'assets/image/psychic.svg');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("flying")
                    $(".debil2").html("fairy")
                    $(".debil3").html("psychic")
                    $(".debil4").html("")
                    $(".debil5").html("")
                    break;

                case "fire":
                    $(".imgtipo1").attr('src', 'assets/image/fire.svg');
                    $(".formato1").css("background-color", "#F05030");
                    $(".formato2").css("background-color", "#F05030");

                    $(".debilidad1").attr('src', 'assets/image/water.svg');
                    $(".debilidad2").attr('src', 'assets/image/ground.svg');
                    $(".debilidad3").attr('src', 'assets/image/rock.svg');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("Water")
                    $(".debil2").html("ground")
                    $(".debil3").html("Rock")
                    $(".debil4").html("")
                    $(".debil5").html("")




                    break;

                case "flying":
                    $(".imgtipo1").attr('src', 'assets/image/flying.svg');
                    $(".formato1").css("background-color", "#98A8F0");
                    $(".formato2").css("background-color", "#98A8F0");

                    $(".debilidad1").attr('src', 'assets/image/electric.svg');
                    $(".debilidad2").attr('src', 'assets/image/ice.svg');
                    $(".debilidad3").attr('src', 'assets/image/rock.svg');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("electric")
                    $(".debil2").html("ice")
                    $(".debil3").html("rock")
                    $(".debil4").html("")
                    $(".debil5").html("")
                    break;

                case "ghost":
                    $(".imgtipo1").attr('src', 'assets/image/ghost.svg');
                    $(".formato1").css("background-color", "#6060B0");
                    $(".formato2").css("background-color", "#6060B0");

                    $(".debilidad1").attr('src', 'assets/image/ghost.svg');
                    $(".debilidad2").attr('src', 'assets/image/dark.svg');
                    $(".debilidad3").attr('src', '');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("ghost")
                    $(".debil2").html("dark")
                    $(".debil3").html("")
                    $(".debil4").html("")
                    $(".debil5").html("")
                    break;

                case "grass":
                    $(".imgtipo1").attr('src', 'assets/image/grass.svg');
                    $(".formato1").css("background-color", "#78C850");
                    $(".formato2").css("background-color", "#78C850");

                    $(".debilidad1").attr('src', 'assets/image/fire.svg');
                    $(".debilidad2").attr('src', 'assets/image/ice.svg');
                    $(".debilidad3").attr('src', 'assets/image/poison.svg');
                    $(".debilidad4").attr('src', 'assets/image/flying.svg');
                    $(".debilidad5").attr('src', 'assets/image/bug.svg');




                    $(".debil1").html("fire")
                    $(".debil2").html("ice")
                    $(".debil3").html("poison")
                    $(".debil4").html("flying")
                    $(".debil5").html("bug")


                    break;

                case "ground":
                    $(".imgtipo1").attr('src', 'assets/image/ground.svg');
                    $(".formato1").css("background-color", "#E9D6A4");
                    $(".formato2").css("background-color", "#E9D6A4");

                    $(".debilidad1").attr('src', 'assets/image/water.svg');
                    $(".debilidad2").attr('src', 'assets/image/grass.svg');
                    $(".debilidad3").attr('src', 'assets/image/ice.svg');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("water")
                    $(".debil2").html("grass")
                    $(".debil3").html("ice")
                    $(".debil4").html("")
                    $(".debil5").html("")

                    break;

                case "ice":
                    $(".imgtipo1").attr('src', 'assets/image/ice.svg');
                    $(".formato1").css("background-color", "#58C8E0");
                    $(".formato2").css("background-color", "#58C8E0");

                    $(".debilidad1").attr('src', 'assets/image/fire.svg');
                    $(".debilidad2").attr('src', 'assets/image/steel.svg');
                    $(".debilidad3").attr('src', 'assets/image/rock.svg');
                    $(".debilidad4").attr('src', 'assets/image/fighting.svg');
                    $(".debilidad5").attr('src', '');

                    $(".debil1").html("fire")
                    $(".debil2").html("steel")
                    $(".debil3").html("rock")
                    $(".debil4").html("fighting")
                    $(".debil5").html("")
                    break;

                case "normal":
                    $(".imgtipo1").attr('src', 'assets/image/normal.svg');
                    $(".formato1").css("background-color", "#A8A090");
                    $(".formato2").css("background-color", "#A8A090");

                    $(".debilidad1").attr('src', '');
                    $(".debilidad2").attr('src', '');
                    $(".debilidad3").attr('src', 'assets/image/fighting.svg');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');

                    $(".debil1").html("")
                    $(".debil2").html("")
                    $(".debil3").html("fighting")
                    $(".debil4").html("")
                    $(".debil5").html("")

                    break;

                case "poison":
                    $(".imgtipo1").attr('src', 'assets/image/poison.svg');
                    $(".formato1").css("background-color", "#B058A0");
                    $(".formato2").css("background-color", "#B058A0");

                    $(".debilidad1").attr('src', 'assets/image/ground.svg');
                    $(".debilidad2").attr('src', 'assets/image/psychic.svg');
                    $(".debilidad3").attr('src', '');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("ground")
                    $(".debil2").html("psychic")
                    $(".debil3").html("")
                    $(".debil4").html("")
                    $(".debil5").html("")

                    break;

                case "psychic":
                    $(".imgtipo1").attr('src', 'assets/image/psychic.svg');
                    $(".formato1").css("background-color", "#F870A0");
                    $(".formato2").css("background-color", "#F870A0");

                    $(".debilidad1").attr('src', 'assets/image/ghost.svg');
                    $(".debilidad2").attr('src', 'assets/image/dark.svg');
                    $(".debilidad3").attr('src', 'assets/image/bug.svg');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("ghost")
                    $(".debil2").html("dark")
                    $(".debil3").html("bug")
                    $(".debil4").html("")
                    $(".debil5").html("")

                    break;

                case "rock":
                    $(".imgtipo1").attr('src', 'assets/image/rock.svg');
                    $(".formato1").css("background-color", "#B8A058");
                    $(".formato2").css("background-color", "#B8A058");

                    $(".debilidad1").attr('src', 'assets/image/water.svg');
                    $(".debilidad2").attr('src', 'assets/image/grass.svg');
                    $(".debilidad3").attr('src', 'assets/image/fighting.svg');
                    $(".debilidad4").attr('src', 'assets/image/ground.svg');
                    $(".debilidad5").attr('src', 'assets/image/steel.svg');




                    $(".debil1").html("water")
                    $(".debil2").html("grass")
                    $(".debil3").html("fighting")
                    $(".debil4").html("ground")
                    $(".debil5").html("steel")

                    break;

                case "steel":
                    $(".imgtipo1").attr('src', 'assets/image/steel.svg');
                    $(".formato1").css("background-color", "#A8A8C0");
                    $(".formato2").css("background-color", "#A8A8C0");

                    $(".debilidad1").attr('src', 'assets/image/fire.svg');
                    $(".debilidad2").attr('src', 'assets/image/fighting.svg');
                    $(".debilidad3").attr('src', 'assets/image/ground.svg');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("fire")
                    $(".debil2").html("fighting")
                    $(".debil3").html("ground")
                    $(".debil4").html("")
                    $(".debil5").html("")

                    break;

                case "water":
                    $(".imgtipo1").attr('src', 'assets/image/water.svg');
                    $(".formato1").css("background-color", "#3899F8");
                    $(".formato2").css("background-color", "#3899F8");

                    $(".debilidad1").attr('src', 'assets/image/electric.svg');
                    $(".debilidad2").attr('src', 'assets/image/grass.svg');
                    $(".debilidad3").attr('src', '');
                    $(".debilidad4").attr('src', '');
                    $(".debilidad5").attr('src', '');


                    $(".debil1").html("electric")
                    $(".debil2").html("grass")
                    $(".debil3").html("")
                    $(".debil4").html("")
                    $(".debil5").html("")
                    break;
                default:
                    alert("no se que pasa");
                    break;
            }

            $("#tipo2").html(data.types[1].type.name)
            let tipo2 = data.types[1].type.name



            switch (tipo2) {

                case "bug":
                    $(".imgtipo2").attr('src', 'assets/image/bug.svg');
                    break;

                case "dark":
                    $(".imgtipo2").attr('src', 'assets/image/dark.svg');
                    break;

                case "dragon":
                    $(".imgtipo2").attr('src', 'assets/image/dragon.svg');
                    break;

                case "electric":
                    $(".imgtipo2").attr('src', 'assets/image/electric.svg');
                    break;

                case "fairy":
                    $(".imgtipo2").attr('src', 'assets/image/fairy.svg');
                    break;

                case "fighting":
                    $(".imgtipo2").attr('src', 'assets/image/fighting.svg');
                    break;

                case "fire":
                    $(".imgtipo2").attr('src', 'assets/image/fire.svg');
                    break;

                case "flying":
                    $(".imgtipo2").attr('src', 'assets/image/flying.svg');
                    break;

                case "ghost":
                    $(".imgtipo2").attr('src', 'assets/image/ghost.svg');
                    break;

                case "grass":
                    $(".imgtipo2").attr('src', 'assets/image/grass.svg');
                    break;

                case "ground":
                    $(".imgtipo2").attr('src', 'assets/image/ground.svg');
                    break;

                case "ice":
                    $(".imgtipo2").attr('src', 'assets/image/ice.svg');
                    break;

                case "normal":
                    $(".imgtipo2").attr('src', 'assets/image/normal.svg');
                    break;

                case "poison":
                    $(".imgtipo2").attr('src', 'assets/image/poison.svg');
                    break;

                case "psychic":
                    $(".imgtipo2").attr('src', 'assets/image/psychic.svg');
                    break;

                case "rock":
                    $(".imgtipo2").attr('src', 'assets/image/rock.svg');
                    break;

                case "steel":
                    $(".imgtipo2").attr('src', 'assets/image/steel.svg');
                    break;

                case "water":
                    $(".imgtipo2").attr('src', 'assets/image/water.svg');
                    break;
                default:
                    alert("ninguntipo");
                    break;
            }

            let HP = data.stats[0].base_stat
            let ataque = data.stats[1].base_stat
            let defensa = data.stats[2].base_stat
            let ataque_especial = data.stats[3].base_stat
            let defensa_especial = data.stats[4].base_stat
            let velocidad = data.stats[5].base_stat
            $(".ataque").html(ataque)
            $(".hp").html(HP)
            $(".defensa").html(defensa)
            $(".atqesp").html(ataque_especial)
            $(".defesp").html(defensa_especial)
            $(".velocidad").html(velocidad)

            canvas(HP, ataque, defensa, ataque_especial, defensa_especial, velocidad,)
        },
        dataType: 'json'
    });

}

function consultaAPI2(Pokemon) {

    $.ajax({

        type: "GET",
        url: `https://pokeapi.co/api/v2/pokemon-species/${Pokemon}`,

        success: function (pokedex) {

            console.log(pokedex)

            $("#informacion").html(null)
            $("#informacion").html(pokedex.flavor_text_entries[34].flavor_text)
            $("#informacion2").html(pokedex.genera[5].genus)
            $("#informacion3").html(pokedex.flavor_text_entries[5].flavor_text)

        },
        dataType: 'json'
    });

}

function canvas(HP, ataque, defensa, ataque_especial, defensa_especial, velocidad,) {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,

        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Estadisticas Base"
        },

        data: [{
            type: "bar", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelFontSize: 20,
            toolTipContent: "<b>{label}</b> {y}",
            showInLegend: "true",
            legendText: "{label}",
            dataPoints: [
                { y: HP, indexLabel: "\u2605 HP" },
                { y: ataque, indexLabel: "\u2605 Ataque" },
                { y: defensa, indexLabel: "\u2605 Defensa" },
                { y: ataque_especial, indexLabel: "\u2605 Ataque especial" },
                { y: defensa_especial, indexLabel: "\u2605 Defensa especial" },
                { y: velocidad, indexLabel: "\u2605 Velocidad" },

            ]
        }]
    });
    chart.render();

}



