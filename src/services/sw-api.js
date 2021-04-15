export function getStarShips() {
    return fetch('https://swapi.dev/api/starships/').then(res => res.json())
}