import Container from "@mui/material/Container";

function UserPostConstruction ({content}){
    return (<Container sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 2,
        padding: 3,
        mx: 'auto',
        bgcolor: 'bluey.main',
        color: 'blacky.main',
        height: '20vh',
        width: '60vw',
        fontSize:' 1rem',
        m: 4,
        borderRadius: 5,
        textAlign: 'flexStart',
        justifyContent: 'spaceBetween',
    }}>
        <div>
            <li>Common Name:  {content['common']}</li>
            <li>Scientific Name:  {content['binomial']}</li>
            <li>Date Seen:  {content['date']}</li>
            <li>Location: {content['where']}</li>
        </div>
    </Container>)
}
export default UserPostConstruction