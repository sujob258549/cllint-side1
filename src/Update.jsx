import { useLoaderData } from "react-router-dom";

const Update = () => {

    const lodUser = useLoaderData()
    const handelUpdateSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email }
        console.log(user)
        fetch(`http://localhost:5000/users/${lodUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


    }
    return (
        <div>
            <h2>Update data{lodUser.name}</h2>
            <h1> update from for react</h1>
            <form onSubmit={handelUpdateSubmit}>
                <input type="text" defaultValue={'md sujon mia'} name="name" id="" /><br />
                <input type="email" name="email" defaultValue={'sfsaf@gmail.com'} id="" /><br />
                <input type="submit" value={"Submit"} id="" />


            </form>
        </div>
    );
};

export default Update;