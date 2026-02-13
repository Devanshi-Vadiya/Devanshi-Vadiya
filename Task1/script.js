const tiles = document.querySelectorAll('.tile');

tiles.forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        tile.classList.add('active');

        tiles.forEach(otherTile => {
            if (otherTile !== tile) {
                otherTile.classList.add('dimmed');
            }
        });
    });

    tile.addEventListener('mouseleave', () => {
        tile.classList.remove('active');

        tiles.forEach(otherTile => {
            otherTile.classList.remove('dimmed');
        });
    });
});
