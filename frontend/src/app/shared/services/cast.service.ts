import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor() { }

  getCastOptions(){
    return [
      {label:'まま', value:1},
      {label:'まい', value:2},
      {label:'まお', value:3},
      {label:'まき', value:4},
      {label:'まな', value:5},
      {label:'まほ', value:6},
      {label:'さとう', value:7},
      {label:'やまね', value:8},
      {label:'よしだ', value:9},
      {label:'ゆみ', value:10},
      {label:'ゆき', value:11},
      {label:'ゆっこ', value:12},
      // {label:'まま', value:{castId:1,name:'まま'}},
      // {label:'まい', value:{castId:2,name:'まい'}},
      // {label:'まお', value:{castId:3,name:'まお'}},
      // {label:'まき', value:{castId:4,name:'まき'}},
      // {label:'まな', value:{castId:5,name:'まな'}},
      // {label:'まほ', value:{castId:6,name:'まほ'}},
      // {label:'さとう', value:{castId:7,name:'さとう'}},
      // {label:'やまね', value:{castId:8,name:'やまね'}},
      // {label:'よしだ', value:{castId:9,name:'よしだ'}},
      // {label:'ゆみ', value:{castId:10,name:'ゆみ'}},
      // {label:'ゆき', value:{castId:11,name:'ゆき'}},
      // {label:'ゆっこ', value:{castId:12,name:'ゆっこ'}},
    ]
  }

  getCastList(){
    return [
      {
        castId : 1,
        name : '鈴木えみ',
        kana : 'まま',
        birthday : '1985-09-13',
        birthplace : '東京都',
        entryDate : '',
        note : ''
      },
      {
        castId : 2,
        name : '広瀬すず',
        kana : '',
        birthday : '1998-06-19',
        birthplace : '静岡県',
        entryDate : '',
        note : ''
      },
      {
        castId : 3,
        name : '山本美月',
        kana : '',
        birthday : '1991-07-18',
        birthplace : '福岡県',
        entryDate : '',
        note : ''
      },
      {
        castId : 4,
        name : '本田翼',
        kana : '',
        birthday : '1992-06-27',
        birthplace : '東京都',
        entryDate : '',
        note : ''
      },
      {
        castId : 5,
        name : '深田恭子',
        kana : '',
        birthday : '1982-11-02',
        birthplace : '東京都',
        entryDate : '',
        note : ''
      },
      {
        castId : 6,
        name : '高橋メアリージュン',
        kana : '',
        birthday : '1987-11-08',
        birthplace : '滋賀県',
        entryDate : '',
        note : ''
      },
      {
        castId : 7,
        name : '中条あやみ',
        kana : '',
        birthday : '1997-02-04',
        birthplace : '大阪府',
        entryDate : '',
        note : ''
      },
      {
        castId : 8,
        name : '小松菜奈',
        kana : '',
        birthday : '1996-02-16',
        birthplace : '東京都',
        entryDate : '',
        note : ''
      },
      {
        castId : 9,
        name : '吉岡里帆',
        kana : '',
        birthday : '1993-01-15',
        birthplace : '京都府',
        entryDate : '',
        note : ''
      },
      {
        castId : 10,
        name : '石原さとみ',
        kana : '',
        birthday : '1986-12-24',
        birthplace : '東京都',
        entryDate : '',
        note : ''
      },
    ]
  }

  findCast(castId:number){
    const casts = this.getCastList();
    return casts.find(cast => cast.castId === castId);
  }
}
