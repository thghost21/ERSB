let bank = 100


const players = [
  { teamNumber: 1, emoji: '🏃‍♂️', skill: 10, name: "D'Marcus Williums" },
  { teamNumber: 1, emoji: '🤾‍♂️', skill: 30, name: "Tyroil Smoochie-Wallace" },
  { teamNumber: 1, emoji: '🏇', skill: 88, name: "Jackmerius Tacktheratrix" },
  { teamNumber: 1, emoji: '🏌️‍♀️', skill: 15, name: "Javaris Jamar Javarison-Lamar" },
  { teamNumber: 1, emoji: '🏋️‍♂️', skill: 77, name: "D'Pez Poopsie" },
  { teamNumber: 1, emoji: '🏌️‍♂️', skill: 21, name: "D'Jasper Probincrux III" },
  { teamNumber: 1, emoji: '🤾', skill: 5, name: "Leoz Maxwell Jilliumz" },
  { teamNumber: 1, emoji: '🏂', skill: 99, name: "Hingle McCringleberry" },
  { teamNumber: 1, emoji: '🧘‍♀️', skill: 50, name: "L'Carpetron Dookmarriot" },
  { teamNumber: 1, emoji: '🚶‍♀️', skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
  { teamNumber: 2, emoji: '🏋️‍♀️', skill: 61, name: "Saggitariutt Jefferspin" },
  { teamNumber: 2, emoji: '🤺', skill: 34, name: "Quatro Quatro" },
  { teamNumber: 2, emoji: '🏄', skill: 71, name: "X-Wing @Aliciousness" },
  { teamNumber: 2, emoji: '🧜‍♂️', skill: 76, name: "Bisquiteen Trisket" },
  { teamNumber: 2, emoji: '🤸', skill: 47, name: "Scoish Velociraptor Maloish" },
  { teamNumber: 2, emoji: '⛹️‍♀️', skill: 23, name: "Donkey Teeth" },
  { teamNumber: 2, emoji: '🕴️', skill: 58, name: "T.J. A.J. R.J. Backslashinfourth V" },
  { teamNumber: 2, emoji: '💃', skill: 99, name: "Firstname Lastname" },
  { teamNumber: 2, emoji: '🧍‍♂️', skill: 3, name: "Dan Smith" },
  { teamNumber: 2, emoji: '🐅', skill: 100, name: "Tiger" },
]
draftPlayers()

function betTeam1() {
  team1Skill = 0
  team2Skill = 0

  for (let i = 0; i < players.length; i++) {
    const teamScore1 = players[i];
    if (teamScore1.teamNumber == 1) {
      team1Skill += teamScore1.skill
    }
  }
  for (let i = 0; i < players.length; i++) {
    const teamScore2 = players[i];
    if (teamScore2.teamNumber == 2) {
      team2Skill += teamScore2.skill
    }
  }
  console.log(team1Skill);
  console.log(team2Skill);

  if (team1Skill > team2Skill) {
    bank += 25
    console.log('winning bet');
  } else {
    bank -= 25
    console.log('losing bet');
    console.log(bank);

  }
  checkBank()
  drawBank()
  draftPlayers()
  drawTeam1()
  drawTeam2()
}

function betTeam2() {
  team1Skill = 0
  team2Skill = 0

  for (let i = 0; i < players.length; i++) {
    const teamScore1 = players[i];
    if (teamScore1.teamNumber == 1) {
      team1Skill += teamScore1.skill
    }
  }
  for (let i = 0; i < players.length; i++) {
    const teamScore2 = players[i];
    if (teamScore2.teamNumber == 2) {
      team2Skill += teamScore2.skill
    }
  }
  console.log(team1Skill);
  console.log(team2Skill);

  if (team2Skill > team1Skill) {
    bank += 25
    console.log('winning bet');
  } else {
    bank -= 25
    console.log('losing bet');
    console.log(bank);

  }
  checkBank()
  drawBank()
  draftPlayers()
  drawTeam1()
  drawTeam2()

}

function checkBank() {
  if (bank <= 0) {
    window.alert('you lost');
  }

}

function draftPlayers() {
  console.log('drafting players');
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    player.teamNumber = randomTeam()

  }

}

function randomTeam() {
  const teamIndex = Math.floor(Math.random() * 2) + 1;
  return teamIndex



}



function drawTeam1() {
  const team1Container = document.getElementById('team1'); // Grab Where, Team 1 will draw
  team1Content = ''; // Create empty  container first
  //.. loop through players adding only those on team1
  for (let i = 0; i < players.length; i++) {
    const team1s = players[i];
    if (team1s.teamNumber == 1) {
      team1Content += team1s.emoji
    }
  }
  team1Container.innerText = team1Content
}

function drawTeam2() {
  const team2container = document.getElementById('team2');
  team2Content = '';
  for (let i = 0; i < players.length; i++) {
    const team2s = players[i];
    if (team2s.teamNumber == 2) {
      team2Content += team2s.emoji
    }
  }
  team2container.innerText = team2Content
}

function drawBank() {
  const money = document.getElementById('bank')
  money.innerText = bank
}

drawTeam1()
drawTeam2()
drawBank()