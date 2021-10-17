import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {

   // constructor() {
   //    super('game')
   // }

   preload() {}

   create() {
      const text = this.add.text(400, 250, 'Christmas is coming!')
      text.setOrigin(0.5, 0.5)
   }

   update() {}


}