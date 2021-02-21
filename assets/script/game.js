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
        let top = cfg.top;
        this.enemy.productNumber(top);
        this.player.productNumber(top);
    },

});
