import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {
  const [kursy,SetKursy] = useState(["Programownie w c#","Angular dla początkujących","Kurs Django"])
  const [wybranyNumer, setWybranyNumer] = useState(1)
  const [imieNazwisko, setImieNazwisko] = useState("")
  return (
    <div>
      <h2>Liczba kursów: {kursy.length}</h2>
      <ul>
        {kursy.map((kurs,index) => <li>{kurs}</li>)}
      </ul>
      <label className='form-label' htmlFor='imie'>Imię i nazwisko:</label>
      <input className='form-control' id="imie" onChange={(e) => setImieNazwisko(e.target.value)}></input>

      <label htmlFor='numer' className='form-label' >Numer kursu:</label>
      <input  id='numer' className='form-control' type='number' min={1} max={kursy.length} defaultValue={wybranyNumer} onChange={(e) => setWybranyNumer(e.target.value)} ></input>
      <button className='btn btn-primary' onClick={()=>console.log(imieNazwisko,kursy[wybranyNumer-1])}>Zapisz do kursu</button>
    </div>
  );
}

export default App;
