import React, { useState } from 'react';
import slotCherry from './assets/slot-cherry.png';
import slotLemon from './assets/slot-lemon.png';
import slotMelon from './assets/slot-melon.png';
import slotPrune from './assets/slot-prune.png';
import slotSeven from './assets/slot-seven.png';

import styles from './Slots.module.css';

export const Slot = ({ value }: { value: number }) => {
  let img = slotCherry;
  switch (value) {
    case 0: img = slotCherry; break;
    case 1: img = slotLemon; break;
    case 2: img = slotMelon; break;
    case 3: img = slotPrune; break;
    case 4: img = slotSeven; break;
  }
  return (
    <div className={styles.slot}>
      <img src={img}/>
    </div>
  );
};

const getSlots = (slots: number) => {
  let slotNumbers: number[] = Array.from(Array(slots).keys()).map(() =>
    Math.floor(Math.random() * 5)
  );
  return slotNumbers;
}


export const SlotMachine = ({ slots }: { slots: number }) => {
  const [slotNumbers, setSlotNumbers] = useState(getSlots(slots));
  const [money, setMoney] = useState(100);

  const isWinning = () => {
    let winning = slotNumbers.every((slot) => slot === slotNumbers[0]);
    return winning;
  }

  const pullLever : React.MouseEventHandler<HTMLButtonElement> = () => {
    setSlotNumbers(getSlots(slots));
    if (isWinning()) {
      setMoney(money + 20);
    } else {
      setMoney(money => money - 1);
    }
  }


  return (
    <div className={styles.slotMachineContainer}>
      <h1>Slots</h1>
      <p>In this assignment it was the goal to create a slot machine that would give you 3 random images upon pressing the button <br />upon a loss you would lose a euro and if you win you would gain 30</p>
      {money > 0 && <div>Saldo: €{money}</div>}
      <div className={styles.slotMachineSubContainer}>
        <button className={styles.lever} onClick={pullLever} disabled={money > 0 ? false : true}>Pull Lever</button>
        {slotNumbers.map((slot, i) => (
          <Slot value={slot} key={i} />
        ))}
      </div>
      {money == 0 && <p className={styles.linearWipe}>Je bent bankroet!</p>}
 
    </div>
  );
};

const App = () => {
  return (
    <>      
      <SlotMachine slots={3} />

    </>
  );
};

export default () => <App/>;