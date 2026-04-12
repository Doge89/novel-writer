import DatePicker, { DatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateTimePicker(props: DatePickerProps) {
  return (
    <div className='w-full flex flex-1 flex-row rounded-full overflow-hidden group'>
      <DatePicker className='w-full py-2 grow px-4 outline-0 text-complementary-950 border rounded-full border-gray-500 group-hover:border-accent-700 transition focus:border-accent-700 [&:focus+div]:border-accent-700' {...props}/>
    </div>
  )
}
