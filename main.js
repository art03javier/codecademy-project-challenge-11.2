// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  const pAequorFactory = (specimenNum, dna) => { 
    return {
      specimenNum: specimenNum,   
      dna: dna,
      mutate () {
        let baseNew = returnRandBase()
        let baseRandom = Math.floor(Math.random() * this.dna.length) 
        
        while (baseNew === this.dna[baseRandom]) { 
          baseNew = returnRandBase()
        }
        baseNew = this.dna[baseRandom];
        
        return this.dna;
      },
      compareDNA (pAequor) {
        let commonDNA = 0;
        baseDNA = ['A','T','C','G'];
        for (i = 0; i < dna.length; i++) {
          if (this.dna[i] === pAequor.dna[i]) {
            commonDNA += 1;
          }
        }
        let percentage = Math.floor(commonDNA / dna.length * 100);
        console.log(`Specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentage}% DNA in common.`);
        return '';
      },
      willLikelySurvive() { 
        let counter = 0;
        this.dna.forEach(baseDNA => {
          if (baseDNA === 'C' || baseDNA ==='G') {
            counter +=1;
          }
        })
          if (counter >= 9) {
            return true;
          } else {
            return false;
          }
      },
      complementStrand() {
        let complement = [];
        let dnaSequence = this.dna;
        for (let i = 0; i < dnaSequence.length; i++) {
          if (dnaSequence[i] === 'A') {
            complement.push('T');
          } else if (dnaSequence[i] === 'T') {
            complement.push('A');
          } else if (dnaSequence[i] === 'C') {
            complement.push('G');
          } else if (dnaSequence[i] === 'G') {
            complement.push('C');
          }
        }
        console.log(dnaSequence);
        console.log(complement);
        return '';
      }
    }
}
const pAequorInstance = [];
let pAequorCounter = 1;

while (pAequorInstance.length < 30) {
  let newPaequor = pAequorFactory(pAequorCounter, mockUpStrand());
  if (newPaequor.willLikelySurvive() === true) {
      pAequorInstance.push(newPaequor);
  }
  pAequorCounter++;
}

/*
let a = pAequorFactory(1, mockUpStrand())
let b = pAequorFactory(2, mockUpStrand())
console.log(a.mutate())
console.log(a.compareDNA(b))
console.log(b.willLikelySurvive())
console.log(a.complementStrand())
console.log(pAequorInstance); 
*/