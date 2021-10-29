new Vue({
    el:"#app",
    data: {
        nyuryokugaku: "",
        zandaka: 0,
        log:[
            {
                date: new Date("2021-07-23T12:00:00"),
                type: "入金",
                money: 1000
              },
        ]
    },
    methods:{
        nyukinn:function(){
            this.zandaka += Number(this.nyuryokugaku);
            const now = new Date();
            this.log.push({date:now, type:"入金",money:Number(this.nyuryokugaku)});
        },
        syukkinn:function(){
            this.zandaka -= Number(this.nyuryokugaku);
            const now = new Date();
            this.log.push({date:now, type:"出金",money:Number(this.nyuryokugaku)});
        },
    },
    computed:{
        syukkinn:function(){
            if(this.zandaka < Number(this.nyuryokugaku)){
                return(this.syukkinn.bind=true);
            }
        }
    }
});