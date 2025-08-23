export default class Building {
  constructor(sqft ) {
    this.sqft  = sqft ;
    if (new.target !== Building) {
      if (new.target.evacuationWarningMessage === Building.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = newSqft;
  }
  get sqft() {
    return this._sqft;
  }

  /**
   * Implementation required
   */
  evacuationWarningMessage() {
  }
}