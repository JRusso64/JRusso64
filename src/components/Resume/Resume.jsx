import myResume from '../../images/resume.pdf'

const Resume = () => {
    return(
        <>
            <iframe title="My Resume" 
                    width="100%" 
                    height="100vh"
                    style={{
                        border: "none",
                        display: "block",
                        margin: 0,
                        padding: 0,
                        overflow: "hidden",
                        width: "100%",
                        height: "100vh",
                        objectFit: "cover",
                    }}
                    src={`${myResume}#view=FitH&toolbar=0&navpanes=0`}>
                    </iframe>
        </> 
    )
}


export default Resume;