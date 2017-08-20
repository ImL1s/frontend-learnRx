function operators_1_skip() {
    var source = Rx.Observable.interval(1000);
    var example = source.skip(3);

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // 3
    // 4
    // 5 ...
}


function operators_2_take() {
    var source = Rx.Observable.interval(1000).take(6);
    var example = source.takeLast(2);

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // 4
    // 5
    // complete

    // source : ----0----1----2----3----4----5|
    // takeLast(2)
    // example: ------------------------------(45)|
}


function operators_3_last() {
    var source = Rx.Observable.interval(1000).take(6);
    var example = source.last();

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // 5
    // complete

    // [marble diagrams]
    // source : ----0----1----2----3----4----5|
    // last()
    // example: ------------------------------(5)|
}

function operators_4_concat() {
    var source = Rx.Observable.interval(1000).take(3);
    var source2 = Rx.Observable.of(3);
    var source3 = Rx.Observable.of(4, 5, 6);
    var example = source.concat(source2, source3);

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // complete

    // [marble diagrams]
    // source : ----0----1----2|
    // source : (3)|
    // source : (456)|
    //             concat()
    // example: ----0----1----2(3456)|
}


function operators_5_concat() {
    var source = Rx.Observable.interval(1000).take(3);
    var source2 = Rx.Observable.of(3);
    var source3 = Rx.Observable.of(4, 5, 6);
    var example = Rx.Observable.concat(source, source2, source3);

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // complete

    // [marble diagrams]
    // source : ----0----1----2|
    // source : (3)|
    // source : (456)|
    //             concat()
    // example: ----0----1----2(3456)|
}


function operators_6_startWith() {
    var source = Rx.Observable.interval(1000);
    var example = source.startWith(0);

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // 0
    // 0
    // 1
    // 2
    // 3...

    // [marble diagrams]
    // source : ----0----1----2----3--...
    // startWith(0)
    // example: (0)----0----1----2----3--...
}


function operators_7_merge() {
    var source = Rx.Observable.interval(500).take(3);
    var source2 = Rx.Observable.interval(300).take(6);
    var example = source.merge(source2);

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // 0
    // 0
    // 1
    // 2
    // 3...

    // [marble diagrams]
    // source :  ----0----1----2|
    // source2:  --0--1--2--3--4--5|
    //          merge()
    // example: --0-01--21-3--(24)--5|
}


function operators_8_merge() {
    var source = Rx.Observable.interval(500).take(3);
    var source2 = Rx.Observable.interval(300).take(6);
    var example = Rx.Observable.merge(source, source2);

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // 0
    // 0
    // 1
    // 2
    // 3...

    // [marble diagrams]
    // source :  ----0----1----2|
    // source2:  --0--1--2--3--4--5|
    //          merge()
    // example: --0-01--21-3--(24)--5|
}

function operators_9_merge() {
    var source = Rx.Observable.create(function(e){

    });
    var source2 = Rx.Observable.fromEvent(document.body, 'click');
    var example = Rx.Observable.merge(source, source2);

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );

    // 0
    // 0
    // 1
    // 2
    // 3...

    // [marble diagrams]
    // source :  ...
    // source2:  --c--c--c--c--c--c|
    //          merge()
    // example:  --c--c--c--c--c--c|
}

