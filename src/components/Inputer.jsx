import React, {useState}  from 'react'


const Inputer = () => {
    const [value, setValue] = useState("")
    const [save, setSave] = useState([])
        return(
            <>
            <h2>{value}</h2>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => {setSave((prev) =>[...prev, value] )}}>Сохранить</button>
            <p>{save.map((el) => {
                return (<p>{el}</p>)
            })}</p>
            </>
)    
}

export default Inputer;