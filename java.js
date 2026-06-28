*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    user-select:none;
}

html,body{
    width:100%;
    height:100%;
    overflow:hidden;
    background:#000;
    font-family:Arial,Helvetica,sans-serif;
}

body{

    background:
    radial-gradient(circle at center,#130015,#000 70%);
}

#scene{
    width:100vw;
    height:100vh;
    position:relative;
    overflow:hidden;
}

/* Tulisan */

.love{

    position:absolute;

    white-space:nowrap;

    color:#ffb6ff;

    font-weight:bold;

    text-shadow:
    0 0 5px #ff5cff,
    0 0 15px #ff5cff,
    0 0 30px #ff5cff,
    0 0 60px hotpink;

    animation:fly linear infinite;

}

@keyframes fly{

0%{

transform:
translate3d(120vw,0,0)
rotate(0deg);

opacity:0;

}

10%{

opacity:1;

}

90%{

opacity:1;

}

100%{

transform:
translate3d(-120vw,0,0)
rotate(-3deg);

opacity:0;

}

}

/* Hati */

.heart{

position:absolute;

color:#ff2d55;

filter:drop-shadow(0 0 10px red);

animation:fall linear infinite;

}

@keyframes fall{

0%{

transform:
translateY(-100px)
scale(0.5);

opacity:0;

}

15%{

opacity:1;

}

100%{

transform:
translateY(110vh)
scale(1.4);

opacity:0;

}

}

/* Bintang */

.star{

position:absolute;

width:2px;
height:2px;

background:white;

border-radius:50%;

animation:blink 2s infinite;

}

@keyframes blink{

0%,100%{

opacity:.2;

}

50%{

opacity:1;

}

}
