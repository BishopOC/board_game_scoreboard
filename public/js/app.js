var scoreboardApp = {
  scoreboard: 0,
  start: function(){
    scoreboardApp.cacheDom();
    scoreboardApp.addEventListeners();
    scoreboardApp.render();
  },
  cacheDom: function(){
    scoreboardApp.name = document.querySelector('.p1');
    scoreboardApp.scoreCounter = document.querySelector('.score1');
    scoreboardApp.addButton = document.querySelector('.p1add');
    scoreboardApp.reduceButton = document.querySelector('.p1reduce');
  },
  render: function(){
    scoreboardApp.scoreCounter.innerHTML = scoreboardApp.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp.addButton.addEventListener('click', scoreboardApp.addScore);
    scoreboardApp.reduceButton.addEventListener('click', scoreboardApp.reduceScore);
    scoreboardApp.name.addEventListener('blur', scoreboardApp.blur);
  },
  addScore: function(){
    scoreboardApp.scoreboard += 1;
    scoreboardApp.render();
  },
  reduceScore: function(){
    scoreboardApp.scoreboard -= 1;
    scoreboardApp.render();
  },
  blur: function(){
    scoreboardApp.name.style.border = "thick none black";
  }
};
scoreboardApp.start();

var scoreboardApp2 = {
  scoreboard: 0,
  start: function(){
    scoreboardApp2.cacheDom();
    scoreboardApp2.addEventListeners();
    scoreboardApp2.render();
  },
  cacheDom: function(){
    scoreboardApp2.name = document.querySelector('.p2');
    scoreboardApp2.scoreCounter = document.querySelector('.score2');
    scoreboardApp2.addButton = document.querySelector('.p2add');
    scoreboardApp2.reduceButton = document.querySelector('.p2reduce');
  },
  render: function(){
    scoreboardApp2.scoreCounter.innerHTML = scoreboardApp2.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp2.addButton.addEventListener('click', scoreboardApp2.addScore);
    scoreboardApp2.reduceButton.addEventListener('click', scoreboardApp2.reduceScore);
    scoreboardApp2.name.addEventListener('blur', scoreboardApp2.blur);
  },
  addScore: function(){
    scoreboardApp2.scoreboard += 1;
    scoreboardApp2.render();
  },
  reduceScore: function(){
    scoreboardApp2.scoreboard -= 1;
    scoreboardApp2.render();
  },
  blur: function(){
    scoreboardApp2.name.style.border = "thick none black";
  }
};
scoreboardApp2.start();

var scoreboardApp3 = {
  scoreboard: 0,
  start: function(){
    scoreboardApp3.cacheDom();
    scoreboardApp3.addEventListeners();
    scoreboardApp3.render();
  },
  cacheDom: function(){
    scoreboardApp3.name = document.querySelector('.p3');
    scoreboardApp3.scoreCounter = document.querySelector('.score3');
    scoreboardApp3.addButton = document.querySelector('.p3add');
    scoreboardApp3.reduceButton = document.querySelector('.p3reduce');
  },
  render: function(){
    scoreboardApp3.scoreCounter.innerHTML = scoreboardApp3.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp3.addButton.addEventListener('click', scoreboardApp3.addScore);
    scoreboardApp3.reduceButton.addEventListener('click', scoreboardApp3.reduceScore);
    scoreboardApp3.name.addEventListener('blur', scoreboardApp3.blur);
  },
  addScore: function(){
    scoreboardApp3.scoreboard += 1;
    scoreboardApp3.render();
  },
  reduceScore: function(){
    scoreboardApp3.scoreboard -= 1;
    scoreboardApp3.render();
  },
  blur: function(){
    scoreboardApp3.name.style.border = "thick none black";
  }
};
scoreboardApp3.start();

var scoreboardApp4 = {
  scoreboard: 0,
  start: function(){
    scoreboardApp4.cacheDom();
    scoreboardApp4.addEventListeners();
    scoreboardApp4.render();
  },
  cacheDom: function(){
    scoreboardApp4.name = document.querySelector('.p4');
    scoreboardApp4.scoreCounter = document.querySelector('.score4');
    scoreboardApp4.addButton = document.querySelector('.p4add');
    scoreboardApp4.reduceButton = document.querySelector('.p4reduce');
  },
  render: function(){
    scoreboardApp4.scoreCounter.innerHTML = scoreboardApp4.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp4.addButton.addEventListener('click', scoreboardApp4.addScore);
    scoreboardApp4.reduceButton.addEventListener('click', scoreboardApp4.reduceScore);
    scoreboardApp4.name.addEventListener('blur', scoreboardApp4.blur);
  },
  addScore: function(){
    scoreboardApp4.scoreboard += 1;
    scoreboardApp4.render();
  },
  reduceScore: function(){
    scoreboardApp4.scoreboard -= 1;
    scoreboardApp4.render();
  },
  blur: function(){
    scoreboardApp4.name.style.border = "thick none black";
  }
};
scoreboardApp4.start();

var scoreboardApp5 = {
  scoreboard: 0,
  start: function(){
    scoreboardApp5.cacheDom();
    scoreboardApp5.addEventListeners();
    scoreboardApp5.render();
  },
  cacheDom: function(){
    scoreboardApp5.name = document.querySelector('.p5');
    scoreboardApp5.scoreCounter = document.querySelector('.score5');
    scoreboardApp5.addButton = document.querySelector('.p5add');
    scoreboardApp5.reduceButton = document.querySelector('.p5reduce');
  },
  render: function(){
    scoreboardApp5.scoreCounter.innerHTML = scoreboardApp5.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp5.addButton.addEventListener('click', scoreboardApp5.addScore);
    scoreboardApp5.reduceButton.addEventListener('click', scoreboardApp5.reduceScore);
    scoreboardApp5.name.addEventListener('blur', scoreboardApp5.blur);
  },
  addScore: function(){
    scoreboardApp5.scoreboard += 1;
    scoreboardApp5.render();
  },
  reduceScore: function(){
    scoreboardApp5.scoreboard -= 1;
    scoreboardApp5.render();
  },
  blur: function(){
    scoreboardApp5.name.style.border = "thick none black";
  }
};
scoreboardApp5.start();

var scoreboardApp6 = {
  scoreboard: 0,
  start: function(){
    scoreboardApp6.cacheDom();
    scoreboardApp6.addEventListeners();
    scoreboardApp6.render();
  },
  cacheDom: function(){
    scoreboardApp6.name = document.querySelector('.p6');
    scoreboardApp6.scoreCounter = document.querySelector('.score6');
    scoreboardApp6.addButton = document.querySelector('.p6add');
    scoreboardApp6.reduceButton = document.querySelector('.p6reduce');
  },
  render: function(){
    scoreboardApp6.scoreCounter.innerHTML = scoreboardApp6.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp6.addButton.addEventListener('click', scoreboardApp6.addScore);
    scoreboardApp6.reduceButton.addEventListener('click', scoreboardApp6.reduceScore);
    scoreboardApp6.name.addEventListener('blur', scoreboardApp6.blur);
  },
  addScore: function(){
    scoreboardApp6.scoreboard += 1;
    scoreboardApp6.render();
  },
  reduceScore: function(){
    scoreboardApp6.scoreboard -= 1;
    scoreboardApp6.render();
  },
  blur: function(){
    scoreboardApp6.name.style.border = "thin none black";
  }
};
scoreboardApp6.start();
