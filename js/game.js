let gameObject = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player('Warrior', 20, 100, 0, 20, 10);
                break;
            case "Rogue":
                player = new Player('Rogue', 16, 80, 0, 40, 10);
                break;
            case "Wizard":
                player = new Player('Wizard', 10, 60, 50, 18, 10);
                break;
            case "Hunter":
                player = new Player('Hunter', 16, 80, 0, 40, 10);
                break;
            default:
                player = new Player('Warrior', 20, 100, 0, 20, 10);
                break;
        }
        let getInterface = document.getElementById('interface');
        getInterface.innerHTML = `<div class="player-stats">
        <img src="./images/${player.classType.toLowerCase()}.png" alt="">
        <h3>${player.classType}</h3>
        <p>Strength: ${player.strength}</p> 
        <p id="player-health">Health: ${player.health}</p> 
        <p>Mana: ${player.mana}</p> 
        <p>Agility: ${player.agility}</p> 
        <p>Speed: ${player.speed}</p>                           
        </div>`;
        //console.log(player);
    },
    setPreFight: function () {
        //console.log('generate random enemy');
        let getHeader = document.getElementById('header');
        let getActions = document.getElementById('actions');
        let getArena = document.getElementById('arena');
        getHeader.innerHTML = '<p>Objective: Find Your Enemy</p>';
        getActions.innerHTML = `<button class='prefight-btn' onclick='gameObject.setFight()'>Search for an Enemy</button>`;
        getArena.style.visibility = 'visible';
    },
    setFight: function () {
        let getHeader = document.getElementById('header');
        let getActions = document.getElementById('actions');
        let getEnemy = document.getElementById('enemy');
        enemy = new Enemy('Goblin', 20, 100, 0, 10, 5);
        getHeader.innerHTML = '<p>Objective: Choose your Action</p>';
        getActions.innerHTML = `<button class='prefight-btn' onclick='PlayerMoves.calcAttack()'>Attack!</button>`;
        getEnemy.innerHTML = `<div class="player-stats">
        <img src="./images/${enemy.name.toLowerCase()}.png" alt="">
        <h3>${enemy.name}</h3>
        <p>Strength: ${enemy.strength}</p> 
        <p id="enemy-health">Health: ${enemy.health}</p> 
        <p>Mana: ${enemy.mana}</p> 
        <p>Agility: ${enemy.agility}</p>    
        <p>Speed: ${enemy.speed}</p>                           
        </div>`;
        // this.name = enemyName;
        // this.strength = strength;
        // this.health = health;
        // this.mana = mana;
        // this.speed = speed;        

    }
}