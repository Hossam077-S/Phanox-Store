export const fetchItems = () => {
    const itemInfo = localStorage.getItem('items') !== 'undefined' ? JSON.parse(localStorage.getItem('items')) : localStorage.clear();

    return itemInfo;
}