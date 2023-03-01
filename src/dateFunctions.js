import { compareAsc, format } from "date-fns";
//const { format } = require("date-fns");

export default function currentDateLog() {
    console.log(format(new Date(), "dd-MM-yyyy"));
    const currentDate = format(new Date(), "dd-MM-yyyy");
    return currentDate;
}
