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

    productNumber(m) {
        let num = Math.random()*100;
        num = Math.round(num);
        num = num%m + 1;
        this.numberLabel.string = num;
        this.number = num;
    },
});
