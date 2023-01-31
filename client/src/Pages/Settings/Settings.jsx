import Sidebar from "../../components/Sidebar/Sidebar";
import styled from "styled-components";

export default function Settings() {
  return (
    <StyledSettings>
        <StyledSettingsWrapper>
            <StyledSettingsTitle>
                <StyledSettingsUpdateTitle>Update Your Account</StyledSettingsUpdateTitle>
                <StyledSettingsDeleteTitle>Delete Account</StyledSettingsDeleteTitle>
            </StyledSettingsTitle>
            <StyledSettingsForm>
                <StyledSettingsLabel>Profile Picture</StyledSettingsLabel>
                <StyledSettingsPP>
                    <StyledSettingsImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Monsieur_Sarazin.jpg/800px-Monsieur_Sarazin.jpg" alt="profile pic" />
                    <StyledSettingsLabel htmlFor="fileInput">
                        <StyledSettingsPPIcon className="fa-regular fa-circle-user"></StyledSettingsPPIcon>
                    </StyledSettingsLabel>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                </StyledSettingsPP>
                <StyledSettingsLabel>Username</StyledSettingsLabel>
                <StyledSettingsInput type="text" placeholder="Nathan"/>
                <StyledSettingsLabel>Email</StyledSettingsLabel>
                <StyledSettingsInput type="email" placeholder="nathan.forman@gmail.com"/>
                <StyledSettingsLabel>Password</StyledSettingsLabel>
                <StyledSettingsInput type="password"/>
                <StyledSettingsSubmit>Update</StyledSettingsSubmit>
            </StyledSettingsForm>
        </StyledSettingsWrapper>
        <Sidebar/>
    </StyledSettings>
  )
}

const StyledSettings = styled.div`
    display: flex;
`

const StyledSettingsWrapper = styled.div`
    flex: 9;
    padding: 20px;
`

const StyledSettingsTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledSettingsUpdateTitle = styled.span`
    font-size: 30px;
    margin-bottom: 20px;
    color: lightcoral;
`

const StyledSettingsDeleteTitle = styled.span`
    color: red;
    font-size: 12px;
    cursor: pointer;
`

const StyledSettingsForm = styled.form`
    display: flex;
    flex-direction: column;
`

const StyledSettingsPP = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px 0;
`

const StyledSettingsImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 20px;
    object-fit: cover;
`

const StyledSettingsPPIcon = styled.i`
    width: 25px;
    height: 25px;
    border-radius: 15px;
    background-color: lightcoral;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
`

const StyledSettingsLabel = styled.label`
    font-size: 20px;
    margin-top: 20px;
`

const StyledSettingsInput = styled.input`
    color: gray;
    margin: 10px 0;
    height: 30px;
    border: none;
    border-bottom: 1px solid lightgray;
`

const StyledSettingsSubmit = styled.button`
    width: 150px;
    align-self: center;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: teal;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
`