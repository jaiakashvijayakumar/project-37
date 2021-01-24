class Contestant{
    constructor(){

        this.index = null;
        this.distance = 0;
        this.name = null;


    }
    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",function(data){
            contestantCount = data.val()
        });
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount: count
        })
    }

    update(name){
        var  contestantIndex = "constestants/constestant"+this.index;
        database.ref( contestantIndex).set({
            name:this.name,
            distance:this.distance
    })
    }
    
    static getconstestantInfo(){
        var constestantInfoRef = database.ref('players');
        constestantInfoRef.on("value",(data)=>{
            allconstestant = data.val();
        })
    }
}

