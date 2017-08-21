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