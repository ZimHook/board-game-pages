'reach 0.1';

const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);
const winner = (PosA, PosB) =>
      (PosA >= 25 ? 2 :(PosB >= 25 ? 0 : 1));    //2->A,    1->DRAW,       0->B
  
//玩家接口
const Player ={
  ...hasRandom,
  Pos: UInt, 
  getStep: Fun([UInt,UInt],UInt),
  seeOutcome: Fun([UInt,UInt,UInt],Null),
  seePos: Fun([UInt,UInt,UInt],Null),
  informTimeout: Fun([], Null)
};
//下注接口
const Alice =
      { ...Player,
        wager: UInt };
const Bob =
      { ...Player,
        acceptWager: Fun([UInt], Null) }; 

const DEADLINE = 10;

export const main = Reach.App(
  {},
  [Participant('Alice', Alice), Participant('Bob', Bob)],
  (A, B) => {
    const informTimeout = () => {
      each([A, B], () => {
    interact.informTimeout(); }); };
    //下注
    A.only(() => { 
      const wager = declassify(interact.wager);
    });
    A.publish(wager).pay(wager);
    commit();

    B.only(() => { 
      interact.acceptWager(wager);
    });
    B.pay(wager).timeout(DEADLINE, () => closeTo(A, informTimeout));

    //开始游戏
    var [posA,posB,outcome] = [0,0,DRAW];
    invariant(balance() == 2 * wager && isOutcome(outcome) );
    while( outcome == DRAW ){
      commit();
        //A执行
        A.only(() => {
          const stepA = declassify(interact.getStep(posA,posB)); 
          interact.seePos(posA+stepA, posB, stepA);
        });
        A.publish(stepA);
        if(stepA+posA >= 25){
          [posA,posB,outcome] = [posA+stepA,posB,2];
          continue;
        }
        commit();
        //B执行
        B.only(() => {
          const stepB = declassify(interact.getStep(posB,posA+stepA));     
          interact.seePos(posB+stepB, posA+stepA, stepB);
        });
        B.publish(stepB);
        if(stepB+posB >= 25){
          [posA,posB,outcome] = [posA+stepA,posB+stepB,0];
          continue;
        }
        //计算胜负结果
        [posA,posB,outcome] = [posA+stepA,posB+stepB,winner(posA, posB)];
        continue;
    }
    
    //计算并转移奖励
    const [forA, forB] =
            outcome == 2 ? [2, 0] :
            outcome == 0 ? [0, 2] :
            [1, 1];
    transfer(forA * wager).to(A);
    transfer(forB * wager).to(B);
    commit();
    //返回胜负结果
    each([A, B], () => {
      interact.seeOutcome(outcome,posA,posB); });
    exit();
  }
);
