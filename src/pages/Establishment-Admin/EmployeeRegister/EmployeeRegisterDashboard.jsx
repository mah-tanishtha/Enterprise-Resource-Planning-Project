import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect ,useState} from 'react';





export default function BasicCard(props) {
  const [users,setUsers] = useState(0)

  useEffect(()=>{
    fetch("/data.json")
    .then((response)=>{
      if(!response.ok){
        console.error("Fetching Error")
      }
      else{
        return response.json()
      }
    })
    .then((data)=>{
     setUsers(data.transferdata.length)
      

    })
    .catch((err)=>{
      console.log("Network Error",err)
    })
  },[])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mt: 3.5 }}component="div" >
        {props.text}
        <div className='float-end'>
            <img src={props.chart}/>
        </div>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" className='d-flex flex-column'>
        
          Total no. : {users}
        </Typography>
        {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">List of {props.userName} </Button>
      </CardActions>
    </Card>
  );
}
