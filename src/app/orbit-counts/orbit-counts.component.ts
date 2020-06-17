import { Component, OnInit, Input} from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[]

  typeList = ["Space Debris", "Communication", "Probe", "Positioning", "Space Station", "Telescope"]

  constructor() { }

  ngOnInit() {
  }

  countType(typeName:string): number {
    let count = 0;
    for (let item of this.satellites) {
      if (item.type.toLowerCase() === typeName.toLowerCase()) {
        count += 1;
      }
    }
    return count;
  }

}
