import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

//このファイルでデザイン!
//普通にクイズに必要なボタンとか表示させるだけでいい
//ほぼHTMLと同じだから頑張って！
//俺はバックエンド作っとく
//そそ HTMLくらいはできるでしょ
//このファイルがもうreactのプロジェクトファイル
//がんば！そうしたほうがいい俺もHTMLそんな得意じゃない
//解説ガン無視
//とりあえず動けば良き
//俺もよくわかってないｗ
//とりあえず動かしてから理解していけばいい
//ならない
//そそ気合で見よ
function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(name)}`)
    .then(response => response.json())
    .then(state => setGreeting(state.greeting)); 
  }


  <button class="favorite styled"
        type="button">
    Add to favorites
</button>
//test
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          はなくそ<code>こんちくわ</code> ちくわちくわ
        </p>
        
               <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{greeting}</p>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//できるよ保存してから
//control+Cで止めた後npm start
//こっちではほとんどやってないｗ
//記事見てるだけ
//保存してなかった
export default App;
