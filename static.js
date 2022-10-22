class Governor {
  constructor(name, age, party) {
    this.name = name;
    this.age = age;
    this.party = party;
  }


winElection() {
  if(this.party === 'Democrat') {
    console.log('I have won the election')
    return this;
  }
  else {
    console.log('I lost the election against the Republican')
    return this;
  }
}
}

  let Kevin = new Governor('Kevin Smith', 'Flavortown', 'Democrat');
  let Brian = new Governor("Brian Jackson","Seasonless Springs", "Republican" )

  Kevin.age = 50
  Brian.age = 45
 
  Kevin.winElection()
  Brian.winElection()
  console.log(Kevin)
  console.log(Brian)