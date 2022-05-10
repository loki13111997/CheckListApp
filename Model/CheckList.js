class CheckList {
  constructor(note, imageUri, checkList) {
    this.id = new Date().toString() + Math.random().toString();
    this.note = note;
    this.imageUri = imageUri;
    this.checkList = checkList;
  }
}
export default CheckList;
