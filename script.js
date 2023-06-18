const music = new Audio('audio/1.mp3');
//music.play();

const songs = [
    {
        id: 1,
        songName: `Milne Hai Mujhse Aayi <br>
            <div class= "subtitle" > Arjit shing</div> `,
        poster: "img/img1.jpeg"
    },

    {
        id: 2,
        songName: `Ghoomar <br>
            <div class= "subtitle" > sherya goshal</div> `,
        poster: "img/img2.jpeg"
    },

    {
        id: 3,
        songName: `Ae Watan <br>
            <div class= "subtitle" > Sunidhi Chauhan</div> `,
        poster: "img/img3.jpeg"
    },

    {
        id: 4,
        songName: `Apna Time Aayega <br>
            <div class= "subtitle" > Ranveer Singh, Divine</div> `,
        poster: "img/img4.jpeg"
    },
    {
        id: 5,
        songName: `Pachtaoge<br>
            <div class= "subtitle" > Arjit shing</div> `,
        poster: "img/img5.jpeg"
    },
    {
        id: 6,
        songName: `O Saki Saki<br>
            <div class= "subtitle" > Tulsi Kumar, Neha Kakkar</div> `,
        poster: "img/img6.jpeg"
    },
    {
        id: 7,
        songName: `Chand Sifarish<br>
            <div class= "subtitle" >Shaan, Kailash Kher</div> `,
        poster: "img/img7.jpeg"
    },
    {
        id: 8,
        songName: `Kar Har maidaan fateh <br>
            <div class= "subtitle" > Sukhwinder Singh,Sherya Ghoshal</div> `,
        poster: "img/img8.jpeg"
    },
    {
        id: 9,
        songName: `Ek Mulaqat <br>
            <div class= "subtitle" > Altamash faridi</div> `,
        poster: "img/img9.jpeg"
    },
    {
        id: 10,
        songName: `Filhall <br>
            <div class= "subtitle" > B Praak</div> `,
        poster: "img/img10.jpeg"
    },
    {
        id: 11,
        songName: `Garmi <br>
            <div class= "subtitle" > Badsaah, Neha Kakkar </div> `,
        poster: "img/img11.jpeg"
    },
    {
        id: 12,
        songName: `Hasi Ban Gaye <br>
            <div class= "subtitle" > Ami Mishra</div> `,
        poster: "img/img12.jpeg"
    },
    {
        id: 13,
        songName: `Illegal Weapon <br>
            <div class= "subtitle" > Garry Sandhu, Jasmine Sandlas</div> `,
        poster: "img/img13.jpeg"
    },
    {
        id: 14,
        songName: `Jitni Dafa <br>
            <div class= "subtitle" > Yasser Desal</div> `,
        poster: "img/img14.jpeg"
    },
    {
        id: 15,
        songName: `Meri Intkam Dekhegi <br>
            <div class= "subtitle" > Krishna Beuraa</div> `,
        poster: "img/img15.jpeg"
    },
    {
        id: 16,
        songName: `Mercy <br>
            <div class= "subtitle" > Badshah</div> `,
        poster: "img/img16.jpeg"
    },
    {
        id: 17,
        songName: `Humnava Mere <br>
            <div class= "subtitle" > Rocky-Shiv</div> `,
        poster: "img/img17.jpeg"
    },
    {
        id: 18,
        songName: `Pal Pal Dil Ke Pass <br>
            <div class= "subtitle" > Arijit singh, Parampara Thakur</div> `,
        poster: "img/img18.jpeg"
    },
    {
        id: 19,
        songName: `Saanson Ko<br>
            <div class= "subtitle" > Arijit Singh, Toshi</div> `,
        poster: "img/img19.jpeg"
    },
    {
        id: 20,
        songName: `Teri Mitti<br>
            <div class= "subtitle" > Arko</div> `,
        poster: "img/img20.jpeg"
    },
    {
        id: 21,
        songName: `Tu Jo Hain <br>
            <div class= "subtitle" > Ankit Tiwari</div> `,
        poster: "img/img21.jpeg"
    },
    {
        id: 22,
        songName: `On My Way <br>
            <div class= "subtitle" > Alan Walker</div> `,
        poster: "img/img22.jpeg"
    },
    {
        id: 23,
        songName: `Tu Zaroori <br>
            <div class= "subtitle" > Shunidi Chauhan, Shaarib Sabri</div> `,
        poster: "img/img23.jpeg"
    },
    {
        id: 24,
        songName: `Teri Ban Jaungi Reprise<br>
            <div class= "subtitle" > Tulsi Kumar</div> `,
        poster: "img/img24.jpeg"
    },
    {
        id: 25,
        songName: `Tum Hi Aana <br>
            <div class= "subtitle" > Jubin Nautiyal, Payal Dev</div> `,
        poster: "img/img25.jpeg"
    },
    {
        id: 26,
        songName: `Dil mai ho tum<br>
            <div class= "subtitle" > Armaan Malik</div> `,
        poster: "img/img26.jpeg"
    },
    {
        id: 27,
        songName: `Woh Ladki Bahut Yaad Aati <br>
            <div class= "subtitle" > Kumar Sanu, Alka Yagnik</div> `,
        poster: "img/img27.jpeg"
    },
    {
        id: 28,
        songName: `Dilbar <br>
            <div class= "subtitle" >Neha Kakkar, Dhvanushali, Ikka Singh</div> `,
        poster: "img/img28.jpeg"
    },
    {
        id: 29,
        songName: `Agar Tum Saath Ho<br>
            <div class= "subtitle" >Alka Yagnik, Arijit Singh</div> `,
        poster: "img/img29.jpeg"
    },
    {
        id: 30,
        songName: `Tu Pyaar hai kisi Aur ka <br>
            <div class= "subtitle" > Kumar Sanu, Anuradha Paudwal</div> `,
        poster: "img/img30.jpeg"
    },

]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}




let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/img${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });

        makeAllBackground()
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
    });

})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    //console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;

    }
    currentEnd.innerText = `${min1}:${sec1}`;


    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});


seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/img${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
});

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/img${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
});










let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});
