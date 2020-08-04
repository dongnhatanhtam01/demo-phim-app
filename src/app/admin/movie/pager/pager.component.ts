import { Component, OnInit,EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
  inputs: [ 'itemCount', 'pageSize', 'pageIndex' ],
  outputs: [ 'pageIndexChange' ],
})
export class PagerComponent implements OnInit {

  constructor() { this.pageSize = 1;
    // console.log(this.itemCount, this.pageSize, this.pageIndex);
    
  }

  // access to variable of parent class
  //tao bien _itemCount
  _itemCount: number;
  get itemCount() {
    return this._itemCount;
  }
  set itemCount(value) {
    this._itemCount = value;
    this.updatePageCount();
  }
  //tao bien _pageSize
  _pageSize: number;
  set pageSize(value) {
    this._pageSize = value;
    this.updatePageCount()
  };
  get pageSize() {
    return this._pageSize;
  }

  //updatePageCount()
  _pageCount: number;
  updatePageCount() {
    this._pageCount = Math.ceil(this.itemCount / this.pageSize);
  }

  _pageIndex: number;
  pageIndexChange = new EventEmitter();
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = value;
    this.pageIndexChange.emit(this.pageIndex);
  }
  //  hoàn tất việc truy cập biến 

  //access class method
  //còn nhỏ hơn số trang thì cho đi tiếp
  get canMoveToNextPage(): boolean {
    return this.pageIndex < this._pageCount - 1 ? true : false;
  }
  //>=1
  get canMoveToPreviousPage(): boolean {
    return this.pageIndex >= 1 ? true : false;
  }
  // end of get method

  moveToNextPage() {
    if (this.canMoveToNextPage) {
      this.pageIndex++;
    

    }
  }
  moveToPreviousPage() {
    if(this.canMoveToPreviousPage) {
      this.pageIndex--;
    }
  }
  moveToLastPage() {
    this.pageIndex = this._pageCount - 1;
  }

  moveToFirstPage() {
    this.pageIndex = 0;
  }
  ngOnInit(): void {
    console.log(this.itemCount, this.pageSize, this.pageIndex);
  }
  ngOnChange() : void {
    console.log(this.itemCount, this.pageSize, this.pageIndex);
  }

}
