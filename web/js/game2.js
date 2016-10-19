var load = (str) => {
  $('canvas').remove()
  function preload() {
    game.load.image('bullet', 'assets/bullet.png');
    game.load.image('ship', 'assets/spaceship.png');
  }
  var counter = 0;
  var step = Math.PI / 180;
  var ia;
  var weapon;
  var cursors;
  var fireButton;

  function create() {
    //  Creates 30 bullets, using the 'bullet' graphic
    weapon = game.add.weapon(30, 'bullet');

    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    weapon.bulletSpeed = 600;
    weapon.fireRate = 100;
    ia = this.add.sprite(400, 300, 'ship');
    // SET ANCHOR AT MIDDLE
    ia.anchor.set(0.5);

    game.physics.arcade.enable(ia);
    ia.body.drag.set(70);
    ia.body.maxVelocity.set(200);

    //  Tell the Weapon to track the 'player' Sprite
    //  With no offsets from the position
    //  But the 'true' argument tells the weapon to track sprite rotation
    weapon.trackSprite(ia, 0, 0, true);
    cursors = this.input.keyboard.createCursorKeys();
  }
  eval(str);
  function render() {
    // weapon.debug();
  }
  var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
}
