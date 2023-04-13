function correct(leaderBoard: string) {

    let leaders = leaderBoard.split("\n").map(s => s.split(" ").filter((v, i) => i != 0));
    let leadersS = leaders.map(v => v.join(" "))
    return leadersS.map((v, i, a) => i == 0 ? "myjinxin2015" : v == "myjinxin2015" ? a[0] : v).map((v, i) => `#${i + 1} ${v}`).join("\n")


}


describe("Basic Tests", function () {
    it("It should works for basic tests.", function () {

        expect(correct(
            `#1 g964
#2 myjinxin2015
#3 SteffenVogel_79
#4 smile67
#5 Voile`
        )).toEqual(
            `#1 myjinxin2015
#2 g964
#3 SteffenVogel_79
#4 smile67
#5 Voile`
        )

        expect(correct(
            `#1 Voile
#2 g964
#3 SteffenVogel 79
#4 smile67
#5 myjinxin2015`
        )).toEqual(
            `#1 myjinxin2015
#2 g964
#3 SteffenVogel 79
#4 smile67
#5 Voile`
        )

    })
})


