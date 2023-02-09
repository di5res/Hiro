
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {

	constructor() {

		super("Scene1");

	}

	_create() {

		var garden = this.add.image(969.05975, 436.58792, "textures", "garden");
		garden.setScale(1.6150368, 1.4799621);

		var Niz = this.add.image(968.1239, 820.0978, "textures", "Niz");
		Niz.setScale(1.9061227, 2.1562648);

		this.add.image(75.23463, 49.832367, "textures", "fruits");

		var heart = this.add.image(59.6379, 144.83945, "textures", "heart");
		heart.setScale(-0.07816895, 0.08992961);

		var apple = this.add.image(442.60434, 49.949333, "textures", "apple");
		apple.setScale(0.8873186, 0.7270684);

		var banana = this.add.image(622.3643, 45.71865, "textures", "banana");
		banana.setScale(0.74648225, 0.8199169);

		var cherry = this.add.image(341.22394, 49.96239, "textures", "cherry");
		cherry.setScale(0.8791009, 0.7461557);

		var box = this.add.image(1192.231, 730.6084, "textures", "box");
		box.setScale(1.6899251, 1.1242636);

		var grape = this.add.image(996.4128, 49.359444, "textures", "grape");
		grape.setScale(0.68242425, 0.7628223);

		var lemon = this.add.image(1382.025, 41.400642, "textures", "lemon");
		lemon.setScale(0.7201802, 0.7370306);

		var orange = this.add.image(1578.929, 41.59532, "textures", "orange");
		orange.setScale(0.72715837, 0.66679263);

		var peach = this.add.image(1190.8899, 48.41605, "textures", "peach");
		peach.setScale(0.7559534, 0.7508035);

		var pear = this.add.image(1769.089, 40.61302, "textures", "pear");
		pear.setScale(0.80718285, 0.7700315);

		var pineapple = this.add.image(1488.7299, 134.17517, "textures", "pineapple");
		pineapple.setScale(1.0, 1.0447825);

		var plum = this.add.image(1876.3888, 57.06809, "textures", "plum");
		plum.setScale(0.869418, 0.7150246);

		var strawberry = this.add.image(804.43134, 55.88641, "textures", "strawberry");
		strawberry.setScale(0.711245, 0.68272173);

		var tit = this.add.image(1106.6309, 43.28171, "textures", "tit");
		tit.setScale(0.22048974, 0.16520014);

		var watermelon = this.add.image(722.02856, 143.27216, "textures", "watermelon");
		watermelon.setScale(1.0, 1.0774826);


	}

	/* START-USER-CODE */

	create() {
		this._create();

		this.cursors = this.input.keyboard.createCursorKeys();

		this.physics.add.existing(this.fBox);
		this.physics.add.existing(this.fPeach);
		this.physics.add.existing(this.fPlum);
		this.physics.add.existing(this.fPear);
		this.physics.add.existing(this.fStrawberry);
		this.physics.add.existing(this.fWatermelon);
		this.physics.add.existing(this.fGrape);
		this.physics.add.existing(this.fBanana);
		this.physics.add.existing(this.fApple);
		this.physics.add.existing(this.fPineapple);
		this.physics.add.existing(this.fOrange);
		this.physics.add.existing(this.fLemon);
		this.physics.add.existing(this.fCherry);
		this.physics.add.existing(this.fTit);
		this.physics.add.existing(this.fNiz);

		this.physics.add.overlap(this.fBox, this.fPeach, this.hitPeach, null, this);
		this.physics.add.overlap(this.fBox, this.fPlum, this.hitPlum, null, this);
		this.physics.add.overlap(this.fBox, this.fPear, this.hitPear, null, this);
		this.physics.add.overlap(this.fBox, this.fStrawberry, this.hitStrawberry, null, this);
		this.physics.add.overlap(this.fBox, this.fWatermelon, this.Watermelon, null, this);
		this.physics.add.overlap(this.fBox, this.fGrape, this.hitGrape, null, this);
		this.physics.add.overlap(this.fBox, this.fBanana, this.hitBanana, null, this);
		this.physics.add.overlap(this.fBox, this.fApple, this.hitApple, null, this);
		this.physics.add.overlap(this.fBox, this.fPineapple, this.hitPineapple, null, this);
		this.physics.add.overlap(this.fBox, this.fOrange, this.hitOrange, null, this);
		this.physics.add.overlap(this.fBox, this.fLemon, this.hitLemon, null, this);
		this.physics.add.overlap(this.fBox, this.fCherry, this.hitCherry, null, this);
		this.physics.add.overlap(this.fBox, this.fTit, this.hitTit, null, this);

		// this.createScore();
		// this.createHp();
		// this.stopGame();

		// this.fKey = keys;
		// var game = {
		// pause: false
		// }

		// this.fGame = game
	}

	hitTit()
	{
	this.fTit.x = Phaser.Math.Between(80, 1900);
	this.fTit.y = Phaser.Math.Between(-2000, -2000);

	if(this.hp < 3)
	{
	this.hp += 1;
	}

	this.hpText.setText('' +
	this.hp);

	this.score += 1;
	this.scroreText.setText('score: ' + this.score);

	this.tweens.add
	({
	targets: this.fBox,
	duration: 120,
	scaleX: 0.5,
	scaleY: 0.4,
	yoyo: true
	});
	}

	abyssTit()
	{
	  this.fTit.x = Phaser.Math.Between(80, 1900);
	  this.fTit.y = Phaser.Math.Between(-2000, -2000);
	}

	hithitPeach() {
		this.fPeach.x = Phaser.Math.Between(80, 1900);
		this.fPeach.y = Phaser.Math.Between(-50, -50);

		this.score += 1;
		this.scroreText.setText('score: ' + this.score);

		// this.hp -= 1;
		// this.hpText.setText('hp: ' + this.hp) //Система врага, отнимание жизни

		this.tweens.add(
			{
				targets: this.fBox,
				duration: 120,
				scaleX: 0.5,
				scaleY: 0.4,
				yoyo: true
			});
	}

	abyssPeach() {
		{
			this.fPeach.x = Phaser.Math.Between(80, 1900);
			this.fPeach.y = Phaser.Math.Between(-50, -50);

			this.hp -= 1;
			this.hpText.setText('' + this.hp);
		}
	}

	update() {
		if (!this.fGame.pause) {

			if (this.hp >= 1) {
				this.fPeach.y += 3.7;
				// this.fArbuzza.y += 2;
				// this.fKokosik.y += 2.7;
				// this.fTit.y += 7;
				if (this.cursors.right.isDown) {
					this.fBox.x += 15;
				}
				else if (this.cursors.left.isDown) {
					this.fBox.x -= 15;
				}
				if (this.fBox.x < 0) {
					this.fBox.x += 1979;
				}
				else if (this.fBox.x > 1979) {
					this.fBox.x = 0;
				}
			}
			else {
				var style = { font: '40px Lucida Sans', fill: '#06068E' }
				this.scroreText = this.add.text(830, 280, 'Points scored: ' + this.score, style);
				if (this.score > 9) {
					this.winGame = 'Victory'
					var styleWinGame = { font: '40px Lucida Sans', fill: 'green' }
					this.winGame = this.add.text(910, 220, '' + this.winGame, styleWinGame);
				}
				else {
					this.loseGame = 'Defeat'
					var styleLoseGame = { font: '40px Lucida Sans', fill: 'red' }
					this.loseGame = this.add.text(900, 220, '' + this.loseGame, styleLoseGame);
				}

				this.fPeach.y += 0;
				// this.fArbuzza.y += 0;
				// this.fKokosik.y += 0;
				// this.fTit.y += 0;

				if (this.cursors.right.isDown) {
					this.fBox.x += 0;
				}
				else if (this.cursors.left.isDown) {
					this.fBox.x -= 0;
				}
				if (this.fBox.x < 0) {
					this.fBox.x += 1979;
				}
				else if (this.fBox.x > 1979) {
					this.fBox.x = 0;
				}
			}
		}


		/* END-USER-CODE */
	}
}
/* END OF COMPILED CODE */

// You can write more code here
