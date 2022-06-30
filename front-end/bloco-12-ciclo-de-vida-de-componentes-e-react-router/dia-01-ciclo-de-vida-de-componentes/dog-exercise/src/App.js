import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      name: '',
      array: [],
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    //  Se já temos uma imagem guardada, vamos mostrá-la em vez de pedir uma nova
    if (localStorage.namedDogURL) {
      const parseStorage = JSON.parse(localStorage.namedDogURL);
      const lastDog = parseStorage[parseStorage.length - 1].message;
      this.setState({
        array: parseStorage,
        data: { message: lastDog },
      });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { data: actualData } = this.state;
    if (prevState.data !== actualData) {
      const dogBreed = actualData.message.split('/')[4];
      alert(dogBreed);
    }
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((result) => this.setState({ data: result }));
  }

  saveData() {
    const {
      data: { message },
      name,
      array,
    } = this.state;
    //  atualizando e guardando a lista inteira de imagens no `localStorage`
    const dogData = { message, name };
    const newArray = [...array, dogData];
    this.setState({ array: newArray });
    this.setState({ name: '' });
    localStorage.setItem('namedDogURL', JSON.stringify(newArray));
  }

  render() {
    const { data, name } = this.state;

    if (data === '') return 'loading...';
    return (
      <div>
        <p>Doguinhos</p>
        <button type="button" onClick={ this.fetchDog }>Novo doguinho!</button>
        <div>
          <input
            type="text"
            value={ name }
            onChange={ (e) => this.setState({ name: e.target.value }) }
            placeholder="digite o nome do doguinho"
          />
          <button type="button" onClick={ this.saveData }>Salvar doguinho!</button>
        </div>
        <div>
          <img src={ data.message } alt={ data.message } />
        </div>
      </div>
    );
  }
}

export default App;
