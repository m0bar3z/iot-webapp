import React from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useState , useEffect } from 'react';

//components
import DeviceList from '../Panel/OwnerDevices/DeviceList';
import Header from '../Panel/Header';
import Loading from '../Loading';

//api
import api from '../../Api/api';
import { Container } from 'react-bootstrap';
import DeviceCard from '../Panel/OwnerDevices/DeviceCard';




const OwnerDevices = () => {

  const [ loading , setLoading ] = useState(false)
  const [ devices , setDevices ] = useState([])
  const [ message , setMessage ] = useState('')
  const [ searchInput , setSearchInput ] = useState('')
  const [ foundDevices , setFoundDevices ] = useState(false)
  const history = useHistory();


  const search = e => {
    setSearchInput(e.target.value)   
    let found = devices.filter(device => device.name.includes(e.target.value))
    setFoundDevices(found)
  }

  const handleResponse = res => {
      setLoading(false)
      if (res.data.success) {
          console.log(res.data.data)
          setDevices(res.data.data)
          setFoundDevices(res.data.data)
      } else {
          //history.push('/login')
          setMessage(res.data.message)
      }
  }

  const callAPI = () => {
      const cookies = new Cookies();
      let accessToken = cookies.get('authorization');
      let idToken = cookies.get('idtoken');

      let user = {
          headers: {
              'Authorization': accessToken,
              'idToken': idToken
          }
      }
      setLoading(true)
      api.get('/device/owner', user)
          .then(res => handleResponse(res))
          .catch(err => {
              history.push('/login')
              setLoading(false)
              setMessage('ارتباط با سرور برقرار نمی باشد')
              console.log(err.request.status)
          })
  }

  useEffect(() => {
      callAPI();
  }, [])

  return (
      <div className="panel">
          <Header />
          <Container>
          <DeviceCard ownerDevices={devices} search={search} />
          { loading ? <Loading /> : <h4 className="mt-5 text-center">{message}</h4>}
          {
            foundDevices.length ? <DeviceList devices={foundDevices}/> : null
          }
          </Container>
      </div>
  );

  
}

export default OwnerDevices;
