/* eslint-disable react/prop-types */
import "./Formcontrol.css";


import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

function Input({type, placeHolder, icon, handelChangeInput, showPassword="", isVisible, value}) {
  return (
    <div className="form-control">
      {icon}
      <input 
      value={value}
      type={type} 
      onChange={(handelChangeInput)}
      placeholder={placeHolder}
      />
      {(type === "password" || isVisible) && (
        <div className="visibility-psw" onClick={showPassword}>
          {isVisible ?   <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
        </div>
      )}
    </div>
  )
}

export default Input