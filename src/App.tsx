import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import GlobalStyle from './styles/global';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

function App() {
  const classes = useStyles();

  const makePoint = () => {
    const pointPage = (window as any).open("https://cvccorp.nexusweb.com.br/", "");
    setTimeout(() => console.log('test', pointPage.getElementById("txtValor")), 1000)
  }

  return (
    <>
      <GlobalStyle/>

      <form className={classes.container} noValidate>
        <TextField
          id="start_time"
          label="Entrada"
          type="time"
          defaultValue="09:00"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="start_lunch_time"
          label="Entrada do Almoço"
          type="time"
          defaultValue="12:00"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="end_lunch_time"
          label="Volta do Almoço"
          type="time"
          defaultValue="13:12"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="start_time"
          label="Fim do Expediente"
          type="time"
          defaultValue="19:00"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <Button variant="text" color="default" onClick={makePoint}>
          Bater o ponto
        </Button>
      </form>
    </>
  );
}

export default App;
