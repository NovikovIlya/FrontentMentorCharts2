import styles from "./InputComponent.module.css";
import { Input } from "antd";

const InputComponents = ({ bal, handle, setBalance, value }: any) => {
  
  return (
    <div className={styles.inpKek}>
      <label htmlFor="balance">Balance</label>
      <Input type="number" value={bal} id="balance" onChange={setBalance} />

      <label htmlFor="id">Monday</label>
      <Input type="number" value={value.mon} id="mon" name="mon" onChange={handle} />

      <label htmlFor="id">Tuesday</label>
      <Input type="number" value={value.tue} name="tue" onChange={handle} />

      <label htmlFor="id">Wednesday</label>
      <Input type="number" value={value.wed} name="wed" onChange={handle} />

      <label htmlFor="id">Thursday</label>
      <Input type="number" value={value.thu} name="thu" onChange={handle} />

      <label htmlFor="id">Friday</label>
      <Input type="number" value={value.fri} name="fri" onChange={handle} />

      <label htmlFor="id">Saturday</label>
      <Input type="number" value={value.sat} name="sat" onChange={handle} />

      <label htmlFor="id">Sunday</label>
      <Input type="number" value={value.sun} name="sun" onChange={handle} />
    </div>
  );
};



export default InputComponents;
