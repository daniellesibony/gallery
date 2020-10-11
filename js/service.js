'use strict'

function getProjects() {
    return gProjects
}

function getProjectById(id) {
    var project = gProjects.find(function (project) {
        return project.id === id

    })
    return project;
}



var gProjects =
    [{
        id: "minesweeper",
        name: "Mine Sweeper",
        title: "The Mine Sweeper Game",
        desc: "A Computer Game",
        url: "projs/minesweeper",
        publishedAt: 1448693940000,
        webUrl: "https://daniellesibony.github.io/MineSweeeper/",
        labels: ["computer game"],
    },


    {
        id: "bookshop",
        name: "Book Shop",
        title: "Read Some Books",
        desc: "A Book Store",
        url: "projs/bookshop",
        publishedAt: 1448693940000,
        webUrl: "https://daniellesibony.github.io/MineSweeeper/",
        labels: ["books"],
    },


    {
        id: "pacman",
        name: "Pacman",
        title: "Play Pacman",
        desc: "A Computer Game",
        url: "projs/pacman",
        publishedAt: 1448693940000,
        webUrl: "https://daniellesibony.github.io/MineSweeeper/",
        labels: ["computer game"],

    },

    {
        id: "festivalambassador",
        name: "Festival Ambassador",
        title: "Festival Ambassador",
        desc: "Become A Festival Ambassador",
        url: "projs/festivalambassador",
        publishedAt: 1448693940000,
        webUrl: "https://daniellesibony.github.io/MineSweeeper/",
        labels: ["ambassador program"],

    },
    {
        id: "todos",
        name: "Todos",
        title: "List of Todos",
        desc: "Check Off Your Todo List",
        url: "projs/todos",
        publishedAt: 1448693940000,
        webUrl: "https://daniellesibony.github.io/MineSweeeper/",
        labels: ["lists"],
    }
    ]




