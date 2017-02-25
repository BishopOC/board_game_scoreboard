function  scoreboard (name, scoreCounter, addButton, reduceButton, nameColor, addColor, reduceColor) {
var scoreboardApp = {

  scoreboard: 0,
  start: function(){
    this.cacheDom();
    this.addEventListeners();
    this.render();
  },
  cacheDom: function(){
    this.name = document.querySelector(name);
    this.scoreCounter = document.querySelector(scoreCounter);
    this.addButton = document.querySelector(addButton);
    this.reduceButton = document.querySelector(reduceButton);
  },
  render: function(){
    this.scoreCounter.innerHTML = this.scoreboard;
  },
  addEventListeners: function(){
    this.addButton.addEventListener('click', this.addScore.bind(this));
    this.reduceButton.addEventListener('click', this.reduceScore.bind(this));
    this.name.addEventListener('blur', this.blur.bind(this));

  },
  addScore: function(){
    this.scoreboard += 1;
    this.render();
  },
  reduceScore: function(){
    this.scoreboard -= 1;
    this.render();
  },
  blur: function(){
    // this.name.style.border = 'solid 5px';
    // this.name.style.borderColor = "";
    this.name.style.backgroundColor = nameColor;
    this.addButton.style.backgroundColor = addColor;
    this.reduceButton.style.backgroundColor = reduceColor;
  }
};
return scoreboardApp;
}
var scoreboardp1 = scoreboard('.p1', '.score1', '.p1add', '.p1reduce', '#ED0E0E', '#FF4242', '#FF4242');
scoreboardp1.start();

var scoreboardp2 = scoreboard('.p2', '.score2', '.p2add', '.p2reduce','#1AED9C','#42FFD2','#42FFD2');
scoreboardp2.start();

var scoreboardp3 = scoreboard('.p3', '.score3', '.p3add', '.p3reduce','#53ED00','#42FF6B','#42FF6B');
scoreboardp3.start();

var scoreboardp4 = scoreboard('.p4', '.score4', '.p4add', '.p4reduce','#EA19C4','#FF42FF','#FF42FF');
scoreboardp4.start();

var scoreboardp5 = scoreboard('.p5', '.score5', '.p5add', '.p5reduce','#253DED','#4255FF','#4255FF');
scoreboardp5.start();

var scoreboardp6 = scoreboard('.p6', '.score6', '.p6add', '.p6reduce','#FF6D0C','#FF7E42','#FF7E42');
scoreboardp6.start();

var scoreboardp7 = scoreboard('.p7', '.score7', '.p7add', '.p7reduce', '#ED0E0E', '#FF4242', '#FF4242');
scoreboardp7.start();

var scoreboardp8 = scoreboard('.p8', '.score8', '.p8add', '.p8reduce', '#1AED9C','#42FFD2','#42FFD2');
scoreboardp8.start();

var scoreboardp9 = scoreboard('.p9', '.score9', '.p9add', '.p9reduce', '#53ED00','#42FF6B','#42FF6B');
scoreboardp9.start();

var scoreboardp10 = scoreboard('.p10', '.score10', '.p10add', '.p10reduce', '#EA19C4','#FF42FF','#FF42FF');
scoreboardp10.start();

var scoreboardp11 = scoreboard('.p11', '.score11', '.p11add', '.p11reduce', '#253DED','#4255FF','#4255FF');
scoreboardp11.start();

var scoreboardp12 = scoreboard('.p12', '.score12', '.p12add', '.p12reduce', '#FF6D0C','#FF7E42','#FF7E42');
scoreboardp12.start();

 
var headerBlur = {
  start: function(){
    headerBlur.cacheDom();
    headerBlur.addEventListeners();
  },
  cacheDom: function(){
    headerBlur.header = document.querySelector('header input.header');
    headerBlur.header2 = document.querySelector('header input.header2');
  },
  addEventListeners: function(){
    headerBlur.header.addEventListener('blur', headerBlur.blur);
    headerBlur.header2.addEventListener('blur', headerBlur.blur2);
  },
  blur: function(){
    headerBlur.header.style.backgroundColor = 'black';
  },
  blur2: function (){
    headerBlur.header2.style.backgroundColor = 'black';
  }
};
headerBlur.start();
