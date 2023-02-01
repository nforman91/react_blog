import styled from "styled-components";

export default function Write() {
  return (
    <StyledWrite>
        <img className="writeImg" src="https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg" alt="dog" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </StyledWrite>
  )
}

const StyledWrite = styled.div`
    padding-top: 50px;
`