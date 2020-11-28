export {};

class Mahoutsukai {}
class Souryo {}

// MahoutsukaiとSouryoを継承したい．．．
// js は多重継承できない．
// → 複数のinterfaceは継承(厳密には実装という)できる．

// class Taro extends Mahoutsukai, Souryo {} // エラー

interface Kenja {
  ionazun(): void; // シグネチャー
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }
  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();

jiro.ionazun();
jiro.kougeki();
