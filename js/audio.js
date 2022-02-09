window.onload = init;
let isOn = false;
function init(){
    console.log('audio init');
    const number_1 = document.querySelector('#card_number_1');
    const number_2 = document.querySelector('#card_number_2');
    const number_3 = document.querySelector('#card_number_3');
    const number_4 = document.querySelector('#card_number_4');
    const number_5 = document.querySelector('#card_number_5');
    const number_6 = document.querySelector('#card_number_6');
    const number_7 = document.querySelector('#card_number_7');
    const skip = document.querySelector('#card_skip');
    const retoure = document.querySelector('#card_retoure');
    const draw_2 = document.querySelector('#card_draw_2');
    const color = document.querySelector('#card_draw_4_color');

    number_1.addEventListener("targetFound", event => {
        playAudio('Assets/audio/card_number_1.mp3');
    });
    number_2.addEventListener("targetFound", event => {
        playAudio('Assets/audio/card_number_2.mp3');
    });
    number_3.addEventListener("targetFound", event => {
        playAudio('Assets/audio/card_number_3.mp3');
    });
    number_4.addEventListener("targetFound", event => {
        playAudio('Assets/audio/card_number_4.mp3');
    });
    number_5.addEventListener("targetFound", event => {
        playAudio('Assets/audio/card_number_5.mp3');
    });
    number_6.addEventListener("targetFound", event => {
        playAudio('Assets/audio/card_number_6.mp3');
    });
    number_7.addEventListener("targetFound", event => {
        playAudio('Assets/audio/card_number_7.mp3');
    });
    skip.addEventListener("targetFound", event => {
        playAudio('Assets/audio/card_skip.mp3');
    });
    retoure.addEventListener("targetFound", event => {
        playAudio('Assets/audio/card_retoure.mp3');
    });
    draw_2.addEventListener("targetFound", event => {
        playAudio('Assets/audio/card_draw_2.mp3');
    });
    color.addEventListener("targetFound", event => {
        playAudio('Assets/audio/card_draw_4_color.mp3');
    });

    var elem = document.getElementById('toggleAudio');
    elem.onclick = toggleclass;
}

function toggleclass(){
    console.log(this.attributes.class);
    var activeclass = 'state--active';
    var slider = document.getElementById('slider');
    var addsliderclass = 'slider--active'
    var state = this.getAttribute('class');

    if(!state){
        this.setAttribute('class', activeclass);
        slider.setAttribute('class', addsliderclass);
        isOn = true;
    }else{
        this.removeAttribute('class');
        slider.removeAttribute('class');
        isOn = false;
    }
    console.log(isOn);
}

function playAudio(audio) {
    console.log('pluy')
    if (isOn) {
        new Audio(audio).play();
    }

}
$(document).ready(function() {
    $('#infomodal').modal('show');
});