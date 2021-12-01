import Fish from '../game/fish';

describe('Fish obj', () => {

  test('all fish types are created', () => {
    const poolOfFish = [];
    for (let i = 0; i < 300; i++) {
      let fish = new Fish();
      poolOfFish.push(fish.type)
    }
    const uniqueFish = new Set(poolOfFish);
    expect(uniqueFish.size).toEqual(3);
  });

  test('all fish names are created', () => {
    const poolOfFish = [];
    for (let i = 0; i < 300; i++) {
      let fish = new Fish();
      poolOfFish.push(fish.name)
    }
    const uniqueFish = new Set(poolOfFish);
    expect(uniqueFish.size).toEqual(15);
  })

});
