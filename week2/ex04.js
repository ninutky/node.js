//화살표 함수

const relationship1 = {
    name : "one",
    friends : ["hi", "hello", "bye"],
    logFriends:function(){
        var that = this;
        this.friends.forEach(function(friend){
            console.log(that.name, this.friend);    // this값을 저장해줌
        });
    }
}
relationship1.logFriends();