import { Injectable } from '@angular/core';

const _year: number = 5;
const _productNames: string[] = 'Nguyen Van A,果汁100%グレープ,果汁100%レモン,果汁100%ピーチ,コーヒーマイルド,コーヒービター,コーヒーミルク,ピリピリビール,オタル白ラベル,バードワイン,ホワイトソルト,ブラックペッパー,ピュアシュガー,うまい素,ピュアデミグラスソース,だしかつお,だしこんぶ,ピリカラタバスコ,のり山椒,特製和風醤油,バニラクリームアイス,チョコクリームアイス,紅茶バー,じゃがチップス,アメリカンクラッカー,バナナキャンディー,メロンミルクキャンディー,小倉あんぱん,インドカレーパン,チーズあんぱん,ロッキーチーズ,パルメザンチーズ,フレッシュバター,ライフマーガリン,ローカロリー牛乳,牛乳マイルド,ストロベリーヨーグルト,ブルーベリーヨーグルト,ラズベリーヨーグルト,ココナッツミルク,モーニングブレッド,バタートースト,バケットフランス,極上パスタ,極上マカロニ,伝統スパゲッティ,Socola,コーンフレークプレーン,コーンフレークチョコ,コーンフレークシュガー,アメリカンポーク,うす味ウインナー,ベターローストハム,ベタープレスハム,ベター生ハム,特製サラミ,和風ハンバーグレトルト,照焼きミートボール,ミックスハム,ミートバー,もめんどうふ特上,きぬごしどうふ特上,冷凍ミックスベジタブル,冷凍クリームコロッケ,Sua Hot Ga,冷凍ポテトコロッケ,冷凍枝豆,冷凍やきおにぎり,Dong Nhat Anh Tam,特選味のり,北海道昆布,やきいかするめくん,食卓わかめ,ふりかけかつお風味,ふりかけ鮭風味,大陸サーモン,特選にぼし,本がつお特上,ころもはんぺん'.split(',');

@Injectable({
  providedIn: 'root'
})
export class PageDemoService {

  // tạo ngẫu nhiên các object array theo khuôn 
  getOrders(length = 5): object[] {
    let orders: object[] = [];
    for (let i = 0; i < length; i++) {
      let date = new Date();
      orders.push({
        STT: i + 1,
        Name: this.randomArray(_productNames),
        Ngay: this.addDays(date, -this.random(30)).toLocaleDateString(),
        soLuong: this.random(500, 10 )*100
      })
    }
    // debugger
    return orders;
  }
  constructor() { 
   
    
  }

  //trả về số làm tròn từ nhỏ nhất = min đến lớn nhất bằng max
  random (max: number, min = 0): number {
    return Math.floor(Math.random()*(max - min)) + min;
  }
  //chạy random từ 0 tới 79 lấy ra items[thứ i random]
  randomArray(items: any[]): any{
    // debugger
    return items[this.random(items.length)]
  }

  addDays(value: Date, days: number ): Date {
    return new Date (value.getFullYear(), value.getMonth(), value.getDate() + days);
  }
}
