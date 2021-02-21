cc.Class({
    extends: cc.Component,

    properties: {
        enemyNode: cc.Node,
    },
    
    onLoad() {
        this.enemy = this.enemyNode.getComponent('enemy');
    },

    start() {
        let num = 0
        this.enemy.init(num);
    },

    playGame() {
        this.enemy.productNumber();
        //this.enemy.init(3);
    },

});
