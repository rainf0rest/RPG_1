cc.Class({
    extends: cc.Component,

    properties: {
        numberLabel : cc.Label,
    },

    // use this for initialization
    onLoad() {

    },

    init(num) {
        this.number = num;
        this.numberLabel.string = this.number;
    },

    productNumber() {
        let num = Math.random()*100;
        num = Math.round(num);
        this.numberLabel.string = num;
    },
});
