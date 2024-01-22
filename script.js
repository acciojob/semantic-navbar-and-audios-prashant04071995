it('Semantic Navbar & Audios', () => {
  // Visit your page or ensure the application is running

  // Part 1: Navbar
  cy.contains('Home');
  cy.contains('About');
  cy.contains('Contact');

  // Part 2: Audio Section
  cy.contains('3 random audios');

  cy.get('audio').should($audios => {
    console.log('Number of audio elements found:', $audios.length);

    // Check if at least one audio element has the controls attribute
    expect($audios.filter('[controls]')).to.have.length.above(0);

    // Log the sources of all audio elements
    const srcs = $audios.map((i, el) => Cypress.$(el).attr('src'));
    console.log('Sources of audio elements:', srcs.get());

    // Assertions on the sources
    expect(srcs.get()).to.deep.eq([
      'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
      'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
      'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
    ]);
  });
});