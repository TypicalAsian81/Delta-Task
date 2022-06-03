const panelOne = document.querySelector('.panel-one');
const panelTwo = document.querySelector('.panel-two');
const panelThree = document.querySelector('.panel-three');
const panelFour = document.querySelector('.panel-four');
const panelFive = document.querySelector('.panel-five');
const panelSix = document.querySelector('.panel-six');
const panelSeven = document.querySelector('.panel-seven');
const panelEight = document.querySelector('.panel-eight');
const panelNine = document.querySelector('.panel-nine');
const panelTen = document.querySelector('.panel-ten');
const panelEleven = document.querySelector('.panel-eleven');
const panelTwelve = document.querySelector('.panel-twelve');
const panelThirteen = document.querySelector('.panel-thirteen');
const panelFourteen = document.querySelector('.panel-fourteen');
const panelFifteen = document.querySelector('.panel-fifteen');
const panelSixteen = document.querySelector('.panel-sixteen');



const getRandomPanel = () => {
    const panels = [
        panelOne,
        panelTwo,
        panelThree,
        panelFour,
        panelFive,
        panelSix,
        panelSeven,
        panelEight,
        panelNine,
        panelTen,
        panelEleven,
        panelTwelve,
        panelThirteen,
        panelFourteen,
        panelFifteen,
        panelSixteen
    ];
    
    return panels[parseInt(math.random() * panel.length)];


};

const sequence = [
    getRandomPanel()
];
let sequenceToGuess = [...sequence];

var Promise = require('promise');
"type"=="module"
// const express = require('express');
import express from 'express';

const flash = panel => {
    return new promise((resolve,reject) => {
        panel.className += 'active';
        setTimeout(() => {
        panel.className = panel.className.replace(
            'active',
            ''
        );
        resolve();
        setTimeout(() => {

        },250)   
        },1000)
    });
};

let canClick = false;
const panelClicked = panel => {
    if(!canClick) return;
    console.log("panel");
    const expectedPanel = sequenceToGuess.shift();
    if (expectedPanel == panelClicked){
        if (sequenceToGuess.length == 0){
            //start new round
        }

    }else {
           //end game
           alert('game over');
    }
};

const main = async () => {
    for (const panel of sequence) {
        await flash(panel);
    }
    canClick = true;
};

main();