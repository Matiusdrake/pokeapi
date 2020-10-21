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

    var pokemon = Math.round(Math.random() * 890);

    
    
    
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


            $("#peso").html(data.weight / 10)
            $("#altura").html(data.height / 10)
            $(".oficial").attr('src', data.sprites.front_default);
            $("oficial").attr('src', data.sprites.other["official-artwork"].front_default);
            $(".imagen1").attr('src', data.sprites.front_default);
            $(".imagen2").attr('src', data.sprites.front_shiny);
            $(".gif").attr('src', data.sprites.versions["generation-v"]["black-white"].animated.front_default);

            $("#tipo1").html(data.types[0].type.name)
            let tipo1 = data.types[0].type.name

            switch (tipo1) {

                case "bug":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_bug_Type_Icon.svg');
                    $(".formato1").css("background-color", "#A8B820");
                    $(".formato2").css("background-color", "#A8B820");
                    break;

                case "dark":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_dark_Type_Icon.svg');
                    $(".formato1").css("background-color", "#7A5848");
                    $(".formato2").css("background-color", "#7A5848");
                    break;

                case "dragon":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_dragon_Type_Icon.svg');
                    $(".formato1").css("background-color", "#7860E0");
                    $(".formato2").css("background-color", "#7860E0");
                    break;

                case "electric":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_electric_Type_Icon.svg');
                    $(".formato1").css("background-color", "#F8D030");
                    $(".formato2").css("background-color", "#F8D030");
                    break;

                case "fairy":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_fairy_Type_Icon.svg');
                    $(".formato1").css("background-color", "#E79FE7");
                    $(".formato2").css("background-color", "#E79FE7");
                    break;

                case "fighting":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_fighting_Type_Icon.svg');
                    $(".formato1").css("background-color", "#A05038");
                    $(".formato2").css("background-color", "#A05038");
                    break;

                case "fire":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_fire_Type_Icon.svg');
                    $(".formato1").css("background-color", "#F05030");
                    $(".formato2").css("background-color", "#F05030");
                    break;

                case "flying":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_flying_Type_Icon.svg');
                    $(".formato1").css("background-color", "#98A8F0");
                    $(".formato2").css("background-color", "#98A8F0");
                    break;

                case "ghost":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_ghost_Type_Icon.svg');
                    $(".formato1").css("background-color", "#6060B0");
                    $(".formato2").css("background-color", "#6060B0");
                    break;

                case "grass":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_grass_Type_Icon.svg');
                    $(".formato1").css("background-color", "#78C850");
                    $(".formato2").css("background-color", "#78C850");
                    break;

                case "ground":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_ground_Type_Icon.svg');
                    $(".formato1").css("background-color", "#E9D6A4");
                    $(".formato2").css("background-color", "#E9D6A4");
                    break;

                case "ice":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_ice_Type_Icon.svg');
                    $(".formato1").css("background-color", "#58C8E0");
                    $(".formato2").css("background-color", "#58C8E0");
                    break;

                case "normal":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_normal_Type_Icon.svg');
                    $(".formato1").css("background-color", "#A8A090");
                    $(".formato2").css("background-color", "#A8A090");
                    break;

                case "poison":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_poison_Type_Icon.svg');
                    $(".formato1").css("background-color", "#B058A0");
                    $(".formato2").css("background-color", "#B058A0");
                    break;

                case "psychic":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_psychic_Type_Icon.svg');
                    $(".formato1").css("background-color", "#F870A0");
                    $(".formato2").css("background-color", "#F870A0");
                    break;

                case "rock":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_rock_Type_Icon.svg');
                    $(".formato1").css("background-color", "#B8A058");
                    $(".formato2").css("background-color", "#B8A058");
                    break;

                case "steel":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_steel_Type_Icon.svg');
                    $(".formato1").css("background-color", "#A8A8C0");
                    $(".formato2").css("background-color", "#A8A8C0");
                    break;

                case "water":
                    $(".imgtipo1").attr('src', 'assets/image/Pokémon_water_Type_Icon.svg');
                    $(".formato1").css("background-color", "#3899F8");
                    $(".formato2").css("background-color", "#3899F8");
                    break;
                default:
                    alert("no se que pasa");
                    break;
            }

            $("#tipo2").html(data.types[1].type.name)
            let tipo2 = data.types[1].type.name

           

                switch (tipo2) {

                    case "bug":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_bug_Type_Icon.svg');
                        break;

                    case "dark":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_dark_Type_Icon.svg');
                        break;

                    case "dragon":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_dragon_Type_Icon.svg');
                        break;

                    case "electric":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_electric_Type_Icon.svg');
                        break;

                    case "fairy":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_fairy_Type_Icon.svg');
                        break;

                    case "fighting":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_fighting_Type_Icon.svg');
                        break;

                    case "fire":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_fire_Type_Icon.svg');
                        break;

                    case "flying":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_flying_Type_Icon.svg');
                        break;

                    case "ghost":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_ghost_Type_Icon.svg');
                        break;

                    case "grass":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_grass_Type_Icon.svg');
                        break;

                    case "ground":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_ground_Type_Icon.svg');
                        break;

                    case "ice":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_ice_Type_Icon.svg');
                        break;

                    case "normal":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_normal_Type_Icon.svg');
                        break;

                    case "poison":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_poison_Type_Icon.svg');
                        break;

                    case "psychic":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_psychic_Type_Icon.svg');
                        break;

                    case "rock":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_rock_Type_Icon.svg');
                        break;

                    case "steel":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_steel_Type_Icon.svg');
                        break;

                    case "water":
                        $(".imgtipo2").attr('src', 'assets/image/Pokémon_water_Type_Icon.svg');
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




$(body)
