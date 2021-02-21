cc.Class({
    extends: cc.Component,

    properties: {
        enemyNode: cc.Node,
        playerNode: cc.Node,
    },
    
    onLoad() {
        this.enemy = this.enemyNode.getComponent('enemy');
        this.player = this.playerNode.getComponent('player');
    },

    start() {
        let num = 0;
        this.enemy.init(num);
        this.player.init(num);
    },

    playGame() {
        this.enemy.productNumber();
        //this.enemy.init(3);
        this.player.productNumber();
    },

});
