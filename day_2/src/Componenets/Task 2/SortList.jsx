import { useRef, useState } from 'react';
import { data } from './Data';

function SortList() {

    const draggedMail = useRef(0);
    const draggedOverMail = useRef(0);
    const [list, setList] = useState(data);

    const handleSort = () => {
        // for swaping.......
        /* const emailClone = [...list]
        const temp = emailClone[draggedMail.current]
        emailClone[draggedMail.current] = emailClone[draggedOverMail.current]
        emailClone[draggedOverMail.current] = temp;
        setList(emailClone) */
        // for sorting................
        const updatedList = [...list];
        const draggedItem = updatedList.splice(draggedMail.current, 1)[0];
        updatedList.splice(draggedOverMail.current, 0, draggedItem);
        setList(updatedList);
    }
    return (
        <div className='container' style={{ justifyItems: "center", paddingTop: 60 }}>
            <h1>Task 2</h1>
            <p>Develop a drag-and-drop list using React refs to allow users to reorder list
                items.</p>
            {list.map((item, index) => (
                <div className="container" key={item.id}
                    style={{
                        borderRadius: 10,
                        backgroundColor: '#00009d',
                        color: 'white',
                        width: '300px',
                        height: '30px',
                        marginTop: 10,
                        marginBottom: 20,
                        display: 'flex',
                    }}
                    draggable
                    onDragStart={() => { draggedMail.current = index }}
                    onDragEnter={() => { draggedOverMail.current = index }}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <p>
                        {item.id} -  {item.email}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default SortList
