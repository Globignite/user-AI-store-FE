import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Cards = () => {
  return (
    <div>
        <Card sx={{ maxWidth: 345, border:'1px solid #272955', borderRadius:'5', bgcolor:'primary.cardColor'}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="180"
                image="/images/ai.jpeg"
                alt="Ai "
                />
                <CardContent height="100px" >
                <Typography gutterBottom variant="h6" color="textColor.main" fontWeight="bold" >
                    Ai Tool
                </Typography>
                <Typography variant="body2" color="textColor.cardDesc">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
  )
}

export default Cards