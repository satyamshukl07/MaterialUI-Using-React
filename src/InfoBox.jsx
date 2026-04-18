import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox(){
    const INIT_URL =
     "https://images.moneycontrol.com/static-mcnews/2025/05/20250515043659_dd.jpg?impolicy=website&width=770&height=431";
    let info ={
        feelslike : 24.84,
        temp: 25.05,
        tempMin: 25.67,
        tempMax: 25.99,
        humidity: 47,
        weather: "haze",
    };
    return(
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>
            <div className = "CardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="Weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Weather Details
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Temperature: {info.temp}°C
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
        </div>
    );
}