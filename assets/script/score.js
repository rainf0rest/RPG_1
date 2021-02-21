cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel : cc.Label,
    },


    onLoad() {

    },

    init(num) {
        this.number = num;
        this.scoreLabel.string = this.number;
    },

    print(s) {
        this.scoreLabel.string = s;
    }

});
