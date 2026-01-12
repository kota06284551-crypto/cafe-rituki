import { MenuItem } from './types';

export const MENU_ITEMS: { drinks: MenuItem[], food: MenuItem[] } = {
  drinks: [
    {
      id: 'd1',
      name: '涼月ブレンド',
      description: '深みのあるコクと、すっきりとした後味。当店の看板ブレンドです。',
      price: 650,
      image: 'https://picsum.photos/id/1060/400/300',
      category: 'drink',
      tags: ['苦味', 'コク']
    },
    {
      id: 'd2',
      name: '炭火焙煎アイス珈琲',
      description: '備長炭で焙煎した豆を濃厚に抽出。キリッとした苦味が特徴。',
      price: 700,
      image: 'https://picsum.photos/id/766/400/300',
      category: 'drink',
      tags: ['アイス', '苦味']
    },
    {
      id: 'd3',
      name: 'ウィンナーコーヒー',
      description: '深煎りの珈琲に、冷たい生クリームを浮かべました。',
      price: 750,
      image: 'https://picsum.photos/id/425/400/300',
      category: 'drink',
      tags: ['甘味', 'クリーム']
    },
    {
      id: 'd4',
      name: 'ロイヤルミルクティー',
      description: 'アッサム茶葉を牛乳で煮出した、濃厚なミルクティー。',
      price: 780,
      image: 'https://picsum.photos/id/225/400/300',
      category: 'drink',
      tags: ['紅茶', 'ミルク']
    },
    {
      id: 'd5',
      name: '自家製レモンスカッシュ',
      description: '国産レモンを蜂蜜に漬け込みました。爽やかな酸味です。',
      price: 700,
      image: 'https://picsum.photos/id/306/400/300',
      category: 'drink',
      tags: ['炭酸', '爽やか']
    },
    {
      id: 'd6',
      name: 'カフェオレ',
      description: '珈琲とミルクの優しいハーモニー。大きなボウルでどうぞ。',
      price: 700,
      image: 'https://picsum.photos/id/63/400/300',
      category: 'drink',
      tags: ['ミルク', 'マイルド']
    }
  ],
  food: [
    {
      id: 'f1',
      name: 'モーニングセット',
      description: '厚切りトーストとゆで卵、サラダのセット。朝の定番です。',
      price: 650,
      image: 'https://picsum.photos/id/488/400/300',
      category: 'food',
      tags: ['モーニング', 'パン']
    },
    {
      id: 'f2',
      name: 'クラシックプリン',
      description: '少し固めの、昔ながらのカスタードプリン。ほろ苦いカラメルが絶品。',
      price: 600,
      image: 'https://picsum.photos/id/292/400/300',
      category: 'food',
      tags: ['スイーツ', '人気']
    },
    {
      id: 'f3',
      name: '日替わりランチ',
      description: '季節の食材を使った、手作りのランチプレートです。',
      price: 1100,
      image: 'https://picsum.photos/id/493/400/300',
      category: 'food',
      tags: ['ランチ', '食事']
    },
    {
      id: 'f4',
      name: 'たまごサンド',
      description: '出汁の効いた厚焼き玉子を挟んだ、関西風のたまごサンドです。',
      price: 850,
      image: 'https://picsum.photos/id/835/400/300',
      category: 'food',
      tags: ['食事', 'パン']
    }
  ]
};