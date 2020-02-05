import React, {useState, useEffect} from 'react';
import './index.css';
import axios from 'axios'

function App() {

  const [user, setUser] = useState({
    name: '', 
    id:'',
    img:'',
  })
  const [like, setLike] = useState(0)
  const [disLike, setDisLike] = useState(0)

  useEffect(async () => {
    const data = await axios.get('https://api.github.com/users')
    setUser({name:data.data[0].login, id:data.data[0].id, img:data.data[0].avatar_url})
  },[])

  return (
    <div class="container mt-4">
      <div className="card text-center mb-5 p-3">
            <div className="card-header text-danger">
              <h5><strong>Fetching API</strong></h5>
            </div>
            <div className="row">
              <div className="col-2 mt-2">
                <img className="card-img-top" src={`${user.img}`} alt="user avartar" width="20%" height="20%"/>
              </div>
              <div className="card-body col-4 text-left">
                ID: <strong>{user.id}</strong><br/>
                Name: <strong>{user.name}</strong>
                <div className="mt-3">
                  <button  onClick={() => setLike(like + 1)} class="btn btn-sm btn-primary">Like <i className="fa fa-thumbs-up"></i> {like}</button>  <button  onClick={() => setDisLike(disLike + 1)} class="btn btn-sm btn-danger">Dislike <i className="fa fa-thumbs-down"></i> {disLike}</button>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}

export default App;
