(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        let islands = [],
            visited = [];

        for (let row = 0; row < map.length; row++) {

            for (let cell = 0; cell < map[row].length; cell++) {
                
                if ( !map[row][cell] || cellVisited(`${row}${cell}`) ) {
                    continue;
                } else {
                    islands.push([`${row}${cell}`]);
                    visited.push(`${row}${cell}`);

                    addCellsToIsland(row, cell);
                }

                function addCellsToIsland(row, cell) {
                    if ( row > 0 && !cellVisited(`${row-1}${cell}`) && map[row-1][cell] ) {
                        addNewCell(`${row-1}${cell}`);
                    }
                    if ( row < map.length-1 && !cellVisited(`${row+1}${cell}`) && map[row+1][cell] ) {
                        addNewCell(`${row+1}${cell}`);
                    }
                    if ( cell > 0 && !cellVisited(`${row}${cell-1}`) && map[row][cell-1] ) {
                        addNewCell(`${row}${cell-1}`);
                    }
                    if ( cell < map[row].length-1 && !cellVisited(`${row}${cell+1}`) && map[row][cell+1] ) {
                        addNewCell(`${row}${cell+1}`);
                    }
                }

                function cellVisited(check) {
                    if ( visited.includes(check) ) {
                        return true;
                    }
                    return false;
                }

                function addNewCell(item) {
                    islands[islands.length-1].push(item);
                    visited.push(item);

                    addCellsToIsland(+item[0], +item[1]);
                }
            }

        }
        return islands.length;
    }


    root.SHRI_ISLANDS.solution = solution;
})(this);
