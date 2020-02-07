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
}

$(document).ready(function() {
  let form = $("#form");
  let hidden = $("#hidden");
  form.submit(function(event) {
    event.preventDefault();
    form.hide();
    hidden.show();
    let age = parseInt($("#age").val());
    let faveThing = $("#faveThing").val();
    let faveGenre = $("#faveGenre").val();
    let isAlien = $("input:radio[name=isAlien]:checked").val();
    let galacticAge = new GalacticAge(age);
    galacticAge.calculateLifeChoices(faveThing, faveGenre, isAlien);
    galacticAge.calculateYearsLeft();
    displayData(galacticAge);
  });
  $("#reset").click(function() {
    form.trigger("reset");
    form.show();
    hidden.hide();
  });
});