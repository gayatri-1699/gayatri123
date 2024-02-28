function searchClothing() {
    const input = document.getElementById('searchbar').value.toLowerCase();
    const clothingItems = document.getElementsByClassName('clothing-item');

    for (let i = 0; i < clothingItems.length; i++) {
        const itemText = clothingItems[i].innerHTML.toLowerCase();
        if (!itemText.includes(input)) {
            clothingItems[i].style.display = 'none';
        } else {
            clothingItems[i].style.display = 'list-item';
        }
    }
}
