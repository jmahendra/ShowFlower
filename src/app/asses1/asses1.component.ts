import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asses1',
  templateUrl: './asses1.component.html',
  styleUrls: ['./asses1.component.css']
})
export class Asses1Component implements OnInit {

  constructor() { }
arrayData:any='';
  ngOnInit() {
  }
user=[
  {
    name:'Lotus',
    img:'https://cdn.pixabay.com/photo/2019/08/16/15/03/water-lily-4410471__340.jpg',
    description:'The Lotus (Nelumbo nucifera) symbolizes purity, beauty, majesty, grace, fertility, wealth, richness, knowledge and serenity. The Pink Lotus is the National Flower of India'
  },
  {
    name:'Moon',
    img:'https://cdn.pixabay.com/photo/2019/06/02/00/21/moon-4245400__340.jpg',
    description:'The moon is a cold, dry orb whose surface is studded with craters and strewn with rocks and dust (called regolith). The moon has no atmosphere. Recent lunar missions indicate that there might be some frozen ice at the poles. The same side of the moon always faces the Earth'
  },
  {
    name:'Mountain',
    img:'https://cdn.pixabay.com/photo/2019/07/16/20/48/dolomites-4342572__340.jpg',
    description:'A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally steeper than a hill. Mountains are formed through tectonic forces or volcanism'
  }
]
send(one)
{
  this.arrayData=one
}
}

