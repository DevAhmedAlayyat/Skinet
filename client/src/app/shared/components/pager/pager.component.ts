import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  @Input() totalItemsCount: number;
  @Input() pageSize: number;
  @Output() pagerChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPagerChange(event: any){
    this.pagerChange.emit(event.page);
  }

}
