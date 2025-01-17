import { useEffect, useState } from "react"
import CarouselComponent from "../components/CarouselComponent"

function Home() {
    const [napoli, setNapoli] = useState()
    const [milano, setMilano] = useState()
    const [roma, setRoma] = useState()

    const getTemperatureNapoli = async () => {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Napoli&appid=97ab1f2ca067001a39f0a1f84a73ce34')
            if (response.ok) {
                const data = await response.json()
                setNapoli(data)
            } else {
                throw new Error('errore nella fetch di napoli')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getTemperatureMilano  = async () => {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Milano&appid=97ab1f2ca067001a39f0a1f84a73ce34')
            if (response.ok) {
                const data = await response.json()
                setMilano(data)
            } else {
                throw new Error('errore nella fetch di napoli')
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getTemperatureRoma = async () => {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Roma&appid=97ab1f2ca067001a39f0a1f84a73ce34')
            if (response.ok) {
                const data = await response.json()
                setRoma(data)
            } else {
                throw new Error('errore nella fetch di napoli')
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTemperatureNapoli()
        getTemperatureMilano()
        getTemperatureRoma()
    }, [])

    return (
        <div id="homeContent" className='w-50 m-auto pt-3'>
           {napoli && milano && roma && <CarouselComponent
             name1={napoli.name} name2={milano.name} name3={roma.name}
             temp1={Math.floor(napoli.main.temp - 273.15)} temp2={Math.floor(milano.main.temp - 273.15)} temp3={Math.floor(roma.main.temp - 273.15)}/>}
        </div>
    )
}

export default Home