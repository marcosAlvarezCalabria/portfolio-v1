import { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeContext from '../../../../contexts/mode.context';
import LanguageContext from '../../../../contexts/language.context';



const ITEM_HEIGHT = 48;

export default function NavbarMenu() {
  const [sunColor, setSunColor] = useState("aliceblue");
  const { mode, toggleMode } = useContext(ModeContext);
  const { language, toggleLanguage } = useContext(LanguageContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMode = () => {
    toggleMode();
  };

  const handleLanguage = () => {
    toggleLanguage();
  };
  const languageSelected = language.slice(0, 2).toUpperCase();

  return (

    <div>
      <IconButton
        style={{
          backgroundColor: sunColor,
          width: "24px",
          height: "26px",
          borderRadius: "24%",
          cursor: 'pointer',
          border: mode === "light" ? "solid 1px #000" : "none", // Aplicación condicional del borde
         marginLeft:"20px"
        }}

        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton >
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
           marginLeft:"2px",
           marginTop:"15px",
           background:"aliceblue",
           boxShadow:screenWidth < 480 ? (mode === "dark" ? "2px 1px 15px rgba(236, 243, 255, 0.9)" : "2px 1px 10px rgba(4, 4, 4, 0.983)") : "none"
          },
        }}
      >

        <MenuItem  >
          <div>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={handleLanguage} type="checkbox" role="switch" id="flexSwitchCheckLanguage" />
              <label className="" htmlFor="flexSwitchCheckLanguage">
                <p className=' text-center language-icon'

                  style={{
                    backgroundColor: sunColor,
                    width: "24px",
                    height: "26px",
                    borderRadius: "24%",
                    
                    cursor: 'pointer',
                    border: mode === "light" ? "solid 1px #000" : "none" // Aplicación condicional del borde
                  }}>{languageSelected}</p>
              </label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={handleMode} type="checkbox" role="switch" id="flexSwitchCheckMode" />
              <label className="form-check-label" htmlFor="flexSwitchCheckMode">
                <i
                  style={{
                    backgroundColor: sunColor,
                    width: "24px",
                    borderRadius: "50%",
                    border: mode === "light" ? "solid 1px #000" : "none",
                    cursor: 'pointer',

                  }}
                  className={`p-1 fa fa-${mode === "dark" ? "sun-o" : "moon-o"} mode-icon`}
                  aria-hidden="true"
                ></i>
              </label>
            </div>

          </div>

        </MenuItem>

      </Menu>
    </div>
  );
}