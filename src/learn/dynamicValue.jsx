function DynamicValue() {
    const title = 'Welcome to the new Blog';
    const likes = 50;
    const person = {
        name: "jayen",
        age: 16
    };
    const link = 'https://google.com'

    // 👆 dynamic__Value

    return (
        <div className="App">
            <div className="content">
                <h1>{title}</h1>
                <p>like {likes}</p>
                <p>my name {person.name}</p>
                <p>{10}</p>
                <p>{"Test"}</p>
                <p>{[1, 2, 3, 4, 5]}</p>
                <p>{Math.random() * 2}</p>

                <a href={link}>P</a>
            </div>
        </div>
    )
}

export default DynamicValue;
