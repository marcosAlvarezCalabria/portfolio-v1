import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

function IconsSocialMedia() {
    return (
        <div className='social-links-row'>
            <Link color="inherit" className="social-link-chip" href="https://www.linkedin.com/in/marcos-alvarez-calabria" underline="none">
                <LinkedInIcon
                    sx={{
                        fontSize: 22
                    }}
                />
                <span>LinkedIn</span>
            </Link>
            <Link color="inherit" className="social-link-chip" href="https://github.com/marcosAlvarezCalabria?tab=repositories" underline="none">
                <GitHubIcon
                    sx={{
                        fontSize: 22
                    }}
                />
                <span>GitHub</span>
            </Link>
        </div>
    );
}

export default IconsSocialMedia;
