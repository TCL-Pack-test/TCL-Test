import List from './pages/List.js';
import list2 from './pages/list2.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';
import ListPacks from './pages/ListPacks.js';

export default [
    { path: '/', component: List },
    { path: '/', component: list2 },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
    { path: '/listpacks', component: ListPacks },
];
