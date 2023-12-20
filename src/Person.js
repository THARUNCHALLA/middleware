import { useSelector } from "react-redux"

const Person = () => {
    const DATA = useSelector((s) => {
        return s
    })
    return (
        <>
        {DATA.value && <div>
            <h1>name: {DATA.name}</h1>
            <h1>email: {DATA.email}</h1>
            <h1>id :{DATA.id}</h1>
            <h1>username: {DATA.username}</h1>
            <h1>phone Number: {DATA.phone}</h1>
            <h1>website :{DATA.website}</h1>
        </div>
        }
        </>
    )
}

export default Person