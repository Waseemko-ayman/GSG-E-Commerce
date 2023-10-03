// import * as React from "react";
// import { useEffect, useState } from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import { StyledSelect } from "./style.js";
// import { getCurrencys } from "@/redux/slices/currencys.js";
// import { useDispatch, useSelector } from "react-redux";

// export default function SelectSmall() {
//   const dispatch = useDispatch();
//   const [typeContent, setTypeContent] = useState("currency");
//   const [counrty, setCountry] = useState("");
//   const { currencys } = useSelector((state) => state.currencys);

//   const handleChange = (e) => {
//     setCountry(e.target.value);
//   };

//   useEffect(() => {
//     dispatch(getCurrencys());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <StyledSelect sx={{ maxWidth: "150px", border: "none" }} size="small">
//       <Select
//         value={counrty}
//         onChange={handleChange}
//         displayEmpty
//         sx={{ border: "none" }}
//       >
//         {currencys.map((currency) => (
//           <MenuItem key={currency?.id} value={currency?.countryName}>
//             {currency?.countryName}, {currency?.currencyCode}
//           </MenuItem>
//         ))}
//       </Select>
//     </StyledSelect>
//   );
// }
