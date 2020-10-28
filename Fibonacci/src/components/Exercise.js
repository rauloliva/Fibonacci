import React, {useState} from 'react'

const Exercise = () => {
    const [state, setState] = useState({
        numberSubmitted: 0,
        message: '',
        displayContainer: false
    })

    const FibonacciList = () => {
        var list = [];
        const numbers = []
        list[0] = 0;
        list[1] = 1;

        for (let i = 2; i < 20; i++) {
            list[i] = list[i - 2] + list[i - 1];
            numbers.push(<span className="number" key={i}>{ list[i] }</span>)
        }
        return numbers
    }

    const changeNumber = (event) => {
        console.log(event.target.value);
        setState({
            numberSubmitted: event.target.value
        })
    }

    const verifyNumber = () => {
        setState({
            displayContainer: true
        })
        var list = [];
        list[0] = 0;
        list[1] = 1;
        var index = 2;
        var flag = false

        for (let i = 2; !flag; i++) {
            list[i] = list[i - 2] + list[i - 1];
            if(list[i] == state.numberSubmitted) {
                index = i
                flag = true
            } else if(list[i] > state.numberSubmitted) {
                index = i
                flag = true
            }
        }

        if(list[index] == state.numberSubmitted) {
            setState({
                message: "Belongs to series",
                numberSubmitted: state.numberSubmitted,
                displayContainer: true
            })
        } else {
            setState({
                message: "Number not in the series",
                numberSubmitted: state.numberSubmitted,
                displayContainer: true
            })
        }
    }

    return (
        <div className="exercise_container">
            <h2 align="center" className="exercise_title">Fibonacci List</h2>
            <div className="fibonacci_list">
                {FibonacciList()}
            </div>

            <div className="verify_container">
                <p align="center">Verify number belongs to the series</p>
                <div className="input_container">
                    <input type="number" placeholder="Number" className="" onChange={ changeNumber }/>
                    <button onClick={ verifyNumber }>Submit</button>
                </div>
            </div>

            <div className={state.displayContainer ? 'message_container' : 'hide' }>
                <p align="center" className="message">{ state.message }</p>
            </div>
        </div>
    )
}

export default Exercise