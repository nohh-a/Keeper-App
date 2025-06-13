import React, {useState} from "react";

function CreateArea(props) {

    const [input, setInput] = useState({key:"", title:"",content:"",});
    
    function handleInput (event) {
        const {value,name} = event.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: value,
        } ));
    }

    function submitNote(event) {
      props.onClick(input);
      setInput({
        key:"", title:"",content:"",
      })
      event.preventDefault();
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleInput} value={input.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleInput} value={input.content} />
        <button onClick={submitNote}
        // onClick={()=> {
        //     props.onClick(input)
        //     event.preventDefault()   
        //     setNote({
        //       key:"",
        //       title:"",
        //       content:"",
        //     })        
        // }}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
