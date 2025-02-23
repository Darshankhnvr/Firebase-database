import db from "@/utils/firestore";
import {doc, deleteDoc} from "firebase/firestore";


const DeleteItem = ({id}) =>{
    const handleDelete = async () =>{
        const itemRef = doc(db, "items", id)
        try{
            await deleteDoc(itemRef)
            alert('Item has been deleted successfully')
        }
        catch(e){
            alert('Error deleting item')
        }
    }
    return(
        <button onClick={handleDelete} className="border bg-red-400 p-1 rounded text-white"> Delete</button>
    )
}
export default DeleteItem;