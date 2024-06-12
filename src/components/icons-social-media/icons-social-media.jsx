import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

function IconsSocialMedia() {
    return (
        <div className='mt-5'>
            <Link color="inherit" href="https://www.linkedin.com/in/marcos-alvarez-calabria">
                <LinkedInIcon
                    sx={{
                        "&:hover": { color: "blue" },
                        marginLeft: "20px",
                        marginTop: "10px",
                        fontSize: 30
                    }}
                />
            </Link>
            <Link color="inherit" className='mr-2' href="https://github.com/marcosAlvarezCalabria?tab=repositories">
                <GitHubIcon
                    sx={{
                        "&:hover": { color: "blue" },
                        marginLeft: "20px",
                        marginTop: "10px",
                        fontSize: 30
                    }}
                />
            </Link>
        </div>
    );
}

export default IconsSocialMedia;
