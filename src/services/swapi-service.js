// import React from 'react';

export default class SwapiService {

    _apiBase = `https://swapi.co/api`;

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`${this._apiBase}/people`);
        return res.results;
    }
    getPerson(id) {
        return this.getResource(`${this._apiBase}/people/${id}/`);
    }
}

const swapi = new SwapiService();
swapi.getAllPeople().then((people) => {
    people.forEach((p) => {
        console.log(p.name);
    })
})
