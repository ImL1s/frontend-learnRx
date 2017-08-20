function operators_1_combineLatest() {
    var source = Rx.Observable.interval(400).take(3);
    var newest = Rx.Observable.interval(200).take(6);

    var example = source.combineLatest(newest, (x, y) => x + y);

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // source : ----0----1----2|
    // newest : --0--1--2--3--4--5|
    // combineLastest(source, newest, (x,y) => x + y)
    // example : ----0--1--23--4--56--7
}


function operators_2_zip() {
    var source = Rx.Observable.interval(400).take(3);
    var newest = Rx.Observable.interval(200).take(6);

    var example = source.zip(newest, (x, y) => x + y);

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // 0
    // 2
    // 4
    // complete

    // source : ----0----1----2|
    // newest : --0--1--2--3--4--5|
    // zip(source, newest, (x,y) => x + y)
    // example : ----0----2----4|
}


function operators_3_withLatestFrom() {
    var main = Rx.Observable.from('hello')
        .zip(Rx.Observable.interval(500), (x, y) => x);

    var some = Rx.Observable.from([0, 1, 0, 0, 0, 1])
        .zip(Rx.Observable.interval(300), (x, y) => x);

    var example = main.withLatestFrom(some, (x, y) => {
        return y === 1 ? x.toUpperCase() : x;
    });

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // 0
    // 2
    // 4
    // complete

    // source : ----h----e----l----l----o|
    // newest : --0--1--0--0--0--1|
    // main.withLastestFrom(some, (x,y) => x + y)
    // example : ----h----E----l----L----O|

    // 使用案例:
    // 當用戶在使用網頁文字編輯器時，選擇了粗體，而字體要跟著改變.
}