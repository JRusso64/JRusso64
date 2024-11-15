import myResume from '../../images/resume.pdf';

const Resume = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh', // Make sure it takes the full height of the viewport
            overflow: 'hidden'
        }}>
            <iframe
                title="My Resume"
                style={{
                    border: "none",
                    width: "100%",
                    height: "100%", // Let iframe take full height of the container
                }}
                src={`${myResume}#view=FitH&toolbar=0&navpanes=0`}
            />
        </div>
    );
}

export default Resume;
