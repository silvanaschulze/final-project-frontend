import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { SVGMap } from 'react-svg-map'
import Germany from '@svg-maps/germany'
import 'react-svg-map/lib/index.css'

const Maps = () => {
  const [loading, setLoading] = useState(false)
  const [userLocation, setUserLocation] = useState()

  useEffect(() => {
    const getUserLocation = async () => {
      setLoading(true)
      const {
        data: { location },
      } = await axios.get(
        'https://geo.ipify.org/api/v1?apiKey=at_q0PPYNVebXnhMzJOUModD2NEMlCWC'
      )
      switch (location.region) {
        case 'Baden-Wurttemberg':
          setUserLocation({ ...location, id: 'bw' })
          break
        case 'Berlin':
        case 'Land Berlin':
          setUserLocation({ ...location, id: 'be' })
          break
        case 'Brandenburg':
          setUserLocation({ ...location, id: 'bb' })
          break
        case 'Bremen':
          setUserLocation({ ...location, id: 'hb' })
          break
        case 'Hamburg':
          setUserLocation({ ...location, id: 'hh' })
          break
        case 'Hessen':
          setUserLocation({ ...location, id: 'he' })
          break
        case 'Niedersachsen':
          setUserLocation({ ...location, id: 'ni' })
          break
        case 'Mecklenburg-Vorpommern':
          setUserLocation({ ...location, id: 'mv' })
          break
        case 'Nordrhein-Westfalen':
          setUserLocation({ ...location, id: 'nw' })
          break
        case 'Rheinland-Pfalz':
          setUserLocation({ ...location, id: 'rp' })
          break
        case 'Saarland':
          setUserLocation({ ...location, id: 'sl' })
          break
        case 'Sachsen':
          setUserLocation({ ...location, id: 'sn' })
          break
        case 'Sachsen-Anhalt':
          setUserLocation({ ...location, id: 'st' })
          break
        case 'Schleswig-Holstein':
          setUserLocation({ ...location, id: 'sh' })
          break
        case 'Thüringen':
          setUserLocation({ ...location, id: 'th' })
          break
        default:
          setUserLocation(location)
      }
      setLoading(false)
    }
    getUserLocation()
  }, [])

  const selectLocation = ({ target }) => {
    setUserLocation({
      ...userLocation,
      region: target.getAttribute('name'),
      id: target.getAttribute('id'),
    })
  }

  const highlightLocation = (p) =>
    p.id === userLocation.id
      ? 'svg-map__location_selected'
      : 'svg-map__location_default'

  return (
    <div className='Maps'>
      {!loading && userLocation ? (
        <div>
          <p>{userLocation && userLocation.region}</p>
          <SVGMap
            map={Germany}
            className='svg-map-custom'
            onLocationClick={selectLocation}
            locationClassName={highlightLocation}
          />
        </div>
      ) : (
        <Loader type='Puff' color='#004e00' height={100} width={100} />
      )}
    </div>
  )
}

export default Maps
