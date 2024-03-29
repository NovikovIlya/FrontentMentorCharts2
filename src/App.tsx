import "./App.css";
import  { useState } from "react";
import {  Modal } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styles from "./App.module.css";
import InputComponents from "./components/InputComponents/InputComponent";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bal, setBal] = useState(1000);
  const [value, setValue] = useState({
    mon: 100,
    tue: 100,
    wed: 100,
    thu: 100,
    fri: 100,
    sat: 100,
    sun: 100,
  });
  const data = [
    {
      name: "mon",
      $: value.mon,
      amt: 2400,
    },
    {
      name: "tue",
      $: value.tue,
      amt: 2210,
    },
    {
      name: "wed",
      $: value.wed,
      amt: 2290,
    },
    {
      name: "thu",
      $: value.thu,
      amt: 2000,
    },
    {
      name: "fri",
      $: value.fri,
      amt: 2181,
    },
    {
      name: "sat",
      $: value.sat,
      amt: 2500,
    },
    {
      name: "sun",
      $: value.sun,
      amt: 2100,
    },
  ];
  const setBalance = (e: any) => {
    setBal(e.target.value);
  };
  const sum: any = Object.values(value).reduce(
    (acc: any, item: any) => acc + item,
    0
  );

  const handle = (e: any) => {
    if (e.target.value < 0) {
      return;
    }
    const objectNow = { ...value, [e.target.name]: Number(e.target.value) };

    const sumNow: any = Object.values(objectNow).reduce(
      (acc: any, item: any) => acc + item,
      0
    );

    if (bal < sumNow) {
      alert(`Сумма превышена, balance - ${bal} затрат ${sumNow}`);
      return;
    }
    setValue((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div>My balaance</div>
          <div className={styles.balance}>${bal}</div>
        </div>
        <div className={styles.circle}>
          <div className={styles.rightTwo}></div>
          <div className={styles.right}></div>
        </div>
      </div>
      <div className={styles.container}>
        <h1>Spending - Last 7 days </h1>
        <BarChart
          className={styles.chart}
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="$" stackId="a" fill="#EC755D" />
        </BarChart>

        <Modal
          title="Add info"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <InputComponents
            bal={bal}
            value={value}
            setBalance={setBalance}
            handle={handle}
          />
        </Modal>
        <div className={styles.inp}>
          <div>
            <div>Total this week</div>
            <div className={styles.sum}>${sum}</div>
          </div>
          <div>
            <div>Money left</div>
            <div  className={styles.sum}>${bal - sum}</div>
          </div>
        </div>
      </div>
      <div className={styles.btnParent}>
        <button className={styles.btn} onClick={showModal}>Change indicators</button>
      </div>
    </div>
  );
}
