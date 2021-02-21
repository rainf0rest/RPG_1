cc.Class({
    extends: cc.Component,

    properties: {
        enemyNode: cc.Node,
        playerNode: cc.Node,
        scoreNode: cc.Node,
    },
    
    onLoad() {
        this.enemy = this.enemyNode.getComponent('enemy');
        this.player = this.playerNode.getComponent('player');
        this.score = this.scoreNode.getComponent('score');
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
        if(this.player.number > this.enemy.number) {
            this.score.print("win");
        }
        else if(this.player.number == this.enemy.number) {
            this.score.print("draw");
        }
        else {
            this.score.print("fail");
        }
        
    },

});
