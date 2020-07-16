class Player {
  constructor(classType, strength, health, mana, agility, speed) {
    this.classType = classType;
    this.strength = strength;
    this.health = health;
    this.mana = mana;
    this.agility = agility;
    this.speed = speed;
  }
}

let PlayerMoves = {
  calcAttack: function () {
    console.log('player attacks');
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    console.log(enemy);
    let getPlayerHealth = document.getElementById('player-health');
    let getEnemyHealth = document.getElementById('enemy-health');

    function playerAttack() {
      let calcBaseDamage = Math.ceil(player.strength * player.agility / 30);
      let calcOutputDamage = Math.floor(Math.random() * 5) + calcBaseDamage;
      let numberOfHits = Math.ceil(Math.random() * player.agility / 10);
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }

    function enemyAttack() {
      let calcBaseDamage = Math.ceil(enemy.strength * enemy.agility / 30);
      let calcOutputDamage = Math.floor(Math.random() * 5) + calcBaseDamage;
      let numberOfHits = Math.ceil(Math.random() * enemy.agility / 10);
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }

    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];
      enemy.health = enemy.health - totalDamage;
      alert('You hit ' + playerAttackValues[0] + ' damage ' + playerAttackValues[1] + ' time(s)');
      if (enemy.health <= 0) {
        getEnemyHealth.innerHTML = 'Health: 0';
        document.getElementById('actions').innerHTML = '<br>';
        document.getElementById('header').innerHTML = '<p>You won! Refresh the browser to start again</p>';
        alert('You won! Refresh the browser to start again');
      } else {
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        //Enemy attacks
        let enemyAttackValues = enemyAttack();
        let enemyTotalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - enemyTotalDamage;
        alert('Enemy hits ' + enemyAttackValues[0] + ' damage ' + enemyAttackValues[1] + ' time(s)');
        if (player.health <= 0) {
          getPlayerHealth.innerHTML = 'Health: 0';
          document.getElementById('actions').innerHTML = '<br>';
          document.getElementById('header').innerHTML = '<p>You lost :( Refresh the browser to start again</p>';
          alert('You lost :( Refresh the browser to start again');
        } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
      }
    }

  }
}
