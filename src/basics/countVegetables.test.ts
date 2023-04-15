function countVegetables(string ){
    const dict=["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"]
    const arr=[].concat(string.split(' ')).map(v=>v.replace(/\n$/g,'')).filter(v=>v.length&&dict.includes(v));
    let obj={};
    arr.map(v=>obj[v]=obj[v]?obj[v]+1:1);
    const keys=Object.keys(obj)
    const values=Object.values(obj)
    const answ=[];
    keys.map((v,i)=>answ.push([values[i],v]))
    return answ.sort((a,b)=>{
        if (a[0]<b[0]){
            return 1}
        if (a[0]>b[0]){
            return -1}
        if (a[0]===b[0]){
            return b[1].localeCompare(a[1])
        }
    })


}

const {assert,config} = require('chai')
config.truncateThreshold = 0

describe("Tests", function(){
    it("Basic Tests", function() {
        let lst1 = [[2, 'tofu'], [2, 'potato'], [2, 'cucumber'], [2, 'cabbage'], [1, 'turnip'], [1, 'pepper'], [1, 'onion'], [1, 'mushroom'], [1, 'celery'], [1, 'carrot']];
        let s1 = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage";
        assert.deepEqual(countVegetables(s1), lst1);
        let lst2 = [[15, 'turnip'], [15, 'mushroom'], [13, 'cabbage'], [10, 'carrot'], [9, 'potato'], [7, 'onion'], [6, 'tofu'], [6, 'pepper'], [5, 'cucumber'], [4, 'celery']];
        let s2 = "mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber " +
            "mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber " +
            "onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper " +
            "onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot " +
            "potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip " +
            "mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip"
        assert.deepEqual(countVegetables(s2), lst2);
    })
})
