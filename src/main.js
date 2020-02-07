import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { GalacticAge } from "./GalacticAge.js";

function displayData(GalacticAge) {
  $("#mercuryAge").html(GalacticAge.mercuryAge);
  $("#mercuryYearsLeft").html(GalacticAge.mercuryYearsLeft);
  $("#earthAge").html(GalacticAge.earthAge);
  $("#earthYearsLeft").html(GalacticAge.earthYearsLeft);
  $("#marsAge").html(GalacticAge.marsAge);
  $("#marsYearsLeft").html(GalacticAge.marsYearsLeft);
  $("#jupiterAge").html(GalacticAge.jupiterAge);
  $("#jupiterYearsLeft").html(GalacticAge.jupiterYearsLeft);
  console.log(GalacticAge)
}

$(document).ready(function() {
  let form = $("#form");
  form.submit(function(event) {
    event.preventDefault();
    form.hide();
    $("#hidden").show();
    let age = parseInt($("#age").val());
    let faveThing = $("#faveThing").val();
    let faveGenre = $("#faveGenre").val();
    let isAlien = $("input:radio[name=isAlien]:checked").val();
    console.log(`Age: ${age}, faveThing: ${faveThing}, faveGenre: ${faveGenre}, isAlien: ${isAlien}`)
    let galacticAge = new GalacticAge(age);
    console.log(galacticAge);
    galacticAge.calculateLifeChoices(faveThing, faveGenre, isAlien);
    galacticAge.calculateYearsLeft();
    displayData(galacticAge);
  });
});