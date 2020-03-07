describe("SoftUniFy", () => {
    it('is allSongs object', () => {
        let myClass = new SoftUniFy();
        assert.deepEqual(myClass.allSongs, {})
    });
    it('is allSongs object', () => {
        let myClass = new SoftUniFy();
        let msq = `You have not downloaded a song song yet. Use SoftUniFy's function downloadSong() to change that!`;

        assert.equal(myClass.playSong('song'), msq)
    });
    it('rateArtist()', () => {
        //• rateArtist() sums the values of all votes on the current artist and return the average rate.
        let myClass = new SoftUniFy();
        let msq = `The Eminem is not on your artist list.`;

        assert.equal(myClass.rateArtist('Eminem'), msq)
    });
})