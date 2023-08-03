import React from "react";
import "./Home.css";
import moose from "./moose.jpg";
export default function run() {
  return (
        <div id ="body"><p id='keer'><b>Keerthish favorite character</b></p>
        <p2 id='header1'>Home</p2>
        <p2 id='header2'>About</p2>
        <img src={moose} alt='moose pic' id='moose'></img><div id='about'>
           <p id='info'>My name is Keerthish and my favorite character is itachi uchiha Itachi Uchiha  is one of the supporting characters and an anti-villain in the Naruto franchise. He is an ANBU Captain and a prodigy from Konohagakure's famed Uchiha clan, the son of Fugaku Uchiha, the clan's chief, and Mikoto Uchiha, and the older brother of Sasuke Uchiha
      <br />
      <br />To know more about him <a href='https://hero.fandom.com/wiki/Itachi_Uchiha'>click here</a></p>

    </div><div id='list1'>
        <p>He was  awsome becaus</p>
        <ol type='1'>
          <li>Anbu at age of 12</li>
          <li>Activated Mangekyo Sharingan</li>
          <li>Joined Akatstuki</li>
        </ol>
        <p>If i was him i will</p>
        <ul type='1'>
          <li>I will have many girl friends</li>
          <li>Use amaterasu for fun</li>
          <li>Train sasuke and naruto</li>
        </ul>
        <p>Itachi video</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jS_Y4Ok0I0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div></div>
  );
}

