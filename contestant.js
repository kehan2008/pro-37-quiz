class Contestant{
    constructor(){
        this.index = null;
        this.answer = 0;
        this.name = null;
    }

    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",(data)=>{
            contestantCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
            contestantCount: count
        });
      }
    
      update(){
        var contestantIndex = "Contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
          name:this.name,
          answer:this.answer
        });
      }
    
      static getPlayerInfo(){
        var contestantInfoRef = database.ref('Contestants');
        contestantInfoRef.on("value",(data)=>{
          allContestant = data.val();
        })
    }
}
