import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { GalacticAge } from "./GalacticAge.js";

function displayData(GalacticAge) {
  $("#mercuryAge").html(GalacticAge.mercuryAge);
  $("#earthAge").html(GalacticAge.earthAge);
  $("#marsAge").html(GalacticAge.marsAge);
  $("#jupiterAge").html(GalacticAge.jupiterAge);
}

$(document).ready(function() {
  let form = $("#form");
  form.submit(function(event) {
    event.preventDefault();
    form.hide();
    $("#hidden").show();
    let age = $("#age").val();
    // let faveThing = $("#faveThing");
    // let faveGenre = $("#faveGenre");
    // let isAlien = $("input:radio[name=isAlien]:checked");
    let galacticAge = new GalacticAge(age);
    galacticAge.calculateYearsLeft();
    displayData(galacticAge);
  });
});