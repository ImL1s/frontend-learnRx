

function operators_1_map() {
    var people = Rx.Observable.of("Jerry", "Anna");

    var helloPeople = map(people, (item) => item + ' Hello~');

    helloPeople.subscribe({
        onNext: x => console.log(x),
        onError: e => { console.log('error: ' + e) },
        onCompleted: () => console.log('ok')
    });

    helloPeople.subscribe(
        x => console.log(x),
        e => { console.log('error: ' + e) },
        () => console.log('ok')
    );

    function map(source, transform) {
        return Rx.Observable.create((emitter) => {
            source.subscribe(
                (value) => {
                    try {
                        emitter.next(transform(value));
                    } catch (e) {
                        emitter.error(e);
                    }
                },
                (err) => emitter.error(err),
                () => emitter.onCompleted("s")
            )
        });
    }
}


function operators_2_map() {
    var people = Rx.Observable.of("Jerry", "Anna");

    function map(transform) {
        return Rx.Observable.create((emitter) => {
            this.subscribe(
                (value) => {
                    try {
                        emitter.next(transform(value));
                    } catch (e) {
                        emitter.error(e);
                    }
                },
                (err) => emitter.error(err),
                () => emitter.onCompleted("s")
            )
        });
    }

    Rx.Observable.prototype.map = map;

    var helloPeople = people.map((item) => item + ' Hello~');

    helloPeople.subscribe({
        onNext: x => console.log(x),
        onError: e => { console.log('error: ' + e) },
        onCompleted: () => console.log('ok')
    });

    helloPeople.subscribe(
        console.log,
        e => { console.log('error: ' + e) },
        () => console.log('ok')
    );
}


function operators_3_filter() {
    var people = Rx.Observable.of("Jerry", "Anna");

    function filter(transform) {
        return Rx.Observable.create((emitter) => {
            this.subscribe(
                (value) => {
                    try {
                        if (transform(value)) {
                            emitter.next(value);
                        }
                    } catch (e) {
                        emitter.error(e);
                    }
                },
                (err) => emitter.error(err),
                () => emitter.onCompleted("s")
            )
        });
    }

    Rx.Observable.prototype.filter = filter;

    var helloPeople = people.filter((item) => item === "Jerry");

    helloPeople.subscribe(
        console.log,
        e => { console.log('error: ' + e) },
        () => console.log('ok')
    );
}


function operators_4_take() {
    var source = Rx.Observable.of("Jerry", "Anna", "Hello");
    var example = source.take(2);
    example.subscribe(x => console.log(x));

    // Jerry
    // Anna
}


function operators_5_first() {
    var source = Rx.Observable.of("Jerry", "Anna", "Hello");
    var example = source.first();
    example.subscribe(
        x => console.log(x)
    );

    // Jerry
}


function operators_6_takeUntil() {
    var source = Rx.Observable.interval(1000);
    var clickSource = Rx.Observable.fromEvent(document.body, 'click');
    var example = source.takeUntil(clickSource);
    example.subscribe(x => console.log(x),
        e => { },
        () => console.log("click body!"));

    // 0
    // 1
    // 2
    // ...
    // click body!
}


function operators_7_concatAll() {
    var clickSource = Rx.Observable.fromEvent(document.body, 'click');
    var source = clickSource.map(x => Rx.Observable.of(1, 2, 3));
    var concatSource = source.concatAll();
    
    concatSource.subscribe(
        x => console.log(x),
        e => console.log(e),
        () => console.log("on completed")
    );

    // 1
    // 2
    // 3
}