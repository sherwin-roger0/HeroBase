import React,{useState,useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default function Main() {

  const history = useHistory();
  const [search, setSearch] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    loop(1,721)
  },[]);

  function loop(index,count){
     fetch("https://www.superheroapi.com/api.php/311911567208324/"+index)
        .then(response => response.json())
        .then(data => {var name=String(Object.values(data)[2])
          var info ={
            name : name,
            index : index-1
          }
          array.push(info);
        });
    if (index < count){
        index ++;
        loop(index,count);
    }
 }

  async function Select(e){

    const id = e.target.value;
    console.log(id);
    await fetch("https://www.superheroapi.com/api.php/311911567208324/"+id).then(response => response.json())
        .then(data => {
        const name=data.name
       	const {intelligence,power} = data.powerstats
        const biography = data.biography
        const fullName = biography["full-name"]
        const placeOfBirth = biography["place-of-birth"]
        const firstAppearance = biography["first-appearance"]
        const publisher = biography["publisher"]
        const gender = data.appearance.gender
        const race = data.appearance.race
        const work = data.work.occupation
        const relatives = data.connections.relatives
        const {url} = data.image

        const hero = {
          name:name,
          intelligence : intelligence,
          power: power,
          fullName:fullName,
          placeOfBirth:placeOfBirth,
          firstAppearance:firstAppearance,
          publisher:publisher,
          gender:gender,
          race:race,
          work:work,
          relatives:relatives,
          image:url
        }
        window.localStorage.setItem('hero', JSON.stringify(hero));
        history.push("/hero");
    });

  }
  
  return (
    <div className="App">
      <br/>
      <br/>
      <br/>
      <br/>
        <Container fixed>
          <Grid direction="column" justify="center" alignItems="center" container spacing={1}>
            <Grid item xs>
              <Typography variant="h5">Search any character from Marvel or Dc (Example : Batman)</Typography>
            </Grid>
            <Grid item xs>
              <TextField onChange={(e)=>setSearch(e.target.value)} id="outlined-basic" label="Search" variant="outlined" />
            </Grid>
          {
            array.filter(arr => arr.name.includes(search.charAt(0).toLocaleUpperCase()+search.slice(1, search.length))).map(filteredName => (
                  <Grid item xs>
                    <br/>
                    <Button variant="contained" size="small">
                      <button style={{color:"green"}}  value={filteredName.index} onClick={Select} >
                        {filteredName.name}
                      </button>
                    </Button>  
                    <br/>     
                  </Grid>
          ))}
          </Grid>
        </Container>
    </div>
  );

}
