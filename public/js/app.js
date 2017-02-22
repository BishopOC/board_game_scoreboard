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
    // scoreboardApp.name.style.border = 'solid 5px';
    // scoreboardApp.name.style.borderColor = "";
    scoreboardApp.name.style.backgroundColor = '#ED0E0E';
    scoreboardApp.header.style.backgroundColor = 'black';
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
    // scoreboardApp2.name.style.border = 'solid 5px';
    // scoreboardApp2.name.style.borderColor = "#C1AC81 #F7D7A3 #C1AC81 #A89674";
    scoreboardApp2.name.style.backgroundColor = '#1AED9C';
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
    // scoreboardApp3.name.style.border = 'solid 5px';
    // scoreboardApp3.name.style.borderColor = "#C1BF81 #F7F7A3 #C1BF81 #A8A374";
    scoreboardApp3.name.style.backgroundColor = '#53ED00';

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
    // scoreboardApp4.name.style.border = 'solid 5px';
    // scoreboardApp4.name.style.borderColor = "#83C4A3 #A2F9CC #83C4A3 #75AA90";
    scoreboardApp4.name.style.backgroundColor = '#EA19C4';
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
    // scoreboardApp5.name.style.border = 'solid 5px';
    // scoreboardApp5.name.style.borderColor = "#83C4A3 #A2F9CC #83C4A3 #75AA90";
    scoreboardApp5.name.style.backgroundColor = '#253DED';
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
    // scoreboardApp6.name.style.border = 'solid 5px';
    // scoreboardApp6.name.style.borderColor = "#83C4A3 #A2F9CC #83C4A3 #75AA90";
    scoreboardApp6.name.style.backgroundColor = '#FF6D0C';
  }
};
scoreboardApp6.start();

var scoreboardApp7 = {
  scoreboard: 0,
  start: function(){
    scoreboardApp7.cacheDom();
    scoreboardApp7.addEventListeners();
    scoreboardApp7.render();
  },
  cacheDom: function(){
    scoreboardApp7.name = document.querySelector('.p7');
    scoreboardApp7.scoreCounter = document.querySelector('.score7');
    scoreboardApp7.addButton = document.querySelector('.p7add');
    scoreboardApp7.reduceButton = document.querySelector('.p7reduce');
  },
  render: function(){
    scoreboardApp7.scoreCounter.innerHTML = scoreboardApp7.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp7.addButton.addEventListener('click', scoreboardApp7.addScore);
    scoreboardApp7.reduceButton.addEventListener('click', scoreboardApp7.reduceScore);
    scoreboardApp7.name.addEventListener('blur', scoreboardApp7.blur);
  },
  addScore: function(){
    scoreboardApp7.scoreboard += 1;
    scoreboardApp7.render();
  },
  reduceScore: function(){
    scoreboardApp7.scoreboard -= 1;
    scoreboardApp7.render();
  },
  blur: function(){
    // scoreboardApp.name.style.border = 'solid 5px';
    // scoreboardApp.name.style.borderColor = "";
    scoreboardApp7.name.style.backgroundColor = '#ED0E0E';
  }
};
scoreboardApp7.start();

var scoreboardApp8 = {
  scoreboard: 0,
  start: function(){
    scoreboardApp8.cacheDom();
    scoreboardApp8.addEventListeners();
    scoreboardApp8.render();
  },
  cacheDom: function(){
    scoreboardApp8.name = document.querySelector('.p8');
    scoreboardApp8.scoreCounter = document.querySelector('.score8');
    scoreboardApp8.addButton = document.querySelector('.p8add');
    scoreboardApp8.reduceButton = document.querySelector('.p8reduce');
  },
  render: function(){
    scoreboardApp8.scoreCounter.innerHTML = scoreboardApp8.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp8.addButton.addEventListener('click', scoreboardApp8.addScore);
    scoreboardApp8.reduceButton.addEventListener('click', scoreboardApp8.reduceScore);
    scoreboardApp8.name.addEventListener('blur', scoreboardApp8.blur);
  },
  addScore: function(){
    scoreboardApp8.scoreboard += 1;
    scoreboardApp8.render();
  },
  reduceScore: function(){
    scoreboardApp8.scoreboard -= 1;
    scoreboardApp8.render();
  },
  blur: function(){
    // scoreboardApp2.name.style.border = 'solid 5px';
    // scoreboardApp2.name.style.borderColor = "#C1AC81 #F7D7A3 #C1AC81 #A89674";
    scoreboardApp8.name.style.backgroundColor = '#1AED9C';
  }
};
scoreboardApp8.start();

