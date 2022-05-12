import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  const setUserInfo = useSetRecoilState(userState);
  //const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>Top Page</h2>
      <SecondaryButton onClick={onClickAdmin}>Administrator</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>General user</SecondaryButton>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
