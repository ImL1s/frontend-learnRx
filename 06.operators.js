function operators_1_scan() {
    var source = Rx.Observable.from('hello')
        .zip(Rx.Observable.interval(600), (x, y) => x);

    var example = source.scan((pre, current) => {
        return pre + current;
    }, "");

    example.subscribe(
        x => console.log(x),
        e => console.log('error: ' + e),
        () => console.log("completed")
    );
}


function operators_2_buffer() {
    var source = Rx.Observable.interval(300);
    var source2 = Rx.Observable.interval(1000);
    var example = source.buffer(source2);

    example.subscribe(x => {
        console.log(x);
    }, e => {
        console.log("error: " + e);
    }, () => {
        console.log("complete");
    });
}
// [0,1,2]
// [3,4,5]
// [6,7,8]...

// source : --0--1--2--3--4--5--6--7--8--9..
// source2: ---------0---------1---------2..
//              buffer(source2)
// example: ---------([0,1,2])---------([3,4,5])

function operators_3_bufferTime() {
    var source = Rx.Observable.interval(300);
    var example = source.bufferTime(source);

    example.subscribe(x => {
        console.log(x);
    }, e => {
        console.log("error: " + e);
    }, () => {
        console.log("complete");
    });
}
// [0,1,2]
// [3,4,5]
// [6,7,8]...


function operators_4_bufferTime() {
    var source = Rx.Observable.interval(300);
    var example = source.bufferCount(3);

    example.subscribe(x => {
        console.log(x);
    }, e => {
        console.log("error: " + e);
    }, () => {
        console.log("complete");
    });
}
// [0,1,2]
// [3,4,5]
// [6,7,8]...


function operators_5_buffer() {
    var source = Rx.Observable.interval(300);
    var example = source.bufferTime(3);

    example.subscribe(x => {
        console.log(x);
    }, e => {
        console.log("error: " + e);
    }, () => {
        console.log("complete");
    });
}
// [0,1,2]
// [3,4,5]
// [6,7,8]...