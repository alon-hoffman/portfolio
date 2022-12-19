

var gProjects = [
    {
        id: "trueRecoil",
        name: "True Recoil",
        title: "A zero Gravity platformer",
        desc: ` Recoil was my first independent software project. Every element in
        the game was planned and implemented by me, from the idea to the
        animation. Recoil is written in C#.`,
        url: "https://alonmakegames.itch.io/true-recoil",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "achilles",
        name: "Achilles",
        title: "Destroy the trojans",
        desc: `Achilles is a game created as a solo developer as part of the Totem
        mythology "game jam".`,
        url: "https://alonmakegames.itch.io/achilles",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "mineSweeper",
        name: "MineSweeper",
        title: "A twist on the classic game",
        desc: "Made in vanilla JavaScript, the classic game with extra powerUps!",
        url: "https://alon-hoffman.github.io/mine-sweeper/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "amazonCrime",
        name: "Amazon Crime",
        title: "Stash all the packages",
        desc: `Amazon Crime was made as part of the Make Games JLM game jam in
        under 40 hours.`,
        url: "https://kobikoala1.itch.io/amazon-crime",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "touchNum",
        name: "Touch Num",
        title: "How fast can you go?",
        desc: "A game about focus and speed",
        url: "https://alon-hoffman.github.io/touch-num/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "dungeonSim",
        name: "Dungeon Sim",
        title: "How fast can you go?",
        desc: `I worked on Dungeon Sim as a part of the Double Jump corporative.
        The game was made for Totem and is utelizing NFT technology to mark
        events in the game.`,
        url: "https://leos-clockworks.itch.io/dungeon-sim",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "bookStore",
        name: "Book Store",
        title: "Book manager",
        desc: `Simple book store web service that allows user to
         manage inventory of a book store. Book Store supports hebrew and english.`,
        url: "https://alon-hoffman.github.io/Book-Store/?price=100&rating=0",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "mello",
        name: "Mello",
        title: "Project manager",
        desc: `A trello clone made from scratch using Vue.js.`,
        url: "https://melloapp.up.railway.app/#/board",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
]

function getProjects() {
    return gProjects
}

function getProject(id) {
    return gProjects.find(project => id == project.id)
}
