import { useEffect, useRef, useState } from 'react';

export default function NextForm() {
    const inputRef = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleNext() {
        // console.log("inside handleNext....", inputRef.current.length - 1)
        if (currentIndex < inputRef.current.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex)
            inputRef.current[nextIndex].focus();
            // console.log("next....")
        }
        else {
            setCurrentIndex(0)
            inputRef.current[0].focus()
        }
    }
    useEffect(() => {
        inputRef.current[0].focus();
    }, [])

    const handleSUbmit = () => {
        alert("Submitted Successfully.......")
        setCurrentIndex(0)
        inputRef.current[0].focus()
    }

    return (
        <div className='container' style={{ justifyItems: "center", paddingTop: 60 }}>
            <h1>Task 1</h1>
            <p>Create a form with multiple input fields. Use useRef to programmatically focus
                on the next input field when [Next] is clicked.
            </p>
            {["Name", "Email", "Phone", "Address"].map((label, index) => (
                <div key={index}>
                    <label className="form-label">{label}</label>
                    <input className="form-control" type="text" ref={(e) => inputRef.current[index] = e} style={{ width: 500, backgroundColor: "rgb(210, 210, 210)" }} />
                </div>
            ))}
            <button className="btn btn-primary" onClick={handleNext} style={{ marginTop: 30 }}>Next</button>
            <button type="submit" className="btn btn-primary" onClick={handleSUbmit} style={{ marginTop: 30, marginLeft: 10 }}>Submit</button>
        </div>
    );;
}
