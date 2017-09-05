
window.onload = function () {
    const url = 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*';

    const getSuggestList = (keyword) => fetch(url + '&search=' + keyword, { method: 'GET', mode: 'cors' })
        .then(res => res.json())

    const searchInput = document.getElementById('search');
    const suggestList = document.getElementById('suggest-list');
    const keyword = Rx.Observable.fromEvent(searchInput, 'input');
    const selectItem = Rx.Observable.fromEvent(suggestList, 'click');

    const render = (suggestArr = []) => {
        suggestList.innerHTML = suggestArr
            .map(item => '<li>' + item + '</li>')
            .join('');
    };

    keyword
        .debounceTime(250)
        .switchMap(x => Rx.Observable.from(getSuggestList(x.target.value)).retry(3),
        (x, res) => res[1])
        .subscribe(x => render(x));

    selectItem
        .filter(x => x.target.matches('li'))
        .map(x => x.target.innerHTML)
        .subscribe(x => {
            searchInput.value = x;
            render();
        });
};


