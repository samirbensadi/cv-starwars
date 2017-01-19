var audioPlayer = document.getElementById('audioplayer'),
    generic = document.getElementById('generic'),
    mute_btn = document.createElement('button');

mute_btn.id = 'mute';
audioPlayer.appendChild(mute_btn);
generic.removeAttribute("controls");

mute_btn.addEventListener("click", muter);
document.getElementById('mute').style.height = "50px";
document.getElementById('mute').style.width = "50px";
document.getElementById('mute').style.backgroundImage = "url('./assets/img/vol_off.png')";
document.getElementById('mute').style.backgroundSize = "cover";
document.getElementById('mute').style.backgroundColor = "#000";
document.getElementById('mute').style.border = "none";
document.getElementById('mute').style.ouline = "none";

function muter() {
    if (generic.volume == 0) {
        document.getElementById('mute').style.backgroundImage = "url('./assets/img/vol_off.png')";
        generic.volume = 1;
    } else {
        document.getElementById('mute').style.backgroundImage = "url('./assets/img/vol_on.png')";
        generic.volume = 0;
    }
}
