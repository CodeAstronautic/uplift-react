
import {makeStyles,Grid, Container,Hidden} from '@material-ui/core';
import './App.css';
import NavTabs from './NavTab/tab';
import image from './Saly-19.png'

const useStyles = makeStyles((theme)=>({
  container:{
    display:'flex',
    flexDirection:'row',
  },
  items:{
    flex:1,
  },
  back:{
  }
}));
function App() {
  const classes = useStyles();
  return (
    <Grid container>
      <Hidden only={['xs','sm']}>
      <Grid items className={classes.items}>
        
           <img className={classes.image} alt="Image" width='500px' height='500px' src={image}/>
        
      </Grid>
      </Hidden>
      <Grid items className={classes.items}>
        <NavTabs/>
      </Grid>
    </Grid>
  );
}

export default App;
