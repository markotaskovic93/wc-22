import { standing } from '../data/ranking'

export default class Ranking {
    
    constructor() {
        this.teamsNumber = 32
        this.hatsNumber = 4
        this.teamsPerHat = 8
        this.teamPerGroup = 4
        this.hats = []
        this.groups = []
        this.standing = standing
        return this
    }

    /**
     * Create hats
     */
    generateHats() {
        for (let i = 0; i < this.hatsNumber;  i++) {
            let teams = this.standing.slice((i * this.teamsPerHat), ((i * this.teamsPerHat) + this.teamsPerHat))
            this.hats.push(teams)
        }
        console.log(this.hats)
        return this
    }

    /**
     * Return hats
     */
    get getWCHats () {
        return this.hats
    }

}