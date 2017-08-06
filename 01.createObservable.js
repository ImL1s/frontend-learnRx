
function createObservable_1_create() {
    var source = Rx.Observable
        .create(function (observable) {
            console.log(observable);
            observable.next('Jerry');
            observable.next('Anna');
            observable.next('1');
            observable.error('fk');
            // observable.observer.complete();
        });

    source.subscribe(
        x => console.log(x),
        err => console.log(err),
        () => console.log("complete")
    );
}


function createObservable_2_of() {
    // var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'];
    var soruce = Rx.Observable.of('Jerry', 'Anna');

    soruce.subscribe(
        x => console.log('onNex:' + x),
        err => console.log(err),
        () => console.log('complete!')
    );
}

function createObservable_3_from() {
    var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'];
    var soruce = Rx.Observable.from(arr);

    soruce.subscribe(
        x => console.log('onNex:' + x),
        err => console.log(err),
        () => console.log('complete!')
    );
}

function createObservable_4_from() {
    var soruce = Rx.Observable.from("Remu");

    soruce.subscribe(
        x => console.log('onNex:' + x),
        err => console.log(err),
        () => console.log('complete!')
    );

    // onNext:R
    // onNext:e
    // onNext:m
    // onNext:u
    // complete
}

function createObservable_5_fromEvent() {
    var soruce = Rx.Observable.fromEvent(document.body, 'click');

    soruce.subscribe(
        x => console.log(x),
        error => console(error),
        () => console.log('complete')
    );
}


function createObservable_6_empty() {
    var soruce = Rx.Observable.empty();
    soruce.subscribe(
        x => console.log(x),
        error => console.log(error),
        () => console.log('complete')
    );

    // complete
}

function createObservable_7_throw() {
    var soruce = Rx.Observable.throw('Oops!');
    soruce.subscribe(
        x => console.log("empty"),
        error => console.log(error),
        () => console.log('complete')
    );

    // Oop!
}


function createObservable_8_interval() {
    var soruce = Rx.Observable.interval(1000);
    soruce.subscribe(
        x => console.log(x),
        error => console.log(error),
        () => console.log('complete')
    );

    // 0
    // [-> wait 1 sec]
    // 1
    // [-> wait 1 sec]
    // 2
    // [-> wait 1 sec]
    // ...
}



function createObservable_9_timer() {
    var soruce = Rx.Observable.timer(1000, 5000);
    soruce.subscribe(
        x => console.log(x),
        error => console.log(error),
        () => console.log('complete')
    );

    // [-> wait 1 sec]
    // 0
    // [-> wait 5 sec]
    // 1
    // [-> wait 5 sec]
    // 2
    // [-> wait 5 sec]
    // ...
}


function createObservable_10_timer() {
    var soruce = Rx.Observable.timer(1000);
    soruce.subscribe(
        x => console.log(x),
        error => console.log(error),
        () => console.log('complete')
    );

    // [-> wait 1 sec]
    // 0
    // complete
}

function createObservable_11_interval() {
    var soruce = Rx.Observable.interval(1000);
    var subscription = soruce.subscribe(
        x => console.log(x),
        error => console.log(error),
        () => console.log('complete')
    );

    setTimeout(() => {
        subscription.dispose();
    }, 5000);

    // [-> wait 1 sec]
    // 0
    // [-> wait 1 sec]
    // 1
    // [-> wait 1 sec]
    // 2
    // [-> wait 1 sec]
    // 3
    // [-> wait 1 sec]
    // 4
}




