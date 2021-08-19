import { FcApproval, FcCancel } from "react-icons/fc";

export default function UpdateDone(item, currentState) {
	console.log("upd-<<", item)

	if (currentState) {
		UpdateIsDone(item.TodoID, false)
		// we are changing the value of the TODO in false(NO DONE)
		return (<FcCancel></FcCancel>)
	}
	else {
		// we are changin the TODO in true (IS DONE)
		UpdateIsDone(item.TodoID, true)
		return (<FcApproval></FcApproval>)
	}

}


function UpdateIsDone(item, newState) {
	console.log("newState", newState)
	console.log("id", item)
	const TodoInfo = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			TodoID: item,
			newState: newState,
		})
	};
	fetch('http://localhost:5000/Updateisdone', TodoInfo)
		.then(response => response.json())
}