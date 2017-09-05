
window.onload = function () {
    const url = 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*';

    const getSuggestList = (keyword) => fetch(url + '&search=' + keyword, { method: 'GET', mode: 'cors' })
        .then(res => res.json())

    const searchInput = document.getElementById('search');
    const suggestList = document.getElementById('suggest-list');
    const keyword = Rx.Observable.fromEvent(searchInput, 'input');
    const selectItem = Rx.Observable.fromEvent(suggestList, 'click');

    console.log(searchInput);
    keyword
        .switchMap(e => getSuggestList(e.target.value))
        .switchMap((x) => x)
        .subscribe(console.log);
};


