import { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeContext from '../../../../contexts/mode.context';
import LanguageContext from '../../../../contexts/language.context';



export default function NavbarMenu() {
  const getButtonColor = () => {
    return mode === 'dark' ? '#374151' : '#f1f5f9';
  };
  
  const getIconColor = () => {
    return mode === 'dark' ? '#ffffff' : '#1f2937';
  };
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
  

  return (

    <div>
      <IconButton
        style={{
          backgroundColor: getButtonColor(),
          width: "24px",
          height: "26px",
          borderRadius: "24%",
          cursor: 'pointer',
          border: mode === "light" ? "solid 1px #cbd5e1" : "solid 1px #30363d",
          marginLeft:"20px",
          color: getIconColor()
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
           background: mode === 'dark' ? '#1f2937' : '#f1f5f9',
           border: mode === 'dark' ? '1px solid #374151' : '1px solid #cbd5e1',
           boxShadow:screenWidth < 480 ? (mode === "dark" ? "2px 1px 15px rgba(236, 243, 255, 0.9)" : "2px 1px 10px rgba(4, 4, 4, 0.983)") : "none"
          },
        }}
      >

        <MenuItem>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label className={`ios-switch theme-switch ${mode === 'dark' ? 'dark-theme' : 'light-theme'}`}>
              <input 
                type="checkbox" 
                checked={mode === 'light'} 
                onChange={handleMode}
              />
              <span className="ios-slider">
                <i className={`fa fa-moon-o switch-icon`}></i>
                <i className={`fa fa-sun-o switch-icon`}></i>
              </span>
            </label>
            
            <label className={`ios-switch language-switch ${mode === 'dark' ? 'dark-theme' : 'light-theme'}`}>
              <input 
                type="checkbox" 
                checked={language === 'english'} 
                onChange={handleLanguage}
              />
              <span className="ios-slider">
                <span className="switch-text">ES</span>
                <span className="switch-text">EN</span>
              </span>
            </label>
          </div>
        </MenuItem>

      </Menu>
    </div>
  );
}