var scoreboardApp9 = {
  scoreboard: 0,
  start: function(){
    scoreboardApp9.cacheDom();
    scoreboardApp9.addEventListeners();
    scoreboardApp9.render();
  },
  cacheDom: function(){
    scoreboardApp9.name = document.querySelector('.p9');
    scoreboardApp9.scoreCounter = document.querySelector('.score9');
    scoreboardApp9.addButton = document.querySelector('.p9add');
    scoreboardApp9.reduceButton = document.querySelector('.p9reduce');
  },
  render: function(){
    scoreboardApp9.scoreCounter.innerHTML = scoreboardApp9.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp9.addButton.addEventListener('click', scoreboardApp9.addScore);
    scoreboardApp9.reduceButton.addEventListener('click', scoreboardApp9.reduceScore);
    scoreboardApp9.name.addEventListener('blur', scoreboardApp9.blur);
  },
  addScore: function(){
    scoreboardApp9.scoreboard += 1;
    scoreboardApp9.render();
  },
  reduceScore: function(){
    scoreboardApp9.scoreboard -= 1;
    scoreboardApp9.render();
  },
  blur: function(){
    // scoreboardApp3.name.style.border = 'solid 5px';
    // scoreboardApp3.name.style.borderColor = "#C1BF81 #F7F7A3 #C1BF81 #A8A374";
    scoreboardApp9.name.style.backgroundColor = '#53ED00';

  }
};
scoreboardApp9.start();

var scoreboardApp10 = {
  scoreboard: 0,
  start: function(){
    scoreboardApp10.cacheDom();
    scoreboardApp10.addEventListeners();
    scoreboardApp10.render();
  },
  cacheDom: function(){
    scoreboardApp10.name = document.querySelector('.p10');
    scoreboardApp10.scoreCounter = document.querySelector('.score10');
    scoreboardApp10.addButton = document.querySelector('.p10add');
    scoreboardApp10.reduceButton = document.querySelector('.p10reduce');
  },
  render: function(){
    scoreboardApp10.scoreCounter.innerHTML = scoreboardApp10.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp10.addButton.addEventListener('click', scoreboardApp10.addScore);
    scoreboardApp10.reduceButton.addEventListener('click', scoreboardApp10.reduceScore);
    scoreboardApp10.name.addEventListener('blur', scoreboardApp10.blur);
  },
  addScore: function(){
    scoreboardApp10.scoreboard += 1;
    scoreboardApp10.render();
  },
  reduceScore: function(){
    scoreboardApp10.scoreboard -= 1;
    scoreboardApp10.render();
  },
  blur: function(){
    // scoreboardApp10.name.style.border = 'solid 5px';
    // scoreboardApp10.name.style.borderColor = "#83C4A3 #A2F9CC #83C4A3 #75AA90";
    scoreboardApp10.name.style.backgroundColor = '#EA19C4';
  }
};
scoreboardApp10.start();

var scoreboardApp11 = {
  scoreboard: 0,
  start: function(){
    scoreboardApp11.cacheDom();
    scoreboardApp11.addEventListeners();
    scoreboardApp11.render();
  },
  cacheDom: function(){
    scoreboardApp11.name = document.querySelector('.p11');
    scoreboardApp11.scoreCounter = document.querySelector('.score11');
    scoreboardApp11.addButton = document.querySelector('.p11add');
    scoreboardApp11.reduceButton = document.querySelector('.p11reduce');
  },
  render: function(){
    scoreboardApp11.scoreCounter.innerHTML = scoreboardApp11.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp11.addButton.addEventListener('click', scoreboardApp11.addScore);
    scoreboardApp11.reduceButton.addEventListener('click', scoreboardApp11.reduceScore);
    scoreboardApp11.name.addEventListener('blur', scoreboardApp11.blur);
  },
  addScore: function(){
    scoreboardApp11.scoreboard += 1;
    scoreboardApp11.render();
  },
  reduceScore: function(){
    scoreboardApp11.scoreboard -= 1;
    scoreboardApp11.render();
  },
  blur: function(){
    // scoreboardApp11.name.style.border = 'solid 5px';
    // scoreboardApp11.name.style.borderColor = "#83C4A3 #A2F9CC #83C4A3 #75AA90";
    scoreboardApp11.name.style.backgroundColor = '#253DED';
  }
};
scoreboardApp11.start();

var scoreboardApp12 = {
  scoreboard: 0,
  start: function(){
    scoreboardApp12.cacheDom();
    scoreboardApp12.addEventListeners();
    scoreboardApp12.render();
  },
  cacheDom: function(){
    scoreboardApp12.name = document.querySelector('.p12');
    scoreboardApp12.scoreCounter = document.querySelector('.score12');
    scoreboardApp12.addButton = document.querySelector('.p12add');
    scoreboardApp12.reduceButton = document.querySelector('.p12reduce');
  },
  render: function(){
    scoreboardApp12.scoreCounter.innerHTML = scoreboardApp12.scoreboard;
  },
  addEventListeners: function(){
    scoreboardApp12.addButton.addEventListener('click', scoreboardApp12.addScore);
    scoreboardApp12.reduceButton.addEventListener('click', scoreboardApp12.reduceScore);
    scoreboardApp12.name.addEventListener('blur', scoreboardApp12.blur);
  },
  addScore: function(){
    scoreboardApp12.scoreboard += 1;
    scoreboardApp12.render();
  },
  reduceScore: function(){
    scoreboardApp12.scoreboard -= 1;
    scoreboardApp12.render();
  },
  blur: function(){
    // scoreboardApp12.name.style.border = 'solid 5px';
    // scoreboardApp12.name.style.borderColor = "#83C4A3 #A2F9CC #83C4A3 #75AA90";
    scoreboardApp12.name.style.backgroundColor = '#FF6D0C';
  }
};
scoreboardApp12.start();

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
